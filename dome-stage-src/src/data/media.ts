export interface BuiltinMedia {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  src: string;
}

const base = import.meta.env.BASE_URL;

export const BUILTIN_MEDIA: BuiltinMedia[] = [
  {
    id: "phase07-shot-0",
    label: "PHASE/07 · Shot 01",
    shortLabel: "01 / TREE",
    description: "Pale canopy, red terrain, emissive particle rain.",
    src: `${base}media/phase07-shot-0.mp4`,
  },
  {
    id: "phase07-shot-1",
    label: "PHASE/07 · Shot 02",
    shortLabel: "02 / EYE",
    description: "Iridescent vortex over an orange landscape.",
    src: `${base}media/phase07-shot-1.mp4`,
  },
  {
    id: "phase07-shot-2",
    label: "PHASE/07 · Shot 03",
    shortLabel: "03 / SILK",
    description: "White silk folds over a red-orange glow field.",
    src: `${base}media/phase07-shot-2.mp4`,
  },
  {
    id: "phase07-shot-3",
    label: "PHASE/07 · Shot 04",
    shortLabel: "04 / BLOOM",
    description: "Liquid white-red bloom with soft particle bloom.",
    src: `${base}media/phase07-shot-3.mp4`,
  },
];

export const DEFAULT_BUILTIN_MEDIA = BUILTIN_MEDIA[0];

export type MediaKind = "builtin" | "file" | "capture";
export type MediaStatus = "idle" | "loading" | "ready" | "error";

export interface MediaInfo {
  kind: MediaKind;
  label: string;
  status: MediaStatus;
  width: number;
  height: number;
  duration: number;
  aspect: number;
  frameRate?: number;
  error?: string;
}

export const EMPTY_MEDIA_INFO: MediaInfo = {
  kind: "builtin",
  label: DEFAULT_BUILTIN_MEDIA.label,
  status: "loading",
  width: 0,
  height: 0,
  duration: 0,
  aspect: 16 / 9,
};
