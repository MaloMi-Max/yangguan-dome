import { useEffect, useMemo } from "react";
import {
  DoubleSide,
  FrontSide,
  LinearFilter,
  ShaderMaterial,
  SRGBColorSpace,
  type Side,
  Vector2,
  VideoTexture,
} from "three";
import type { UvQuad } from "../domain/mapping";

interface ScreenSurfaceProps {
  color: string;
  emissiveIntensity: number;
  videoElement?: HTMLVideoElement | null;
  videoReady?: boolean;
  uv: UvQuad;
  side?: Side;
}

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform sampler2D uMap;
  uniform float uHasMap;
  uniform float uBrightness;
  uniform vec2 uTl;
  uniform vec2 uTr;
  uniform vec2 uBr;
  uniform vec2 uBl;

  varying vec2 vUv;

  void main() {
    vec2 topEdge = mix(uTl, uTr, clamp(vUv.x, 0.0, 1.0));
    vec2 bottomEdge = mix(uBl, uBr, clamp(vUv.x, 0.0, 1.0));
    vec2 sourceUv = mix(topEdge, bottomEdge, clamp(vUv.y, 0.0, 1.0));

    vec3 sampled = texture2D(uMap, sourceUv).rgb;
    if (any(lessThan(sourceUv, vec2(0.0))) || any(greaterThan(sourceUv, vec2(1.0)))) {
      sampled = vec3(0.0);
    }

    sampled *= uBrightness;
    gl_FragColor = vec4(sampled, 1.0);
    if (uHasMap < 0.5) {
      gl_FragColor = vec4(0.02, 0.024, 0.032, 1.0);
    }
  }
`;

export function ScreenSurface({
  color,
  emissiveIntensity,
  videoElement,
  videoReady = false,
  uv,
  side,
}: ScreenSurfaceProps) {
  const materialSide = side ?? FrontSide;

  const texture = useMemo(() => {
    if (!videoElement) return null;
    const nextTexture = new VideoTexture(videoElement);
    nextTexture.colorSpace = SRGBColorSpace;
    nextTexture.minFilter = LinearFilter;
    nextTexture.magFilter = LinearFilter;
    nextTexture.generateMipmaps = false;
    return nextTexture;
  }, [videoElement]);

  const uniforms = useMemo(
    () => ({
      uMap: { value: texture },
      uHasMap: { value: texture ? 1 : 0 },
      uBrightness: { value: Math.min(1.32, Math.max(0.05, emissiveIntensity * 0.45 + 0.02)) },
      uTl: { value: new Vector2(uv.tl[0], uv.tl[1]) },
      uTr: { value: new Vector2(uv.tr[0], uv.tr[1]) },
      uBr: { value: new Vector2(uv.br[0], uv.br[1]) },
      uBl: { value: new Vector2(uv.bl[0], uv.bl[1]) },
    }),
    // The initial texture is managed by the effects below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const shaderMaterial = useMemo(
    () =>
      new ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        side: materialSide,
        toneMapped: false,
      }),
    [uniforms, materialSide]
  );

  useEffect(() => {
    uniforms.uMap.value = texture;
    uniforms.uHasMap.value = texture && videoReady ? 1 : 0;
  }, [uniforms, texture, videoReady]);

  useEffect(() => {
    uniforms.uBrightness.value = Math.min(1.32, Math.max(0.05, emissiveIntensity * 0.45 + 0.02));
  }, [uniforms, emissiveIntensity]);

  useEffect(() => {
    uniforms.uTl.value.set(uv.tl[0], uv.tl[1]);
    uniforms.uTr.value.set(uv.tr[0], uv.tr[1]);
    uniforms.uBr.value.set(uv.br[0], uv.br[1]);
    uniforms.uBl.value.set(uv.bl[0], uv.bl[1]);
  }, [uniforms, uv]);

  useEffect(
    () => () => {
      shaderMaterial.dispose();
    },
    [shaderMaterial]
  );

  useEffect(
    () => () => {
      texture?.dispose();
    },
    [texture]
  );

  if (!videoReady || !texture) {
    return (
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={emissiveIntensity}
        roughness={0.34}
        side={materialSide === DoubleSide ? DoubleSide : side}
      />
    );
  }

  return <primitive object={shaderMaterial} attach="material" />;
}
