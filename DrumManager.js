function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import * as Tone from 'https://esm.sh/tone';
// --- Module State ---
var players = null;
var isLoaded = false;
var sequence = null;
var beatIndex = 0;
var activeDrums = new Set();
// Romantic / ballad drum pattern — gentle, spacious, understated
var drumPattern = {
    // Soft kick on beats 1 and 3 only — slow heartbeat feel
    'kick': [
        true,  false, false, false,
        false, false, false, false,
        true,  false, false, false,
        false, false, false, false
    ],
    // Very light snare — just a whisper on beat 3
    'snare': [
        false, false, false, false,
        false, false, false, false,
        false, false, true,  false,
        false, false, false, false
    ],
    // Sparse quarter-note hi-hat — airy, breathing rhythm
    'hihat': [
        false, false, true,  false,
        false, false, true,  false,
        false, false, true,  false,
        false, false, true,  false
    ],
    // No clap — too aggressive for a romantic vibe
    'clap': [
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false
    ]
};
var fingerToDrumMap = {
    'index': 'kick',
    'middle': 'snare',
    'ring': 'hihat',
    'pinky': 'clap'
};
// --- Exported Functions ---
/**
 * Loads all drum samples and returns a promise that resolves when loading is complete
 */ export function loadSamples() {
    return new Promise(function(resolve, reject) {
        if (isLoaded) {
            resolve();
            return;
        }
        players = new Tone.Players({
            urls: {
                kick: 'assets/kick.wav',
                snare: 'assets/snare.wav',
                hihat: 'assets/hihat.wav',
                clap: 'assets/clap.wav'
            },
            onload: function() {
                isLoaded = true;
                // Set volumes after loading
                players.player('kick').volume.value = -14;  // Very soft kick
                players.player('snare').volume.value = -10; // Gentle snare brush
                players.player('hihat').volume.value = -8;  // Airy hi-hat
                players.player('clap').volume.value = -30;  // Practically silent
                console.log("Drum samples loaded successfully.");
                resolve();
            },
            onerror: function(error) {
                console.error("Error loading drum samples:", error);
                reject(error);
            }
        }).toDestination();
    });
}
/**
 * Creates and starts the main 16-step drum loop.
 * Assumes Tone.Transport has been started elsewhere.
 */ export function startSequence() {
    if (!isLoaded || sequence) {
        console.warn("Drums not loaded or sequence already started. Cannot start sequence.");
        return;
    }
    sequence = new Tone.Sequence(function(time, step) {
        beatIndex = step; // Update for visualization
        Object.entries(drumPattern).forEach(function(param) {
            var _param = _sliced_to_array(param, 2), drum = _param[0], pattern = _param[1];
            // If the drum is active AND its pattern has a note on this step...
            if (activeDrums.has(drum) && pattern[step]) {
                players.player(drum).start(time);
            }
        });
    }, Array.from({
        length: 16
    }, function(_, i) {
        return i;
    }), "16n").start(0);
    console.log("Drum sequence started.");
}
/**
 * Updates which drums are active based on finger positions.
 * @param {object} fingerStates - An object with finger names as keys and boolean `isUp` as values.
 */ export function updateActiveDrums(fingerStates) {
    activeDrums.clear();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(fingerStates)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), finger = _step_value[0], isUp = _step_value[1];
            if (isUp) {
                var drum = fingerToDrumMap[finger];
                if (drum) {
                    activeDrums.add(drum);
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
/**
 * Returns the set of currently active drums.
 * @returns {Set<string>} A set of active drum names.
 */ export function getActiveDrums() {
    return activeDrums;
}
/**
 * Returns the mapping of fingers to drums.
 * @returns {object} The finger-to-drum map.
 */ export function getFingerToDrumMap() {
    return fingerToDrumMap;
}
/**
 * Returns the current beat index for external use (like visualization).
 * @returns {number} The current beat index (0-15).
 */ export function getCurrentBeat() {
    return beatIndex;
}
/**
 * Returns the master drum pattern object.
 * @returns {object} The drum pattern.
 */ export function getDrumPattern() {
    return drumPattern;
}