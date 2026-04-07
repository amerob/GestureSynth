function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import * as Tone from 'https://esm.sh/tone';
// A simple manager for our Tone.js based music generation
export var MusicManager = /*#__PURE__*/ function() {
    "use strict";
    function MusicManager() {
        _class_call_check(this, MusicManager);
        this.polySynth = null;
        this.reverb = null;
        this.stereoDelay = null; // Add a delay effect property
        this.analyser = null; // For waveform visualization
        this.isStarted = false;
        // Use a Map to store the active arpeggio pattern for each hand
        this.activePatterns = new Map();
        // Use a Map to store the current volume (velocity) for each hand's arpeggio
        this.handVolumes = new Map();
        this.synthPresets = [
            // Preset 1: Warm Romantic Pad — slow attack, long silky sustain, dreamy
            {
                harmonicity: 1.5,
                modulationIndex: 2,
                oscillator: { type: 'sine' },
                envelope: {
                    attack: 0.6,
                    decay: 0.4,
                    sustain: 0.8,
                    release: 2.5
                },
                modulation: { type: 'sine' },
                modulationEnvelope: {
                    attack: 0.8,
                    decay: 0.2,
                    sustain: 0.9,
                    release: 2.0
                },
                effects: { reverbWet: 0.9, delayWet: 0.2 }
            },
            // Preset 2: Romantic Grand Piano — warm tone, natural piano decay
            {
                harmonicity: 3.5,
                modulationIndex: 6,
                oscillator: { type: 'sine' },
                envelope: {
                    attack: 0.02,
                    decay: 0.8,
                    sustain: 0.3,
                    release: 2.2
                },
                modulation: { type: 'sine' },
                modulationEnvelope: {
                    attack: 0.02,
                    decay: 0.4,
                    sustain: 0.2,
                    release: 1.5
                },
                effects: { reverbWet: 0.85, delayWet: 0.15 }
            },
            // Preset 3: Gentle Music Box / Bells — crystalline, ethereal sparkle
            {
                harmonicity: 5,
                modulationIndex: 14,
                oscillator: { type: 'sine' },
                envelope: {
                    attack: 0.005,
                    decay: 0.5,
                    sustain: 0.05,
                    release: 1.8
                },
                modulation: { type: 'triangle' },
                modulationEnvelope: {
                    attack: 0.01,
                    decay: 0.3,
                    sustain: 0.0,
                    release: 1.2
                },
                effects: { reverbWet: 0.95, delayWet: 0.3 }
            }
        ];
        this.currentSynthIndex = 0;
        // ── "My Heart Will Go On" — Celine Dion / Titanic ──────────────────
        // Key: E Major  |  Time: 4/4
        // Time format: "bar:beat:sixteenth"  (all 0-indexed)
        this.titanicMelody = [
            // === VERSE ===
            // "Every night in my dreams, I see you, I feel you"
            { time: "0:0:0",  note: "E4",  dur: "8n" },
            { time: "0:0:2",  note: "E4",  dur: "8n" },
            { time: "0:1:0",  note: "F#4", dur: "8n" },
            { time: "0:1:2",  note: "G#4", dur: "4n" },
            { time: "0:2:2",  note: "F#4", dur: "8n" },
            { time: "0:3:0",  note: "E4",  dur: "4n" },
            { time: "1:0:0",  note: "B3",  dur: "2n" },

            { time: "2:0:0",  note: "E4",  dur: "8n" },
            { time: "2:0:2",  note: "F#4", dur: "8n" },
            { time: "2:1:0",  note: "G#4", dur: "8n" },
            { time: "2:1:2",  note: "A4",  dur: "4n" },
            { time: "2:2:2",  note: "G#4", dur: "8n" },
            { time: "2:3:0",  note: "F#4", dur: "4n" },
            { time: "3:0:0",  note: "E4",  dur: "1m"  },

            // === CHORUS ===
            // "Near, far, wherever you are"
            { time: "4:0:0",  note: "B4",  dur: "4n"  },
            { time: "4:1:0",  note: "B4",  dur: "4n"  },
            { time: "4:2:0",  note: "A4",  dur: "8n"  },
            { time: "4:2:2",  note: "G#4", dur: "8n"  },
            { time: "5:0:0",  note: "F#4", dur: "4n"  },
            { time: "5:1:0",  note: "E4",  dur: "2n." },

            // "I believe that the heart does go on"
            { time: "6:0:0",  note: "E4",  dur: "8n"  },
            { time: "6:0:2",  note: "F#4", dur: "8n"  },
            { time: "6:1:0",  note: "G#4", dur: "8n"  },
            { time: "6:1:2",  note: "A4",  dur: "8n"  },
            { time: "6:2:0",  note: "B4",  dur: "4n"  },
            { time: "6:3:0",  note: "B4",  dur: "8n"  },
            { time: "6:3:2",  note: "A4",  dur: "8n"  },
            { time: "7:0:0",  note: "G#4", dur: "2n"  },

            // "Once more, you open the door"
            { time: "8:0:0",  note: "B4",  dur: "4n"  },
            { time: "8:1:0",  note: "B4",  dur: "4n"  },
            { time: "8:2:0",  note: "A4",  dur: "8n"  },
            { time: "8:2:2",  note: "G#4", dur: "8n"  },
            { time: "9:0:0",  note: "F#4", dur: "4n"  },
            { time: "9:1:0",  note: "E4",  dur: "2n." },

            // "And you're here in my heart"
            { time: "10:0:0", note: "E4",  dur: "8n"  },
            { time: "10:0:2", note: "F#4", dur: "8n"  },
            { time: "10:1:0", note: "G#4", dur: "8n"  },
            { time: "10:1:2", note: "A4",  dur: "8n"  },
            { time: "10:2:0", note: "B4",  dur: "4n"  },
            { time: "10:3:0", note: "C#5", dur: "2n"  },

            // "And my heart will go on and on"
            { time: "12:0:0", note: "B4",  dur: "4n"  },
            { time: "12:1:0", note: "A4",  dur: "8n"  },
            { time: "12:1:2", note: "G#4", dur: "8n"  },
            { time: "12:2:0", note: "F#4", dur: "4n"  },
            { time: "13:0:0", note: "E4",  dur: "1m"  },
            { time: "14:0:0", note: "E4",  dur: "1m"  }
        ];
    }
    _create_class(MusicManager, [
        {
            key: "start",
            value: // Must be called after a user interaction
            function start() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.isStarted) return [
                                    2
                                ];
                                return [
                                    4,
                                    Tone.start()
                                ];
                            case 1:
                                _state.sent();
                                _this.reverb = new Tone.Reverb({
                                    decay: 9,
                                    preDelay: 0.05,
                                    wet: 0.9
                                }).toDestination();
                                // Create a stereo delay and connect it to the reverb
                                _this.stereoDelay = new Tone.FeedbackDelay("4n", 0.3).connect(_this.reverb);
                                _this.stereoDelay.wet.value = 0; // Start with no delay effect
                                // Create an analyser for the waveform visualizer
                                _this.analyser = new Tone.Analyser('waveform', 1024);
                                // Use PolySynth to allow multiple arpeggios (one per hand) to play simultaneously.
                                // The synth now connects to the analyser, then to the delay, which then connects to the reverb.
                                _this.polySynth = new Tone.PolySynth(Tone.FMSynth, _this.synthPresets[_this.currentSynthIndex]);
                                _this.polySynth.connect(_this.analyser);
                                _this.analyser.connect(_this.stereoDelay);
                                // Set a low volume to avoid clipping and create a more ambient feel
                                _this.polySynth.volume.value = 0;
                                _this.isStarted = true;
                                // My Heart Will Go On original tempo
                                Tone.Transport.bpm.value = 56;
                                // Start the master transport
                                Tone.Transport.start();
                                console.log("Tone.js AudioContext started and PolySynth is ready.");
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            // Starts an arpeggio for a specific hand
            key: "startArpeggio",
            value: function startArpeggio(handId, rootNote) {
                var _this = this;
                if (!this.polySynth || this.activePatterns.has(handId)) return;
                // Play the fixed "My Heart Will Go On" melody using Tone.Part
                var part = new Tone.Part(function(time, event) {
                    var velocity = _this.handVolumes.get(handId) || 0.35;
                    _this.polySynth.triggerAttackRelease(event.note, event.dur, time, velocity);
                }, _this.titanicMelody);
                // Loop: verse → chorus → repeat continuously
                part.loopStart = 0;
                part.loopEnd = "16:0:0"; // 16 bars total
                part.loop = true;
                part.start(0);
                // Store using same interface so stopArpeggio still works
                this.activePatterns.set(handId, {
                    pattern: part,
                    currentRoot: rootNote
                });
            }
        },
        {
            // Updates the volume (velocity) of an existing arpeggio
            key: "updateArpeggioVolume",
            value: function updateArpeggioVolume(handId, velocity) {
                // Only update if an arpeggio is active for this hand
                if (this.polySynth && this.activePatterns.has(handId)) {
                    // Clamp the velocity to be safe
                    var clampedVelocity = Math.max(0, Math.min(1, velocity));
                    this.handVolumes.set(handId, clampedVelocity);
                    // IMPORTANT FIX: Also set the synth's overall volume.
                    // Since we only have one arpeggio at a time, we can map this directly.
                    // Using logarithmic scaling for a more natural volume control.
                    var volumeInDb = Tone.gainToDb(clampedVelocity);
                    this.polySynth.volume.value = volumeInDb;
                }
            }
        },
        {
            // Updates the notes in an existing arpeggio
            key: "updateArpeggio",
            value: function updateArpeggio(handId, newRootNote) {
                // Melody is fixed — no note update needed.
                // Volume is handled by updateArpeggioVolume.
                // Just track the root for display purposes.
                var activePattern = this.activePatterns.get(handId);
                if (activePattern) {
                    activePattern.currentRoot = newRootNote;
                }
            }
        },
        {
            // Stops and cleans up an arpeggio for a specific hand
            key: "stopArpeggio",
            value: function stopArpeggio(handId) {
                var activePattern = this.activePatterns.get(handId);
                if (activePattern) {
                    activePattern.pattern.stop(0); // Stop the pattern
                    activePattern.pattern.dispose(); // Clean up Tone.js objects
                    this.activePatterns.delete(handId); // Remove from our map
                    this.handVolumes.delete(handId); // Clean up the stored volume
                    // If no other hands are playing, silence the synth.
                    if (this.activePatterns.size === 0) {
                        this.polySynth.volume.value = -Infinity;
                    }
                }
            }
        },
        {
            // Cycles to the next synth preset
            key: "cycleSynth",
            value: function cycleSynth() {
                var _this = this;
                var _newPreset_effects, _newPreset_effects1;
                if (!this.polySynth) return;
                // Stop all currently playing notes/arpeggios before swapping
                this.activePatterns.forEach(function(value, key) {
                    _this.stopArpeggio(key);
                });
                // Dispose the old synth to free up resources
                this.polySynth.dispose();
                // Cycle to the next preset
                this.currentSynthIndex = (this.currentSynthIndex + 1) % this.synthPresets.length;
                var newPreset = this.synthPresets[this.currentSynthIndex];
                // Create the new synth but don't connect it yet
                this.polySynth = new Tone.PolySynth(Tone.FMSynth, newPreset);
                // Re-establish the audio chain: synth -> analyser -> delay
                this.polySynth.connect(this.analyser);
                this.polySynth.volume.value = 0; // Reset volume
                var _newPreset_effects_reverbWet;
                // Adjust global effects based on the new preset's settings
                // Use optional chaining `?.` to safely access `effects` property
                this.reverb.wet.value = (_newPreset_effects_reverbWet = (_newPreset_effects = newPreset.effects) === null || _newPreset_effects === void 0 ? void 0 : _newPreset_effects.reverbWet) !== null && _newPreset_effects_reverbWet !== void 0 ? _newPreset_effects_reverbWet : 0.8; // Default to 0.8 if not specified
                var _newPreset_effects_delayWet;
                this.stereoDelay.wet.value = (_newPreset_effects_delayWet = (_newPreset_effects1 = newPreset.effects) === null || _newPreset_effects1 === void 0 ? void 0 : _newPreset_effects1.delayWet) !== null && _newPreset_effects_delayWet !== void 0 ? _newPreset_effects_delayWet : 0; // Default to 0 if not specified
                console.log("Switched to synth preset: ".concat(this.currentSynthIndex));
            }
        },
        {
            // Getter for the analyser so the game can use it
            key: "getAnalyser",
            value: function getAnalyser() {
                return this.analyser;
            }
        }
    ]);
    return MusicManager;
}();
