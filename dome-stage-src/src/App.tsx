import { useEffect, useMemo, useRef, useState } from "react";
import { CapabilityBadges } from "./components/CapabilityBadges";
import { ControlPanel } from "./components/ControlPanel";
import { StageCanvas, xrStore } from "./components/StageCanvas";
import { UvAlignPanel } from "./components/UvAlignPanel";
import { venues } from "./data/venues";
import {
  BUILTIN_MEDIA,
  DEFAULT_BUILTIN_MEDIA,
  EMPTY_MEDIA_INFO,
  type MediaInfo,
  type MediaKind,
} from "./data/media";
import { applyCue } from "./domain/cue-engine";
import { FULL_UV, coverUv, type UvQuad } from "./domain/mapping";
import { initialViewerState, type ViewerState } from "./domain/scene";
import { detectCapabilities, type RuntimeCapabilities } from "./lib/capabilities";
import { useMediaRecorder } from "./lib/useMediaRecorder";

interface MediaSelection {
  kind: MediaKind;
  label: string;
  src?: string;
  stream?: MediaStream;
}

type CaptureError = Error & { name?: string };

const defaultMedia: MediaSelection = {
  kind: "builtin",
  label: DEFAULT_BUILTIN_MEDIA.label,
  src: DEFAULT_BUILTIN_MEDIA.src,
};

export function App() {
  const [venueId, setVenueId] = useState(venues[0].id);
  const venue = useMemo(
    () => venues.find((candidate) => candidate.id === venueId) ?? venues[0],
    [venueId],
  );
  const [cameraId, setCameraId] = useState(venue.cameras[0].id);
  const cameraPreset =
    venue.cameras.find((candidate) => candidate.id === cameraId) ?? venue.cameras[0];
  const [viewerState, setViewerState] = useState<ViewerState>(initialViewerState);
  const [capabilities, setCapabilities] = useState<RuntimeCapabilities>();

  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);
  const [media, setMedia] = useState<MediaSelection>(defaultMedia);
  const [builtinId, setBuiltinId] = useState(DEFAULT_BUILTIN_MEDIA.id);
  const [mediaInfo, setMediaInfo] = useState<MediaInfo>({
    ...EMPTY_MEDIA_INFO,
    label: DEFAULT_BUILTIN_MEDIA.label,
    kind: "builtin",
  });
  const [capturing, setCapturing] = useState(false);
  const [captureError, setCaptureError] = useState("");
  const [uv, setUv] = useState<UvQuad>(() => {
    try {
      const stored = window.localStorage.getItem("sceneforge.globalUv");
      if (!stored) return FULL_UV;
      const parsed = JSON.parse(stored) as UvQuad;
      if (parsed?.tl && parsed.tr && parsed.br && parsed.bl) return parsed;
    } catch {
      // Ignore malformed local mapping state.
    }
    return FULL_UV;
  });
  const [uvOpen, setUvOpen] = useState(true);
  const [focusMode, setFocusMode] = useState(false);
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const [audioMuted, setAudioMuted] = useState(false);
  const {
    supported: recorderSupported,
    recording,
    starting: recordingStarting,
    elapsed: recordingElapsed,
    error: recordingError,
    notice: recordingNotice,
    startRecording,
    stopRecording,
    formatDuration,
  } = useMediaRecorder({
    videoElement,
    audioMuted,
    audioUnlocked,
    filePrefix: `sceneforge-${venue.id}`,
  });

  const customUv = useRef(Boolean(window.localStorage.getItem("sceneforge.globalUv")));
  const autoFitDone = useRef(Boolean(window.localStorage.getItem("sceneforge.globalUv")));
  const streamRef = useRef<MediaStream | null>(null);
  const fileUrlRef = useRef<string | null>(null);
  const screenAspect = venue.screen.width / venue.screen.height;
  const screenLabel =
    venue.screen.shape === "dome"
      ? `Dome Ø${venue.screen.width} m`
      : `${venue.screen.width} × ${venue.screen.height} m`;
  const captureSupported =
    typeof navigator !== "undefined" && Boolean(navigator.mediaDevices?.getDisplayMedia);

  useEffect(() => {
    void detectCapabilities().then(setCapabilities);
  }, []);

  useEffect(() => {
    const unlock = () => setAudioUnlocked(true);
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  useEffect(() => {
    if (!videoElement) return;
    videoElement.volume = 0.65;
    // Once recording has created an AudioContext graph, the graph's monitor
    // gain owns audition; muting the element would also mute the recording.
    if (videoElement.dataset.audioGraph === "1") return;
    videoElement.muted = !audioUnlocked || audioMuted;
    if (audioUnlocked && !audioMuted) void videoElement.play().catch(() => undefined);
  }, [videoElement, audioUnlocked, audioMuted]);

  useEffect(() => {
    setCameraId(venue.cameras[0].id);
    setViewerState(initialViewerState);
  }, [venue]);

  useEffect(() => {
    if (!videoElement) return;
    const onMetadata = () => {
      const width = videoElement.videoWidth;
      const height = videoElement.videoHeight;
      if (!width || !height) return;
      const aspect = width / height;
      setMediaInfo((current) => ({
        ...current,
        kind: media.kind,
        label: media.label,
        status: "ready",
        width,
        height,
        aspect,
        duration: Number.isFinite(videoElement.duration) ? videoElement.duration : 0,
        error: undefined,
      }));
      if (!customUv.current && !autoFitDone.current) {
        // The only automatic fit happens once, for the first loaded source.
        // After that one global UV map is shared by every screen and venue.
        setUv(coverUv(aspect, screenAspect));
        autoFitDone.current = true;
      }
    };
    const onPlaying = () => {
      setMediaInfo((current) => ({ ...current, status: "ready" }));
    };
    const onError = () => {
      setMediaInfo((current) => ({
        ...current,
        status: "error",
        error: videoElement.error?.message || "Could not decode this media source.",
      }));
    };

    videoElement.addEventListener("loadedmetadata", onMetadata);
    videoElement.addEventListener("resize", onMetadata);
    videoElement.addEventListener("playing", onPlaying);
    videoElement.addEventListener("error", onError);
    return () => {
      videoElement.removeEventListener("loadedmetadata", onMetadata);
      videoElement.removeEventListener("resize", onMetadata);
      videoElement.removeEventListener("playing", onPlaying);
      videoElement.removeEventListener("error", onError);
    };
  }, [videoElement, media.kind, media.label, screenAspect]);

  useEffect(() => {
    const video = videoElement;
    if (!video) return;

    video.pause();
    video.playsInline = true;
    setMediaInfo((current) => ({
      ...current,
      kind: media.kind,
      label: media.label,
      status: "loading",
      error: undefined,
    }));

    if (media.kind === "capture" && media.stream) {
      video.removeAttribute("src");
      video.srcObject = media.stream;
      video.loop = false;
      void video.play().catch(() => undefined);
    } else if (media.src) {
      video.srcObject = null;
      video.src = media.src;
      video.loop = true;
      video.load();
      void video.play().catch(() => undefined);
    }
  }, [videoElement, media]);

  useEffect(
    () => () => {
      streamRef.current?.getTracks().forEach((track) => { track.stop(); });
      streamRef.current = null;
      if (fileUrlRef.current) URL.revokeObjectURL(fileUrlRef.current);
      fileUrlRef.current = null;
    },
    []
  );

  const stopCapture = (returnToBuiltin = false) => {
    const stream = streamRef.current;
    streamRef.current = null;
    stream?.getTracks().forEach((track) => { track.stop(); });
    setCapturing(false);
    if (returnToBuiltin) {
      setBuiltinId(DEFAULT_BUILTIN_MEDIA.id);
      setMedia({ ...defaultMedia });
      setCaptureError("");
    }
  };

  const handleBuiltinChange = (id: string) => {
    const selected = BUILTIN_MEDIA.find((item) => item.id === id);
    if (!selected) return;
    stopCapture();
    // A single global UV map survives source and venue changes.
    setBuiltinId(selected.id);
    setMedia({ kind: "builtin", label: selected.label, src: selected.src });
    setCaptureError("");
  };

  const handleVideoFile = (file?: File) => {
    if (!file) return;
    stopCapture();
    if (fileUrlRef.current) URL.revokeObjectURL(fileUrlRef.current);
    const url = URL.createObjectURL(file);
    fileUrlRef.current = url;
    setMedia({ kind: "file", label: file.name, src: url });
    setCaptureError("");
    setUvOpen(true);
  };

  const handleCaptureScreen = async () => {
    if (!navigator.mediaDevices?.getDisplayMedia) {
      setCaptureError("This browser does not expose display capture.");
      return;
    }

    try {
      stopCapture();
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { frameRate: { ideal: 60, max: 60 } },
        audio: false,
      });
      streamRef.current = stream;
      setCapturing(true);
      setCaptureError("");
      setUvOpen(true);

      const track = stream.getVideoTracks()[0];
      const settings = track.getSettings();
      if (settings.width && settings.height) {
        setMediaInfo((current) => ({
          ...current,
          width: settings.width ?? current.width,
          height: settings.height ?? current.height,
          aspect: settings.width && settings.height ? settings.width / settings.height : current.aspect,
          frameRate: settings.frameRate,
        }));
      }

      track.addEventListener(
        "ended",
        () => {
          if (streamRef.current !== stream) return;
          streamRef.current = null;
          setCapturing(false);
          setMediaInfo((current) => ({
            ...current,
            status: "idle",
            label: "Screen capture ended",
          }));
          setBuiltinId(DEFAULT_BUILTIN_MEDIA.id);
          setMedia({ ...defaultMedia });
        },
        { once: true }
      );

      setMedia({
        kind: "capture",
        label: `Screen · ${track.label || "display capture"}`,
        stream,
      });
    } catch (error) {
      const capture = error as CaptureError;
      if (capture.name !== "NotAllowedError") {
        setCaptureError(capture.message || "Screen capture failed.");
      }
    }
  };

  const handleUvChange = (next: UvQuad) => {
    customUv.current = true;
    autoFitDone.current = true;
    setUv(next);
    try {
      window.localStorage.setItem("sceneforge.globalUv", JSON.stringify(next));
    } catch {
      // Private browsing / storage quota can reject this; the live map still works.
    }
  };

  const handleCue = (cue: Parameters<typeof applyCue>[1]) => {
    setViewerState((current) => applyCue(current, cue));
  };

  return (
    <main className={`app-shell ${focusMode ? "is-focus-mode" : ""}`}>
      <header className="topbar">
        <div>
          <p className="eyebrow">SceneForge / Stage Viewer 0.1</p>
          <h1>{venue.name}</h1>
          <p className="venue-description">
            {venue.description} Geometry is marked {venue.status}; it is not a construction survey.
          </p>
        </div>
        <div className="topbar-actions">
          <CapabilityBadges capabilities={capabilities} />
          <button
            type="button"
            className={`audio-toggle ${audioMuted || !audioUnlocked ? "is-muted" : ""}`}
            aria-pressed={audioMuted}
            aria-label={audioMuted ? "Turn audio on" : "Turn audio off"}
            onClick={() => {
              if (!audioUnlocked) {
                setAudioUnlocked(true);
                setAudioMuted(false);
                return;
              }
              setAudioMuted((current) => !current);
            }}
          >
            <span className="audio-icon" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>{audioMuted || !audioUnlocked ? "AUDIO OFF" : "AUDIO ON"}</span>
          </button>
          <button
            type="button"
            className={`record-toggle ${recording ? "is-recording" : ""}`}
            onClick={recording ? stopRecording : () => void startRecording()}
            disabled={!recorderSupported || recordingStarting || (!videoElement && !recording)}
            title={
              recorderSupported
                ? recording
                  ? "Stop and save the recording"
                  : "Record the 3D canvas and source audio"
                : "MediaRecorder is unavailable"
            }
          >
            <span className="record-dot" aria-hidden="true" />
            <span>
              {recording ? `STOP · ${formatDuration(recordingElapsed)}` : recordingStarting ? "STARTING" : "REC A/V"}
            </span>
          </button>
          {(recordingNotice || recordingError) && (
            <span className={`record-message ${recordingError ? "is-error" : ""}`}>
              {recordingError || recordingNotice}
            </span>
          )}
        </div>
      </header>

      <div className="workspace">
        <ControlPanel
          venues={venues}
          venue={venue}
          cameraPreset={cameraPreset}
          viewerState={viewerState}
          builtinMedia={BUILTIN_MEDIA}
          builtinId={builtinId}
          mediaInfo={mediaInfo}
          capturing={capturing}
          captureSupported={captureSupported}
          captureError={captureError}
          onVenueChange={setVenueId}
          onCameraChange={setCameraId}
          onCue={handleCue}
          onReflectionChange={(reflections) =>
            setViewerState((current) => ({ ...current, reflections }))
          }
          onVideoFile={handleVideoFile}
          onBuiltinChange={handleBuiltinChange}
          onCaptureScreen={() => void handleCaptureScreen()}
          onStopCapture={() => stopCapture(true)}
          onOpenUv={() => setUvOpen(true)}
          onViewCheck={() => setFocusMode(true)}
          onEnterVr={() => void xrStore.enterVR()}
          immersiveVrSupported={Boolean(capabilities?.immersiveVr)}
        />

        <section className="viewport" aria-label="3D venue viewport">
          <StageCanvas
            venue={venue}
            cameraPreset={cameraPreset}
            viewerState={viewerState}
            videoElement={videoElement}
            videoReady={mediaInfo.status === "ready"}
            uv={uv}
          />

          <UvAlignPanel
            open={uvOpen}
            uv={uv}
            onChange={handleUvChange}
            onClose={() => setUvOpen(false)}
            onVideoRef={setVideoElement}
            mediaInfo={mediaInfo}
            screenAspect={screenAspect}
            screenLabel={screenLabel}
            videoMuted={!audioUnlocked || audioMuted}
          />

          <div className="viewport-note">
            <span>Drag to orbit · wheel to dolly</span>
            <span>Three.js · SSR floor · Bloom</span>
          </div>
          {!uvOpen && (
            <button type="button" className="reopen-uv" onClick={() => setUvOpen(true)}>
              Open UV window
            </button>
          )}
        </section>
      </div>

      {focusMode && (
        <button type="button" className="focus-exit" onClick={() => setFocusMode(false)}>
          Exit view check
        </button>
      )}
    </main>
  );
}
