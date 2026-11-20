import { type VenueManifest, venueManifestSchema } from "../domain/scene";

const manifests = [
  {
    schemaVersion: 1,
    id: "bo-live-house",
    name: "BO Live House",
    city: "Shenzhen",
    status: "illustrative",
    description: "A rectangular live-house study scene for screen, camera and cue validation.",
    layout: "box",
    dimensions: { width: 24, depth: 34, height: 12 },
    stage: { width: 16, depth: 8, height: 1.2, position: [0, 0.6, -10] },
    screen: { width: 14, height: 7, position: [0, 6.2, -13.7], curvature: 0 },
    cameras: [
      { id: "front", name: "Front of house", position: [0, 7, 18], target: [0, 4, -10] },
      { id: "stage-left", name: "Stage left", position: [-10, 5, -2], target: [0, 4, -10] },
      { id: "wide", name: "Wide overview", position: [10, 10, 12], target: [0, 3, -5] },
      { id: "audience-eye", name: "Audience eye / FOH", position: [0, 1.65, 15], target: [0, 4.6, -13.7] },
    ],
    cues: [
      {
        id: "work-light",
        name: "Work light",
        actions: [
          { type: "set-screen", color: "#d8e1ff", emissiveIntensity: 0.8 },
          { type: "set-house-lights", intensity: 3.2 },
          { type: "set-reflection", enabled: false },
        ],
      },
      {
        id: "show",
        name: "Show",
        actions: [
          { type: "set-screen", color: "#5f78ff", emissiveIntensity: 3.2 },
          { type: "set-house-lights", intensity: 0.35 },
          { type: "set-reflection", enabled: true },
        ],
      },
      {
        id: "blackout",
        name: "Blackout",
        actions: [
          { type: "set-screen", color: "#050505", emissiveIntensity: 0 },
          { type: "set-house-lights", intensity: 0.04 },
          { type: "set-reflection", enabled: false },
        ],
      },
    ],
  },
  {
    schemaVersion: 1,
    id: "ufo-terminal",
    name: "UFO Terminal",
    city: "Shanghai",
    status: "illustrative",
    description: "A cylindrical venue study based on the UFO Terminal tank proportions.",
    layout: "arena",
    dimensions: { width: 15.6, depth: 15.6, height: 6.5 },
    stage: { width: 8.5, depth: 4.2, height: 0.7, position: [0, 0.35, -3.2] },
    screen: { width: 13.8, height: 4.9, position: [0, 3.5, 0], curvature: 0.72 },
    cameras: [
      { id: "center", name: "Center", position: [0, 3.8, 5.8], target: [0, 2.8, -3] },
      { id: "orbit", name: "Tank orbit", position: [6.2, 5.2, 3.5], target: [0, 2.5, -2] },
      { id: "stage", name: "On stage", position: [-3.5, 2.3, -1.4], target: [3, 2.8, -4] },
      { id: "audience-eye", name: "Audience eye / center", position: [0, 1.65, 4.8], target: [0, 3.2, 0] },
    ],
    cues: [
      {
        id: "installation",
        name: "Installation",
        actions: [
          { type: "set-screen", color: "#e7e1cf", emissiveIntensity: 1.2 },
          { type: "set-house-lights", intensity: 2.2 },
          { type: "set-reflection", enabled: true },
        ],
      },
      {
        id: "live",
        name: "Live",
        actions: [
          { type: "set-screen", color: "#ff315a", emissiveIntensity: 4.4 },
          { type: "set-house-lights", intensity: 0.18 },
          { type: "set-reflection", enabled: true },
        ],
      },
      {
        id: "blackout",
        name: "Blackout",
        actions: [
          { type: "set-screen", color: "#030303", emissiveIntensity: 0 },
          { type: "set-house-lights", intensity: 0.02 },
          { type: "set-reflection", enabled: false },
        ],
      },
    ],
  },
  {
    schemaVersion: 1,
    id: "cave-sphere",
    name: "CAVE Sphere",
    city: "Immersive Lab",
    status: "illustrative",
    description:
      "A spherical CAVE study: one continuous projection envelope around a central orb stage, with the same global UV map as every other room.",
    layout: "cave",
    dimensions: { width: 28, depth: 28, height: 14 },
    stage: { width: 9.6, depth: 9.6, height: 0.7, position: [0, 0.35, 0] },
    screen: {
      shape: "dome",
      width: 28,
      height: 14,
      position: [0, 7, 0],
      curvature: 1,
    },
    cameras: [
      { id: "inside", name: "Inside / center", position: [0, 2.35, 7.2], target: [0, 2.9, 0] },
      { id: "inside-low", name: "Inside / low", position: [0, 1.55, 4.8], target: [0, 2.4, -2] },
      { id: "orbit", name: "Inside / orbit", position: [7.4, 3.4, 5.2], target: [0, 2.7, 0] },
      { id: "audience-eye", name: "Audience eye", position: [0, 1.65, 8.4], target: [0, 3.1, 0] },
    ],
    cues: [
      {
        id: "calm",
        name: "Calm",
        actions: [
          { type: "set-screen", color: "#cfe0ff", emissiveIntensity: 1.7 },
          { type: "set-house-lights", intensity: 1.6 },
          { type: "set-reflection", enabled: true },
        ],
      },
      {
        id: "cave",
        name: "Cave live",
        actions: [
          { type: "set-screen", color: "#89a7ff", emissiveIntensity: 3.4 },
          { type: "set-house-lights", intensity: 0.22 },
          { type: "set-reflection", enabled: true },
        ],
      },
      {
        id: "blackout",
        name: "Blackout",
        actions: [
          { type: "set-screen", color: "#020203", emissiveIntensity: 0 },
          { type: "set-house-lights", intensity: 0.02 },
          { type: "set-reflection", enabled: false },
        ],
      },
    ],
  },
] satisfies unknown[];

export const venues: VenueManifest[] = manifests.map((manifest) =>
  venueManifestSchema.parse(manifest),
);
