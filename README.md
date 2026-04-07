# My Heart Will Go On — Hand Gesture Music Instrument

> Play the Titanic theme with your bare hands. No keyboard, no controller — just a webcam.

**[View on GitHub](https://github.com/amerob/GestureSynth)**

<img src="assets/demo.png" alt="Gesture Music screenshot">

---

## What It Does

Real-time hand gesture instrument that plays **"My Heart Will Go On" by Celine Dion** (E Major, 56 BPM). Each hand controls a different musical layer:

| Hand | Role | Gesture |
|------|------|---------|
| **Hand 1** | Melody on/off + volume | Raise hand → melody starts · Pinch → volume · Fist → switch synth |
| **Hand 2** | Drum machine | ☝ Index=Kick · ✌ Middle=Snare · 💍 Ring=Hi-Hat · 🤙 Pinky=Clap |

---

## Features

- **Exact melody transcription** — 16-bar verse→chorus loop via `Tone.Part` with bar:beat:sixteenth timestamps
- **3 FM synth presets** — Strings, Grand Piano, Music Box (tuned for Titanic)
- **Sample-accurate scheduling** — audio decoupled from `requestAnimationFrame` via AudioContext clock
- **Gesture smoothing** — exponential moving average (α=0.4) on all 21 landmarks per frame
- **3D waveform visualizer** — custom GLSL neon-glow ribbon mesh reacting to audio
- **16-step drum sequencer** — gentle romantic ballad pattern, gesture-activated
- **Neon cyberpunk game HUD** — score, combo multiplier, energy meter, synth panel
- **Zero install** — runs in the browser, everything loaded from CDN

---

## How to Run

ES modules require an HTTP server (`file://` will not work).

```bash
# Python (recommended)
python -m http.server 8080
# then open http://localhost:8080

# Node.js
npx serve .
```

Or use **VS Code Live Server** — right-click `index.html` → Open with Live Server.

> Chrome or Edge recommended. Allow camera access when prompted.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Hand tracking | MediaPipe Tasks Vision 0.10.14 (GPU delegate) |
| Audio synthesis | Tone.js (FMSynth, Part, Sequence, Reverb, FeedbackDelay) |
| 3D rendering | Three.js 0.161.0 (OrthographicCamera, custom ShaderMaterial) |
| Shaders | Custom GLSL — analytical neon glow without post-processing |
| Fonts | Orbitron + Share Tech Mono (Google Fonts) |
| Language | Vanilla JS (ES Modules), HTML5, CSS3 |

---

## Project Structure

```
musicAppregator/
├── index.html              # Entry point — importmap + full game HUD
├── main.js                 # Bootstrap
├── game.js                 # Core: hand tracking, Three.js scene, gestures
├── MusicManager.js         # Titanic melody (Tone.Part) + FM synth + effects
├── DrumManager.js          # 16-step drum sequencer (Tone.Sequence)
├── WaveformVisualizer.js   # Three.js ribbon mesh + GLSL glow shader
├── ui.js                   # HUD: score, combo, notifications, energy meter
├── styles.css              # Neon cyberpunk game theme
├── explanation.md          # Full technical deep-dive
├── plan.md                 # Project roadmap and feature plan
└── assets/
    ├── kick.wav / snare.wav / hihat.wav / clap.wav
    └── demo.png
```

---

## Music Configuration

| Setting | Value |
|---------|-------|
| Song | My Heart Will Go On — Celine Dion |
| Key | E Major |
| BPM | 56 |
| Structure | Verse (bars 0–3) → Chorus (bars 4–14) → Loop |
| Reverb | 9s decay, 90% wet |
| Drum pattern | Sparse ballad — kick on beats 1 & 3 |

---

## Key Technical Challenges

- **Landmark jitter** → EMA smoothing (α=0.4) on all 21 keypoints per frame
- **CSS crop misalignment** → visible video region computed and used for coordinate remapping
- **JS timing non-determinism** → all audio scheduled against `AudioContext.currentTime`, not rAF
- **Exact melody** → `Tone.Part` with bar:beat:sixteenth timing, not generative patterns

See [explanation.md](explanation.md) for the full technical breakdown.

---

## Author

**Amer** — [github.com/amerob/GestureSynth](https://github.com/amerob/GestureSynth)
