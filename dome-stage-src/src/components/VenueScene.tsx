import { MeshReflectorMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BackSide, DoubleSide, type Group } from "three";
import type { UvQuad } from "../domain/mapping";
import type { VenueManifest, ViewerState } from "../domain/scene";
import { ScreenSurface } from "./ScreenSurface";

interface VenueSceneProps {
  venue: VenueManifest;
  viewerState: ViewerState;
  videoElement?: HTMLVideoElement | null;
  videoReady?: boolean;
  uv: UvQuad;
}

function Floor({ venue, enabled }: { venue: VenueManifest; enabled: boolean }) {
  const { width, depth } = venue.dimensions;

  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[width, depth]} />
      {enabled ? (
        <MeshReflectorMaterial
          blur={[240, 70]}
          resolution={768}
          mixBlur={0.75}
          mixStrength={2.2}
          roughness={0.32}
          depthScale={0.35}
          minDepthThreshold={0.25}
          maxDepthThreshold={1.6}
          color="#0d1118"
          metalness={0.72}
          mirror={0.36}
        />
      ) : (
        <meshStandardMaterial color="#111318" roughness={0.88} metalness={0.08} />
      )}
    </mesh>
  );
}

function BoxShell({ venue }: { venue: VenueManifest }) {
  const { width, depth, height } = venue.dimensions;
  return (
    <group>
      <mesh position={[0, height / 2, -depth / 2]} receiveShadow>
        <boxGeometry args={[width, height, 0.3]} />
        <meshStandardMaterial color="#15171b" roughness={0.94} />
      </mesh>
      <mesh position={[-width / 2, height / 2, 0]} receiveShadow>
        <boxGeometry args={[0.3, height, depth]} />
        <meshStandardMaterial color="#111319" roughness={0.94} />
      </mesh>
      <mesh position={[width / 2, height / 2, 0]} receiveShadow>
        <boxGeometry args={[0.3, height, depth]} />
        <meshStandardMaterial color="#111319" roughness={0.94} />
      </mesh>
    </group>
  );
}

function ArenaShell({ venue }: { venue: VenueManifest }) {
  const radius = venue.dimensions.width / 2;
  return (
    <mesh position={[0, venue.dimensions.height / 2, 0]} receiveShadow>
      <cylinderGeometry args={[radius, radius, venue.dimensions.height, 96, 1, true]} />
      <meshStandardMaterial color="#17181b" roughness={0.96} side={DoubleSide} />
    </mesh>
  );
}

function Stage({ venue }: { venue: VenueManifest }) {
  const stage = venue.stage;
  return (
    <mesh position={stage.position} castShadow receiveShadow>
      <boxGeometry args={[stage.width, stage.height, stage.depth]} />
      <meshStandardMaterial color="#24272d" roughness={0.72} metalness={0.18} />
    </mesh>
  );
}

function CaveStage() {
  const orb = useRef<Group>(null);
  const halo = useRef<Group>(null);

  useFrame((_, delta) => {
    if (orb.current) orb.current.rotation.y += delta * 0.1;
    if (halo.current) halo.current.rotation.z += delta * 0.045;
  });

  return (
    <group>
      <mesh position={[0, 0.35, 0]} receiveShadow>
        <cylinderGeometry args={[5.2, 5.7, 0.7, 96]} />
        <meshStandardMaterial color="#0c1017" metalness={0.82} roughness={0.2} />
      </mesh>

      <mesh position={[0, 0.72, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.9, 3.95, 128]} />
        <meshBasicMaterial color="#83a8ff" toneMapped={false} side={DoubleSide} />
      </mesh>
      <mesh position={[0, 0.735, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[4.75, 4.78, 128]} />
        <meshBasicMaterial color="#5c7dbd" transparent opacity={0.55} toneMapped={false} side={DoubleSide} />
      </mesh>

      <group ref={orb} position={[0, 2.45, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[1.05, 64, 48]} />
          <meshPhysicalMaterial
            color="#0a0f18"
            metalness={0.92}
            roughness={0.09}
            clearcoat={1}
            clearcoatRoughness={0.06}
          />
        </mesh>
        <mesh position={[0, 0, 0]} scale={1.32}>
          <icosahedronGeometry args={[1.05, 3]} />
          <meshBasicMaterial color="#9ebcff" wireframe transparent opacity={0.22} toneMapped={false} />
        </mesh>
        <mesh rotation={[Math.PI / 2.3, 0.2, 0]}>
          <torusGeometry args={[1.9, 0.012, 12, 160]} />
          <meshBasicMaterial color="#b9d4ff" toneMapped={false} />
        </mesh>
        <mesh rotation={[Math.PI / 1.8, -0.65, 0.4]}>
          <torusGeometry args={[2.45, 0.008, 12, 160]} />
          <meshBasicMaterial color="#6c8bd6" transparent opacity={0.65} toneMapped={false} />
        </mesh>
      </group>

      <group ref={halo} position={[0, 2.45, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh>
          <torusGeometry args={[3.5, 0.01, 8, 180]} />
          <meshBasicMaterial color="#627fbf" transparent opacity={0.5} toneMapped={false} />
        </mesh>
      </group>

      <pointLight position={[0, 2.45, 0]} color="#9db8ff" intensity={8} distance={13} decay={2} />
      <pointLight position={[0, 0.75, 3]} color="#ff8765" intensity={2.6} distance={9} decay={2} />
    </group>
  );
}

function Screen({ venue, viewerState, videoElement, videoReady, uv }: VenueSceneProps) {
  const screen = venue.screen;
  const radius = Math.max(screen.width / 2.2, 3);
  const arc = Math.PI * Math.max(screen.curvature, 0.08);

  if (screen.shape === "dome") {
    return (
      <mesh position={screen.position}>
        <sphereGeometry args={[screen.width / 2, 128, 64]} />
        <ScreenSurface
          color={viewerState.screenColor}
          emissiveIntensity={viewerState.screenIntensity}
          videoElement={videoElement}
          videoReady={videoReady}
          uv={uv}
          side={BackSide}
        />
      </mesh>
    );
  }

  if (venue.layout === "arena" && screen.curvature > 0.1) {
    return (
      <mesh position={screen.position} rotation={[0, Math.PI, 0]} castShadow>
        <cylinderGeometry args={[radius, radius, screen.height, 96, 1, true, -arc / 2, arc]} />
        <ScreenSurface
          color={viewerState.screenColor}
          emissiveIntensity={viewerState.screenIntensity}
          videoElement={videoElement}
          videoReady={videoReady}
          uv={uv}
          side={BackSide}
        />
      </mesh>
    );
  }

  return (
    <mesh position={screen.position} castShadow>
      <planeGeometry args={[screen.width, screen.height]} />
      <ScreenSurface
        color={viewerState.screenColor}
        emissiveIntensity={viewerState.screenIntensity}
        videoElement={videoElement}
        videoReady={videoReady}
        uv={uv}
      />
    </mesh>
  );
}

export function VenueScene({ venue, viewerState, videoElement, videoReady, uv }: VenueSceneProps) {
  return (
    <group>
      <color attach="background" args={["#07080a"]} />
      <fog attach="fog" args={["#07080a", 24, 70]} />

      <ambientLight intensity={0.15 + viewerState.houseLightIntensity * 0.14} />
      <directionalLight
        position={[7, 13, 10]}
        intensity={viewerState.houseLightIntensity}
        color="#dbe4ff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <spotLight
        position={[-8, 10, 5]}
        angle={0.6}
        penumbra={0.72}
        intensity={viewerState.houseLightIntensity * 1.4}
        color="#ffb47d"
        castShadow
      />

      {venue.layout === "box" ? (
        <BoxShell venue={venue} />
      ) : venue.layout === "arena" ? (
        <ArenaShell venue={venue} />
      ) : null}
      <Floor venue={venue} enabled={viewerState.reflections} />
      {venue.layout === "cave" ? <CaveStage /> : <Stage venue={venue} />}
      <Screen
        venue={venue}
        viewerState={viewerState}
        videoElement={videoElement}
        videoReady={videoReady}
        uv={uv}
      />
    </group>
  );
}
