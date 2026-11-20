import type { ChangeEvent } from "react";
import type { BuiltinMedia, MediaInfo } from "../data/media";
import type { CameraPreset, Cue, VenueManifest, ViewerState } from "../domain/scene";

interface ControlPanelProps {
  venues: VenueManifest[];
  venue: VenueManifest;
  cameraPreset: CameraPreset;
  viewerState: ViewerState;
  builtinMedia: BuiltinMedia[];
  builtinId: string;
  mediaInfo: MediaInfo;
  capturing: boolean;
  captureSupported: boolean;
  captureError?: string;
  onVenueChange(id: string): void;
  onCameraChange(id: string): void;
  onCue(cue: Cue): void;
  onReflectionChange(enabled: boolean): void;
  onVideoFile(file?: File): void;
  onBuiltinChange(id: string): void;
  onCaptureScreen(): void;
  onStopCapture(): void;
  onOpenUv(): void;
  onViewCheck(): void;
  onEnterVr(): void;
  immersiveVrSupported: boolean;
}

export function ControlPanel({
  venues,
  venue,
  cameraPreset,
  viewerState,
  onVenueChange,
  onCameraChange,
  onCue,
  onReflectionChange,
  onVideoFile,
  builtinMedia,
  builtinId,
  mediaInfo,
  capturing,
  captureSupported,
  captureError,
  onBuiltinChange,
  onCaptureScreen,
  onStopCapture,
  onOpenUv,
  onViewCheck,
  onEnterVr,
  immersiveVrSupported,
}: ControlPanelProps) {
  const handleVideo = (event: ChangeEvent<HTMLInputElement>) => {
    onVideoFile(event.target.files?.[0]);
  };

  return (
    <aside className="control-panel">
      <section className="control-section">
        <p className="eyebrow">Venue catalog</p>
        <div className="venue-list">
          {venues.map((candidate) => (
            <button
              type="button"
              className={`venue-card ${candidate.id === venue.id ? "venue-card--active" : ""}`}
              key={candidate.id}
              onClick={() => onVenueChange(candidate.id)}
            >
              <span>{candidate.name}</span>
              <small>{candidate.city}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="control-section">
        <label className="field-label" htmlFor="camera-select">
          Camera
        </label>
        <select
          id="camera-select"
          value={cameraPreset.id}
          onChange={(event) => onCameraChange(event.target.value)}
        >
          {venue.cameras.map((camera) => (
            <option key={camera.id} value={camera.id}>
              {camera.name}
            </option>
          ))}
        </select>
      </section>

      <section className="control-section">
        <p className="field-label">Cues</p>
        <div className="cue-grid">
          {venue.cues.map((cue) => (
            <button type="button" key={cue.id} onClick={() => onCue(cue)}>
              {cue.name}
            </button>
          ))}
        </div>
      </section>

      <section className="control-section">
        <label className="toggle-row">
          <span>
            Floor reflection + SSR
            <small>Screen-space reflections on the polished floor; bloom stays on.</small>
          </span>
          <input
            type="checkbox"
            checked={viewerState.reflections}
            onChange={(event) => onReflectionChange(event.target.checked)}
          />
        </label>
      </section>

      <section className="control-section">
        <label className="field-label" htmlFor="builtin-media">
          Screen media
        </label>
        <select
          id="builtin-media"
          value={builtinId}
          onChange={(event) => onBuiltinChange(event.target.value)}
        >
          {builtinMedia.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
        <input id="video-file" type="file" accept="video/*" onChange={handleVideo} />
        <div className="source-action-row">
          <button
            type="button"
            className="source-action"
            onClick={onCaptureScreen}
            disabled={!captureSupported}
            title={
              captureSupported
                ? "Capture a screen or application window"
                : "Display capture API is not available"
            }
          >
            {capturing ? "Re-capture display" : "Capture screen / window"}
          </button>
          {capturing && (
            <button type="button" className="source-action source-action--quiet" onClick={onStopCapture}>
              Stop
            </button>
          )}
        </div>
        <div className={`source-readout ${mediaInfo.error ? "source-readout--error" : ""}`}>
          <span className={`source-dot source-dot--${mediaInfo.status}`} aria-hidden="true" />
          <span>{mediaInfo.label}</span>
          <strong>
            {mediaInfo.status === "ready"
              ? `${mediaInfo.width} × ${mediaInfo.height}`
              : mediaInfo.status}
          </strong>
          {captureError && <small className="source-error">{captureError}</small>}
        </div>
        <div className="mapping-actions">
          <button type="button" className="mapping-action" onClick={onOpenUv}>
            UV alignment window
          </button>
          <button type="button" className="view-check-action" onClick={onViewCheck}>
            View check / hide UI
          </button>
        </div>
        <small className="field-note">
          Local files, built-in clips, and browser display capture are supported. NDI still needs a
          local NDI-to-WebRTC bridge; browsers cannot read NDI directly.
        </small>
      </section>

      <section className="control-section control-section--footer">
        <button
          type="button"
          className="primary-action"
          onClick={onEnterVr}
          disabled={!immersiveVrSupported}
        >
          {immersiveVrSupported ? "Enter WebXR" : "WebXR unavailable"}
        </button>
      </section>
    </aside>
  );
}
