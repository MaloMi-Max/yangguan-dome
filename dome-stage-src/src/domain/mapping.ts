export type Vec2 = [number, number];
export type UvCorner = "tl" | "tr" | "br" | "bl";

export interface UvQuad {
  tl: Vec2;
  tr: Vec2;
  br: Vec2;
  bl: Vec2;
}

export const FULL_UV: UvQuad = {
  tl: [0, 1],
  tr: [1, 1],
  br: [1, 0],
  bl: [0, 0],
};

export function cloneUv(uv: UvQuad): UvQuad {
  return {
    tl: [...uv.tl],
    tr: [...uv.tr],
    br: [...uv.br],
    bl: [...uv.bl],
  };
}

/**
 * Keep the source intact while cropping away the minimum area needed for the
 * destination surface aspect. This is the mapping equivalent of CSS `cover`.
 */
export function coverUv(sourceAspect: number, destinationAspect: number): UvQuad {
  if (!Number.isFinite(sourceAspect) || sourceAspect <= 0) return cloneUv(FULL_UV);
  if (!Number.isFinite(destinationAspect) || destinationAspect <= 0) return cloneUv(FULL_UV);

  let u0 = 0;
  let u1 = 1;
  let v0 = 0;
  let v1 = 1;

  if (sourceAspect > destinationAspect) {
    const visible = destinationAspect / sourceAspect;
    u0 = (1 - visible) / 2;
    u1 = 1 - u0;
  } else if (sourceAspect < destinationAspect) {
    const visible = sourceAspect / destinationAspect;
    v0 = (1 - visible) / 2;
    v1 = 1 - v0;
  }

  return {
    tl: [u0, v1],
    tr: [u1, v1],
    br: [u1, v0],
    bl: [u0, v0],
  };
}

export function mirrorUvH(uv: UvQuad): UvQuad {
  return {
    tl: [uv.tr[0], uv.tr[1]],
    tr: [uv.tl[0], uv.tl[1]],
    br: [uv.bl[0], uv.bl[1]],
    bl: [uv.br[0], uv.br[1]],
  };
}

export function mirrorUvV(uv: UvQuad): UvQuad {
  return {
    tl: [uv.bl[0], uv.bl[1]],
    tr: [uv.br[0], uv.br[1]],
    br: [uv.tr[0], uv.tr[1]],
    bl: [uv.tl[0], uv.tl[1]],
  };
}

export interface UvMetrics {
  cropWidth: number;
  cropHeight: number;
  cropPixelsX: number;
  cropPixelsY: number;
  effectiveAspect: number;
}

export function measureUv(uv: UvQuad, sourceWidth: number, sourceHeight: number): UvMetrics {
  const topWidth = Math.hypot(uv.tr[0] - uv.tl[0], uv.tr[1] - uv.tl[1]);
  const bottomWidth = Math.hypot(uv.br[0] - uv.bl[0], uv.br[1] - uv.bl[1]);
  const leftHeight = Math.hypot(uv.bl[0] - uv.tl[0], uv.bl[1] - uv.tl[1]);
  const rightHeight = Math.hypot(uv.br[0] - uv.tr[0], uv.br[1] - uv.tr[1]);
  const cropWidth = (topWidth + bottomWidth) / 2;
  const cropHeight = (leftHeight + rightHeight) / 2;
  const cropPixelsX = Math.round(sourceWidth * cropWidth);
  const cropPixelsY = Math.round(sourceHeight * cropHeight);

  return {
    cropWidth,
    cropHeight,
    cropPixelsX,
    cropPixelsY,
    effectiveAspect: cropHeight > 0 ? (sourceWidth * cropWidth) / (sourceHeight * cropHeight) : 0,
  };
}

export function formatAspect(aspect: number): string {
  if (!Number.isFinite(aspect) || aspect <= 0) return "—";
  const common: Array<[number, string]> = [
    [16 / 9, "16:9"],
    [4 / 3, "4:3"],
    [3 / 2, "3:2"],
    [1, "1:1"],
    [21 / 9, "21:9"],
    [2.39, "2.39:1"],
  ];
  for (const [value, label] of common) {
    if (Math.abs(aspect - value) < 0.025) return label;
  }
  return `${aspect.toFixed(2)}:1`;
}

export function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`;
}
