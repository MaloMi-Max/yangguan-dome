import {
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  FULL_UV,
  cloneUv,
  coverUv,
  formatAspect,
  formatPercent,
  measureUv,
  mirrorUvH,
  mirrorUvV,
  type UvCorner,
  type UvQuad,
} from "../domain/mapping";
import type { MediaInfo } from "../data/media";

interface UvAlignPanelProps {
  open: boolean;
  uv: UvQuad;
  onChange(uv: UvQuad): void;
  onClose(): void;
  onVideoRef(element: HTMLVideoElement | null): void;
  mediaInfo: MediaInfo;
  screenAspect: number;
  screenLabel: string;
  videoMuted: boolean;
}

const CORNERS: UvCorner[] = ["tl", "tr", "br", "bl"];
const CORNER_LABELS: Record<UvCorner, string> = {
  tl: "TL",
  tr: "TR",
  br: "BR",
  bl: "BL",
};

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function snap(value: number): number {
  const targets = [0, 0.25, 0.5, 0.75, 1];
  for (const target of targets) {
    if (Math.abs(value - target) < 0.012) return target;
  }
  return value;
}

function round(value: number): number {
  return Math.round(value * 1000) / 1000;
}

export function UvAlignPanel({
  open,
  uv,
  onChange,
  onClose,
  onVideoRef,
  mediaInfo,
  screenAspect,
  screenLabel,
  videoMuted,
}: UvAlignPanelProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const dragging = useRef<UvCorner | null>(null);
  const [showGuides, setShowGuides] = useState(true);

  const sourceAspect = mediaInfo.aspect > 0 ? mediaInfo.aspect : 16 / 9;
  const sourceWidth = mediaInfo.width || 1920;
  const sourceHeight = mediaInfo.height || 1080;
  const metrics = measureUv(uv, sourceWidth, sourceHeight);
  const cropLabel = `${formatPercent(metrics.cropWidth)} × ${formatPercent(metrics.cropHeight)}`;

  const updateCorner = (corner: UvCorner, next: [number, number]) => {
    onChange({ ...uv, [corner]: [round(next[0]), round(next[1])] });
  };

  const pointFromEvent = (event: ReactPointerEvent<HTMLElement>): [number, number] => {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return [0, 0];
    const u = clamp01((event.clientX - rect.left) / rect.width);
    const v = clamp01(1 - (event.clientY - rect.top) / rect.height);
    return [snap(u), snap(v)];
  };

  const handlePointerDown = (corner: UvCorner, event: ReactPointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dragging.current = corner;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateCorner(corner, pointFromEvent(event));
  };

  const handlePointerMove = (corner: UvCorner, event: ReactPointerEvent<HTMLButtonElement>) => {
    if (dragging.current !== corner) return;
    updateCorner(corner, pointFromEvent(event));
  };

  const handlePointerEnd = (event: ReactPointerEvent<HTMLButtonElement>) => {
    dragging.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleKeyDown = (corner: UvCorner, event: ReactKeyboardEvent<HTMLButtonElement>) => {
    const step = event.shiftKey ? 0.05 : 0.005;
    const current = uv[corner];
    let next: [number, number] = [...current];
    if (event.key === "ArrowLeft") next = [clamp01(current[0] - step), current[1]];
    else if (event.key === "ArrowRight") next = [clamp01(current[0] + step), current[1]];
    else if (event.key === "ArrowUp") next = [current[0], clamp01(current[1] + step)];
    else if (event.key === "ArrowDown") next = [current[0], clamp01(current[1] - step)];
    else return;
    event.preventDefault();
    updateCorner(corner, next);
  };

  const polygonPoints = CORNERS.map((corner) => {
    const point = uv[corner];
    return `${point[0] * 100},${(1 - point[1]) * 100}`;
  }).join(" ");

  const handleStyle = (corner: UvCorner) => ({
    left: `${uv[corner][0] * 100}%`,
    top: `${(1 - uv[corner][1]) * 100}%`,
  });

  return (
    <aside
      className={`uv-window ${open ? "is-open" : ""}`}
      aria-label="UV alignment window"
      aria-hidden={!open}
    >
      <header className="uv-head">
        <div>
          <p className="eyebrow">Mapping / UV align</p>
          <h2>Screen calibration <span className="uv-global-badge">GLOBAL UV</span></h2>
        </div>
        <button type="button" className="uv-close" onClick={onClose} aria-label="Close UV window">
          ×
        </button>
      </header>

      <div className="uv-source-row">
        <span className={`source-dot source-dot--${mediaInfo.status}`} aria-hidden="true" />
        <span className="uv-source-name">{mediaInfo.label}</span>
        <span className={`uv-live-badge ${mediaInfo.kind === "capture" ? "is-live" : ""}`}>
          {mediaInfo.kind === "capture" ? "LIVE CAPTURE" : mediaInfo.kind.toUpperCase()}
        </span>
      </div>

      <div
        className="uv-stage"
        ref={stageRef}
        style={{ aspectRatio: `${sourceAspect}` }}
      >
        <video
          ref={onVideoRef}
          className="uv-video"
          muted={videoMuted}
          playsInline
          autoPlay
          aria-label="Mapped video source"
        />
        {showGuides && (
          <svg className="uv-guides" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <line x1="33.333" y1="0" x2="33.333" y2="100" />
            <line x1="66.667" y1="0" x2="66.667" y2="100" />
            <line x1="0" y1="33.333" x2="100" y2="33.333" />
            <line x1="0" y1="66.667" x2="100" y2="66.667" />
            <line className="uv-guide-center" x1="50" y1="0" x2="50" y2="100" />
            <line className="uv-guide-center" x1="0" y1="50" x2="100" y2="50" />
            <rect className="uv-safe" x="5" y="5" width="90" height="90" />
          </svg>
        )}
        <svg className="uv-quad-overlay" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points={polygonPoints} />
        </svg>
        {CORNERS.map((corner) => (
          <button
            key={corner}
            type="button"
            className={`uv-handle uv-handle--${corner}`}
            style={handleStyle(corner)}
            onPointerDown={(event) => handlePointerDown(corner, event)}
            onPointerMove={(event) => handlePointerMove(corner, event)}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            onKeyDown={(event) => handleKeyDown(corner, event)}
            aria-label={`${CORNER_LABELS[corner]} source UV handle. Use arrow keys to nudge.`}
          >
            <span>{CORNER_LABELS[corner]}</span>
          </button>
        ))}
        <div className="uv-stage-label">SOURCE / DRAG CORNERS</div>
      </div>

      <div className="uv-stats">
        <div>
          <span>SOURCE</span>
          <strong>
            {mediaInfo.width || "—"} × {mediaInfo.height || "—"}
          </strong>
          <small>{formatAspect(sourceAspect)}</small>
        </div>
        <div>
          <span>SURFACE</span>
          <strong>{screenLabel}</strong>
          <small>{formatAspect(screenAspect)}</small>
        </div>
        <div>
          <span>UV CROP</span>
          <strong>{cropLabel}</strong>
          <small>
            {metrics.cropPixelsX} × {metrics.cropPixelsY}
          </small>
        </div>
        <div>
          <span>VIEW</span>
          <strong>3D live</strong>
          <small>drag to orbit</small>
        </div>
      </div>

      <div className="uv-presets">
        <button type="button" onClick={() => onChange(cloneUv(FULL_UV))}>
          Full source
        </button>
        <button
          type="button"
          onClick={() => onChange(coverUv(sourceAspect, screenAspect))}
        >
          Crop to screen
        </button>
        <button type="button" onClick={() => onChange(mirrorUvH(uv))}>
          Mirror H
        </button>
        <button type="button" onClick={() => onChange(mirrorUvV(uv))}>
          Mirror V
        </button>
        <button type="button" onClick={() => onChange(cloneUv(FULL_UV))}>
          Reset
        </button>
        <button type="button" className={showGuides ? "is-on" : ""} onClick={() => setShowGuides((current) => !current)}>
          Guides
        </button>
      </div>

      <div className="uv-precision">
        {CORNERS.map((corner) => (
          <span key={corner}>
            <b>{CORNER_LABELS[corner]}</b> {uv[corner][0].toFixed(3)}, {uv[corner][1].toFixed(3)}
          </span>
        ))}
      </div>

      <p className="uv-help">
        Drag the four corner handles to crop / reposition the source. Arrow keys nudge; Shift accelerates.
        Guides show thirds and a 5% safe border.
      </p>
      <div className="uv-global-foot">
        <b>ONE UV MAP</b> → ALL SCREEN SURFACES / BOTH VENUES
      </div>
    </aside>
  );
}
