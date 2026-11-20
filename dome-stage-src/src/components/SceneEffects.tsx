import { useEffect, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { SSRPass } from "three/examples/jsm/postprocessing/SSRPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { Vector2 } from "three";

interface SceneEffectsProps {
  reflections: boolean;
}

/**
 * SceneForge post stack:
 * Render -> screen-space reflections -> bloom -> display transform.
 * Three.js addons only; no extra post-processing dependency.
 */
export function SceneEffects({ reflections }: SceneEffectsProps) {
  const gl = useThree((state) => state.gl);
  const scene = useThree((state) => state.scene);
  const camera = useThree((state) => state.camera);
  const size = useThree((state) => state.size);

  const { composer, ssrPass } = useMemo(() => {
    const effectComposer = new EffectComposer(gl);
    const renderPass = new RenderPass(scene, camera);
    effectComposer.addPass(renderPass);

    const ssr = new SSRPass({
      renderer: gl,
      scene,
      camera,
      width: Math.max(1, Math.round(size.width * 0.72)),
      height: Math.max(1, Math.round(size.height * 0.72)),
      selects: null,
      groundReflector: null,
    });
    ssr.resolutionScale = 0.72;
    ssr.opacity = 0.42;
    ssr.maxDistance = 48;
    ssr.thickness = 0.018;
    ssr.blur = true;
    ssr.enabled = reflections;
    effectComposer.addPass(ssr);

    const bloom = new UnrealBloomPass(
      new Vector2(size.width, size.height),
      0.68,
      0.54,
      0.7
    );
    effectComposer.addPass(bloom);
    effectComposer.addPass(new OutputPass());

    return { composer: effectComposer, ssrPass: ssr };
  }, [gl, scene, camera, size.width, size.height]);

  useEffect(() => {
    composer.setPixelRatio(gl.getPixelRatio());
    composer.setSize(size.width, size.height);
  }, [composer, gl, size.width, size.height]);

  useEffect(() => {
    ssrPass.enabled = reflections;
  }, [ssrPass, reflections]);

  useFrame((_, delta) => {
    if (!gl.xr.isPresenting) composer.render(delta);
  }, 1);

  useEffect(
    () => () => {
      composer.dispose();
    },
    [composer]
  );

  return null;
}
