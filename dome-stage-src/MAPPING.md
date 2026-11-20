# SceneForge Mapping / UV quick guide

## What this is

Local Stage Viewer build with:

- Three.js / React Three Fiber stage rendering.
- Three venue geometries: BO Live House, UFO Terminal, and the new **CAVE Sphere** domed room with a central orb stage.
- One **global UV map** shared by every screen surface and all three venues.
- Local video, four built-in PHASE/07 clips, and browser screen/window capture.
- Graphical four-corner UV alignment window with keyboard nudging.
- Screen-space reflections, a polished reflective floor, and Unreal bloom via Three.js addons.
- Synchronized canvas video + source audio recording, saved locally as WebM.
- Ratio / crop / viewing-position readouts and presets.

## Run

Production build (already generated in `dist/`):

```bash
cd SceneForge
python3 -m http.server 5175 --directory dist
# open http://127.0.0.1:5175/
```

Development:

```bash
cd SceneForge
pnpm install
pnpm dev
# open http://127.0.0.1:5174/
```

## UV mapping

1. The **Screen calibration** window is open by default. Thumbnail corner handles are TL/TR/BR/BL.
2. Drag a handle on the source image. The 3D screen updates immediately.
3. Use arrow keys on a focused handle for fine adjustment; hold Shift for larger steps.
4. **Full source** = entire frame; **Crop to screen** = centered cover crop for the current surface aspect.
5. One edit is stored in `localStorage` and applied to every screen/venue. Changing venue keeps the same map.
6. **Guides** show thirds and a 5% safe border.

## Record A/V

1. Click **REC A/V** in the top-right corner.
2. The 3D canvas and the current source audio are recorded together.
3. Click **STOP**; the file downloads automatically as `sceneforge-<venue>-<timestamp>.webm`.
4. Audio monitoring does not affect the recorded track; muting the room still records source audio.
5. Screen capture sources are video-only unless the browser capture includes audio.

## Capture source

1. Click **Capture screen / window**.
2. Pick a screen, window, or browser tab in the native picker.
3. The source line identifies the captured resolution and aspect.
4. Stop it with **Stop**; choosing a local file or built-in clip also ends capture.

Screen capture requires a localhost or HTTPS page, browser permission, and a real display server. It cannot capture in headless browser test environments.

## Checks

- **Aspect**: the UV window shows source resolution/aspect and surface aspect (`14 × 7 m = 2:1` for BO, `13.8 × 4.9 m = 2.82:1` for UFO).
- **Crop**: `UV CROP` shows the actual crop width/height and effective pixel dimensions.
- **Viewing position**: choose **Audience eye / FOH** or **Audience eye / center** in the Camera menu, then **View check / hide UI** for a clean viewport. Use the browser's fullscreen command if needed.
- **Reflections / bloom**: toggle **Floor reflection + SSR**. Bloom is always active in the post stack.

## Notes

- The repository's main branch only contains docs and audio scripts. This local copy uses the `feat/stage-viewer-foundation` stage-viewer branch, installed with its existing dependencies.
- No mapping, post-processing, or capture package was added; the implementation only uses the existing React / Three.js / R3F dependency set.
- The referenced image was not present in the workspace, so no image-relation analysis was applied to the screen layout. The global UV window is provided for manual rough alignment once the image/reference is available.
