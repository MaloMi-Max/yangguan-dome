import { useEffect, useRef, useState } from "react";

interface UseMediaRecorderOptions {
  videoElement: HTMLVideoElement | null;
  audioMuted: boolean;
  audioUnlocked: boolean;
  filePrefix: string;
}

interface RecordingGraph {
  context: AudioContext;
  source: MediaElementAudioSourceNode;
  monitor: GainNode;
  destination: MediaStreamAudioDestinationNode;
}

interface MimeCandidate {
  mimeType: string;
  extension: string;
}

const MIME_CANDIDATES: MimeCandidate[] = [
  { mimeType: "video/webm;codecs=vp9,opus", extension: "webm" },
  { mimeType: "video/webm;codecs=vp8,opus", extension: "webm" },
  { mimeType: "video/webm", extension: "webm" },
  { mimeType: "video/mp4;codecs=avc1.42E01E,mp4a.40.2", extension: "mp4" },
  { mimeType: "video/mp4", extension: "mp4" },
];

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function chooseMime(): MimeCandidate | null {
  if (typeof MediaRecorder === "undefined") return null;
  return MIME_CANDIDATES.find((candidate) => MediaRecorder.isTypeSupported(candidate.mimeType)) ?? null;
}

export function useMediaRecorder({
  videoElement,
  audioMuted,
  audioUnlocked,
  filePrefix,
}: UseMediaRecorderOptions) {
  const [recording, setRecording] = useState(false);
  const [starting, setStarting] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const timerRef = useRef<number | null>(null);
  const canvasTracksRef = useRef<MediaStreamTrack[]>([]);
  const graphRef = useRef<RecordingGraph | null>(null);
  const mutedRef = useRef(audioMuted);
  const unlockedRef = useRef(audioUnlocked);
  const noticeTimerRef = useRef<number | null>(null);

  const supported = typeof MediaRecorder !== "undefined" && typeof HTMLCanvasElement !== "undefined";

  useEffect(() => {
    mutedRef.current = audioMuted;
    unlockedRef.current = audioUnlocked;
    const graph = graphRef.current;
    if (graph) {
      graph.monitor.gain.setTargetAtTime(
        audioMuted || !audioUnlocked ? 0 : 0.65,
        graph.context.currentTime,
        0.015
      );
    }
  }, [audioMuted, audioUnlocked]);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
      if (noticeTimerRef.current !== null) window.clearTimeout(noticeTimerRef.current);
      recorderRef.current?.stop();
      canvasTracksRef.current.forEach((track) => { track.stop(); });
      graphRef.current?.context.close().catch(() => undefined);
      graphRef.current = null;
    };
  }, []);

  function flashNotice(message: string) {
    setNotice(message);
    if (noticeTimerRef.current !== null) window.clearTimeout(noticeTimerRef.current);
    noticeTimerRef.current = window.setTimeout(() => setNotice(""), 4500);
  }

  async function ensureAudioGraph(video: HTMLVideoElement): Promise<MediaStreamAudioDestinationNode | null> {
    if (!graphRef.current) {
      const AudioContextClass =
        window.AudioContext ||
        (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return null;

      const context = new AudioContextClass();
      const source = context.createMediaElementSource(video);
      const monitor = context.createGain();
      const destination = context.createMediaStreamDestination();
      monitor.gain.value = mutedRef.current || !unlockedRef.current ? 0 : 0.65;
      source.connect(destination);
      source.connect(monitor);
      monitor.connect(context.destination);

      // From this point on, monitoring is handled by the graph gain, not video.muted.
      video.muted = false;
      video.dataset.audioGraph = "1";
      graphRef.current = { context, source, monitor, destination };
    }

    const graph = graphRef.current;
    await graph.context.resume();
    graph.monitor.gain.setTargetAtTime(
      mutedRef.current || !unlockedRef.current ? 0 : 0.65,
      graph.context.currentTime,
      0.015
    );
    return graph.destination;
  }

  async function startRecording() {
    if (recording || starting) return;
    if (!supported) {
      setError("MediaRecorder is not supported in this browser.");
      return;
    }
    if (!videoElement) {
      setError("No video source is attached yet.");
      return;
    }
    const canvas = document.querySelector<HTMLCanvasElement>(".viewport canvas");
    if (!canvas) {
      setError("Could not find the 3D canvas.");
      return;
    }

    const mime = chooseMime();
    if (!mime) {
      setError("This browser has no supported recording codec.");
      return;
    }

    setStarting(true);
    setError("");

    try {
      const canvasStream = canvas.captureStream(60);
      const tracks = canvasStream.getVideoTracks();
      canvasTracksRef.current = tracks;
      const combined = new MediaStream(tracks);

      try {
        const audioDestination = await ensureAudioGraph(videoElement);
        audioDestination?.stream.getAudioTracks().forEach((track) => { combined.addTrack(track); });
      } catch (audioError) {
        console.warn("[SceneForge] Audio graph unavailable; recording video only.", audioError);
      }

      const recorder = new MediaRecorder(combined, {
        mimeType: mime.mimeType,
        videoBitsPerSecond: 9_000_000,
        audioBitsPerSecond: 160_000,
      });
      chunksRef.current = [];
      recorderRef.current = recorder;

      recorder.addEventListener("dataavailable", (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      });
      recorder.addEventListener("stop", () => {
        const blob = new Blob(chunksRef.current, { type: mime.mimeType });
        chunksRef.current = [];
        const url = URL.createObjectURL(blob);
        const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = `${filePrefix}-${stamp}.${mime.extension}`;
        anchor.click();
        window.setTimeout(() => URL.revokeObjectURL(url), 8000);
        if (timerRef.current !== null) {
          window.clearInterval(timerRef.current);
          timerRef.current = null;
        }
        canvasTracksRef.current.forEach((track) => { track.stop(); });
        canvasTracksRef.current = [];
        recorderRef.current = null;
        setRecording(false);
        setStarting(false);
        setElapsed(0);
        flashNotice(`Saved ${blob.size > 0 ? `${Math.round(blob.size / 1024 / 1024)} MB` : "recording"}`);
      });
      recorder.addEventListener("error", () => {
        setError("Recording failed.");
        setRecording(false);
        setStarting(false);
      });

      recorder.start(250);
      setRecording(true);
      setStarting(false);
      setElapsed(0);
      const startedAt = performance.now();
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
      timerRef.current = window.setInterval(() => {
        setElapsed((performance.now() - startedAt) / 1000);
      }, 250);
      flashNotice("Recording started · canvas + audio");
    } catch (recordingError) {
      setStarting(false);
      setRecording(false);
      setError(recordingError instanceof Error ? recordingError.message : "Recording failed.");
    }
  }

  function stopRecording() {
    if (!recorderRef.current) return;
    if (recorderRef.current.state !== "inactive") recorderRef.current.stop();
  }

  return {
    supported,
    recording,
    starting,
    elapsed,
    error,
    notice,
    startRecording,
    stopRecording,
    formatDuration,
  };
}
