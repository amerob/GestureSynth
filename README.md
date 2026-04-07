<div align="center">

# 🎵 My Heart Will Go On — Hand Gesture Music Instrument

### Play the Titanic theme with your bare hands. No keyboard, no controller — just a webcam.

[![JavaScript](https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![MediaPipe](https://img.shields.io/badge/MediaPipe-Hand_Tracking-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br>

<!-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ -->
<!-- REPLACE THE PLACEHOLDER BELOW WITH AN ACTUAL PROJECT SCREENSHOT -->
<!-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ -->

<img src="assets/demo.png" alt="GestureSynth — Hand Gesture Music Instrument Demo" width="720">

<br>

[**View on GitHub →**](https://github.com/amerob/GestureSynth)

</div>

---

## 🎯 Overview

A real-time, browser-based hand gesture instrument that plays **"My Heart Will Go On" by Celine Dion** (E Major, 56 BPM). Each hand controls a different musical layer — one drives the melody and synth switching, the other triggers a drum machine — all powered by computer vision running entirely in the browser.

---

## ✋ Gesture Controls

| Hand | Role | Gesture |
|:----:|:----:|---------|
| **Hand 1** | Melody on/off + volume | Raise hand → melody starts · Pinch → volume · Fist → switch synth |
| **Hand 2** | Drum machine | ☝️ Index = Kick · ✌️ Middle = Snare · 💍 Ring = Hi-Hat · 🤙 Pinky = Clap |

---

## ✨ Features

- **Exact melody transcription** — 16-bar verse → chorus loop via `Tone.Part` with `bar:beat:sixteenth` timestamps
- **3 FM synth presets** — Strings, Grand Piano, Music Box (tuned for Titanic)
- **Sample-accurate scheduling** — audio decoupled from `requestAnimationFrame` via `AudioContext` clock
- **Gesture smoothing** — exponential moving average (α = 0.4) on all 21 landmarks per frame
- **3D waveform visualizer** — custom GLSL neon-glow ribbon mesh reacting to audio
- **16-step drum sequencer** — gentle romantic ballad pattern, gesture-activated
- **Neon cyberpunk game HUD** — score, combo multiplier, energy meter, synth panel
- **Zero install** — runs in the browser, everything loaded from CDN

---

## 🚀 Getting Started

ES modules require an HTTP server (`file://` will not work).

```bash
# Option 1 — Python (recommended)
python -m http.server 8080
# then open http://localhost:8080

# Option 2 — Node.js
npx serve .
```

Or use **VS Code Live Server** — right-click `index.html` → *Open with Live Server*.

> **Note:** Chrome or Edge recommended. Allow camera access when prompted.

---

## 🛠️ Tech Stack

| Layer | Technology | |
|:------|:-----------|:-:|
| Hand tracking | MediaPipe Tasks Vision 0.10.14 (GPU delegate) | ![MediaPipe](https://img.shields.io/badge/-MediaPipe-4285F4?style=flat-square&logo=google&logoColor=white) |
| Audio synthesis | Tone.js (FMSynth, Part, Sequence, Reverb, FeedbackDelay) | ![Tone.js](https://img.shields.io/badge/-Tone.js-F734D7?style=flat-square) |
| 3D rendering | Three.js 0.161.0 (OrthographicCamera, custom ShaderMaterial) | ![Three.js](https://img.shields.io/badge/-Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white) |
| Shaders | Custom GLSL — analytical neon glow without post-processing | ![GLSL](https://img.shields.io/badge/-GLSL-5586A4?style=flat-square&logo=opengl&logoColor=white) |
| Fonts | Orbitron + Share Tech Mono | ![Google Fonts](https://img.shields.io/badge/-Google_Fonts-4285F4?style=flat-square&logo=googlefonts&logoColor=white) |
| Language | Vanilla JS (ES Modules), HTML5, CSS3 | ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) |

---

## 📁 Project Structure

```
GestureSynth/
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

## 🎶 Music Configuration

| Setting | Value |
|:--------|:------|
| Song | My Heart Will Go On — Celine Dion |
| Key | E Major |
| BPM | 56 |
| Structure | Verse (bars 0–3) → Chorus (bars 4–14) → Loop |
| Reverb | 9 s decay, 90 % wet |
| Drum pattern | Sparse ballad — kick on beats 1 & 3 |

---

## 🧩 Key Technical Challenges

| Challenge | Solution |
|:----------|:---------|
| Landmark jitter | EMA smoothing (α = 0.4) on all 21 keypoints per frame |
| CSS crop misalignment | Visible video region computed and used for coordinate remapping |
| JS timing non-determinism | All audio scheduled against `AudioContext.currentTime`, not rAF |
| Exact melody reproduction | `Tone.Part` with `bar:beat:sixteenth` timing, not generative patterns |

> See [`explanation.md`](explanation.md) for the full technical breakdown.

---

## 👤 Author

**Amer** · [github.com/amerob](https://github.com/amerob)

---

