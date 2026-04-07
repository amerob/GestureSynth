/**
 * ui.js — SYNTH JAM Game HUD Controller
 *
 * Manages: intro/loading flow, score, combo, notifications,
 * hand status panels, synth display, energy meter.
 *
 * Reads from window._gj — a lightweight state bridge
 * written by minimal patches in game.js.
 */

// ─── Config ──────────────────────────────────────────────
const SYNTH_NAMES  = ['STRINGS', 'GRAND PIANO', 'MUSIC BOX'];
const MESSAGES     = ['BEAUTIFUL!', 'DREAMY!', '♥ FEEL IT', 'ROMANTIC!', 'MAGICAL!', 'HEART & SOUL', 'TIMELESS!', 'ENCHANTING!'];
const SCORE_TICK   = 8;   // points per ~60fps tick while arpeggio is on
const SCORE_BEAT   = 5;   // points per drum beat hit
const COMBO_DECAY  = 3200; // ms of silence before combo resets

// ─── Global state bridge (game.js writes here) ───────────
window._gj = {
  arpeggioActive:  false,
  currentNote:     null,
  currentVelocity: 0,
  synthIndex:      0,
  drumActive:      false,
  activeDrums:     [],
  beatHit:         false,
};

// ─── DOM refs ─────────────────────────────────────────────
const loadingScreenEl   = document.getElementById('loading-screen');
const loadingStatusEl   = document.getElementById('loading-status-text');
const introScreenEl     = document.getElementById('intro-screen');
const startBtnEl        = document.getElementById('start-btn');

const scoreEl           = document.getElementById('score-value');
const comboEl           = document.getElementById('combo-display');
const synthNameEl       = document.getElementById('synth-name');
const synthDots         = document.querySelectorAll('.synth-dot');

const hand1StatusEl     = document.getElementById('hand1-status');
const hand2StatusEl     = document.getElementById('hand2-status');
const hand1NoteEl       = document.getElementById('hand1-note');
const hand1VolEl        = document.getElementById('hand1-vol');
const hand2DrumsEl      = document.getElementById('hand2-drums');

const energyFillEl      = document.getElementById('energy-bar-fill');
const notifAreaEl       = document.getElementById('notification-area');

// ─── Internal state ───────────────────────────────────────
let score        = 0;
let combo        = 1;
let comboTimer   = null;
let energyLevel  = 0;

let prevSynth    = 0;
let prevArpActive= false;
let scoreTick    = 0;
let notifCooldown= 0;       // frames until next random notification allowed
let frameCount   = 0;

// ─── Loading / Intro Flow ─────────────────────────────────

/** Cycle through loading status messages while the game boots. */
const loadMessages = [
  'Loading hand tracking model...',
  'Initializing audio engine...',
  'Calibrating gesture detection...',
  'Warming up synthesizers...',
  'Almost ready...',
];
let msgIndex = 0;
const msgInterval = setInterval(() => {
  msgIndex = (msgIndex + 1) % loadMessages.length;
  if (loadingStatusEl) loadingStatusEl.textContent = loadMessages[msgIndex];
}, 900);

function hideLoading() {
  clearInterval(msgInterval);
  if (!loadingScreenEl) return;
  loadingScreenEl.classList.add('hidden');
  setTimeout(() => {
    loadingScreenEl.style.display = 'none';
    if (introScreenEl) {
      introScreenEl.classList.remove('hidden');
    }
  }, 650);
}

function hideIntro() {
  if (!introScreenEl) return;
  introScreenEl.classList.add('hidden');
  setTimeout(() => { introScreenEl.style.display = 'none'; }, 820);
}

// "ENTER" button hides intro
if (startBtnEl) {
  startBtnEl.addEventListener('click', () => {
    hideIntro();
    // Resume AudioContext on first user gesture (required by browsers)
    if (window._gjAudioResume) window._gjAudioResume();
  });
}

// Poll for game ready signal, with a safety fallback at 5 s
let loadCheckId = setInterval(() => {
  if (window._gjLoaded) {
    clearInterval(loadCheckId);
    hideLoading();
  }
}, 150);
setTimeout(() => {
  if (loadingScreenEl && loadingScreenEl.style.display !== 'none') {
    hideLoading();
  }
}, 5200);

// ─── Score ────────────────────────────────────────────────

function addScore(pts) {
  score += pts * combo;
  if (scoreEl) {
    scoreEl.textContent = String(score).padStart(6, '0');
    scoreEl.classList.add('flash');
    setTimeout(() => scoreEl.classList.remove('flash'), 80);
  }
}

function bumpCombo() {
  combo = Math.min(combo + 1, 10);
  if (comboEl) {
    comboEl.textContent = `x${combo} COMBO`;
    comboEl.classList.add('active');
    // Trigger re-pop animation
    comboEl.classList.remove('pop');
    void comboEl.offsetWidth;            // force reflow
    comboEl.classList.add('pop');
  }
  clearTimeout(comboTimer);
  comboTimer = setTimeout(resetCombo, COMBO_DECAY);
}

function resetCombo() {
  combo = 1;
  if (comboEl) {
    comboEl.textContent = 'x1 COMBO';
    comboEl.classList.remove('active', 'pop');
  }
}

// ─── Synth Display ────────────────────────────────────────

function updateSynthDisplay(index) {
  synthDots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  if (synthNameEl) {
    synthNameEl.textContent = SYNTH_NAMES[index] ?? `SYNTH ${index + 1}`;
  }
}

// ─── Notifications ────────────────────────────────────────

function showNotification(text, type = '') {
  if (!notifAreaEl) return;
  const el = document.createElement('div');
  el.className = 'notification' + (type ? ` type-${type}` : '');
  el.textContent = text;
  notifAreaEl.appendChild(el);
  setTimeout(() => el.remove(), 1650);
}

// ─── Hand Status Panels ───────────────────────────────────

function setHand1(active, note, velocity) {
  if (!hand1StatusEl) return;
  if (active) {
    hand1StatusEl.classList.add('visible');
    if (hand1NoteEl) hand1NoteEl.textContent = note || '—';
    if (hand1VolEl)  hand1VolEl.textContent  = `VOL ${velocity != null ? Math.round(velocity * 100) + '%' : '—'}`;
  } else {
    hand1StatusEl.classList.remove('visible');
    if (hand1NoteEl) hand1NoteEl.textContent = '—';
    if (hand1VolEl)  hand1VolEl.textContent  = 'VOL —';
  }
}

function setHand2(active, drums) {
  if (!hand2StatusEl) return;
  if (active && drums && drums.length > 0) {
    hand2StatusEl.classList.add('visible');
    if (hand2DrumsEl) hand2DrumsEl.textContent = drums.map(d => d.toUpperCase()).join(' + ');
  } else {
    hand2StatusEl.classList.remove('visible');
    if (hand2DrumsEl) hand2DrumsEl.textContent = '—';
  }
}

// ─── Main UI Loop ─────────────────────────────────────────

function uiLoop() {
  requestAnimationFrame(uiLoop);
  frameCount++;
  const gj = window._gj;

  // ── Synth changed?
  if (gj.synthIndex !== prevSynth) {
    updateSynthDisplay(gj.synthIndex);
    showNotification(`SYNTH ${gj.synthIndex + 1}`, 'synth');
    prevSynth = gj.synthIndex;
  }

  // ── Hand 1 status
  setHand1(gj.arpeggioActive, gj.currentNote, gj.currentVelocity);

  // ── Hand 2 status
  setHand2(gj.drumActive, gj.activeDrums);

  // ── Score & combo while arpeggio is live
  if (gj.arpeggioActive) {
    scoreTick++;

    // Add score ~10× per second at 60 fps
    if (scoreTick % 6 === 0) {
      addScore(SCORE_TICK);
    }

    // Bump combo ~every 3 seconds of continuous playing
    if (scoreTick % 180 === 0) {
      bumpCombo();
    }

    // Random motivational notification
    if (notifCooldown > 0) {
      notifCooldown--;
    } else if (scoreTick % 240 === 0) {
      showNotification(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
      notifCooldown = 180 + Math.floor(Math.random() * 240);
    }
  } else {
    scoreTick = 0;
  }

  // ── Drum beat score
  if (gj.beatHit) {
    addScore(SCORE_BEAT);
    gj.beatHit = false;
  }

  // ── High-combo celebration
  if (combo === 5 && frameCount % 300 === 0) showNotification('x5 COMBO!', 'combo');
  if (combo >= 8 && frameCount % 200 === 0) showNotification('MAX COMBO!!', 'combo');

  // ── Energy meter (smoothed toward current velocity)
  const targetEnergy = gj.arpeggioActive ? (gj.currentVelocity || 0.4) : 0;
  energyLevel += (targetEnergy - energyLevel) * 0.06;
  if (energyFillEl) {
    energyFillEl.style.width = `${Math.round(energyLevel * 100)}%`;
  }
}

uiLoop();
