function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
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
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; // Import GLTFLoader
import { HandLandmarker, FilesetResolver } from 'https://esm.sh/@mediapipe/tasks-vision@0.10.14';
import { MusicManager } from './MusicManager.js'; // Import the MusicManager
import * as Tone from 'https://esm.sh/tone'; // Import Tone to access Transport
import * as drumManager from './DrumManager.js'; // Import the new drum manager module
import { WaveformVisualizer } from './WaveformVisualizer.js'; // Import the new waveform visualizer
export var Game = /*#__PURE__*/ function() {
    "use strict";
    function Game(renderDiv) {
        var _this = this;
        _class_call_check(this, Game);
        this.renderDiv = renderDiv;
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.videoElement = null;
        this.handLandmarker = null;
        this.lastVideoTime = -1;
        this.hands = []; // Stores data about detected hands (landmarks, anchor position, line group)
        this.handLineMaterial = null; // Material for hand lines
        this.fingertipMaterialHand1 = null; // Material for first hand's fingertip circles (blue)
        this.fingertipMaterialHand2 = null; // Material for second hand's fingertip circles (green)
        this.fingertipLandmarkIndices = [
            0,
            4,
            8,
            12,
            16,
            20
        ]; // WRIST + TIP landmarks
        this.handConnections = null; // Landmark connection definitions
        // this.handCollisionRadius = 30; // Conceptual radius for hand collision, was 25 (sphere radius) - Not needed for template
        this.gameState = 'loading'; // loading, ready, tracking, error
        this.gameOverText = null; // Will be repurposed or simplified
        this.clock = new THREE.Clock();
        this.musicManager = new MusicManager(); // Create an instance of MusicManager
        this.waveformVisualizer = null; // To be initialized
        // this.drumManager = new DrumManager(); // DrumManager is now a static module, no instance needed
        this.lastLandmarkPositions = [
            [],
            []
        ]; // Store last known smoothed positions for each hand's landmarks
        this.smoothingFactor = 0.4; // Alpha for exponential smoothing (0 < alpha <= 1). Smaller = more smoothing.
        this.loadedModels = {}; // To store loaded models if any (e.g. a generic hand model in future)
        this.beatIndicators = []; // Array to hold the 16 beat indicator meshes
        this.beatIndicatorMaterials = []; // Array to hold the base material for each indicator
        // Romantic warm palette for beat indicators
        this.beatIndicatorColors = {
            kick:  new THREE.Color("#FF4D8B"), // deep rose
            snare: new THREE.Color("#FFB347"), // warm amber
            clap:  new THREE.Color("#C9A96E"), // champagne gold
            hihat: new THREE.Color("#FF8FAB"), // blush pink
            off:   new THREE.Color("#4a2030")  // dark wine (subtle off state)
        };
        this.beatIndicatorGroup = null; // Group to hold all indicators for easy repositioning
        this.labelColors = {
            evaPurple: {
                r: 123,
                g: 67,
                b: 148,
                a: 0.9
            },
            evaGreen: {
                r: 132,
                g: 195,
                b: 78,
                a: 0.9
            },
            evaOrange: {
                r: 243,
                g: 110,
                b: 47,
                a: 0.9
            },
            evaRed: {
                r: 215,
                g: 40,
                b: 40,
                a: 0.9
            },
            white: {
                r: 255,
                g: 255,
                b: 255,
                a: 1.0
            },
            black: {
                r: 0,
                g: 0,
                b: 0,
                a: 1.0
            }
        };
        // Warm romantic palette — roses, golds, soft pinks matching Titanic theme
        this.waveformColors = [
            new THREE.Color("#FF6B9D"), // rose pink
            new THREE.Color("#FFB347"), // warm amber
            new THREE.Color("#FF8FAB"), // blush
            new THREE.Color("#C9A96E"), // champagne gold
            new THREE.Color("#FF4D8B")  // deep rose
        ];
        // Initialize asynchronously
        this._init().catch(function(error) {
            console.error("Initialization failed:", error);
            _this._showError("Initialization failed. Check console.");
        });
    }
    _create_class(Game, [
        {
            key: "_init",
            value: function _init() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this._setupDOM(); // Sets up basic DOM, including speech bubble container
                                _this._setupThree();
                                return [
                                    4,
                                    _this._loadAssets()
                                ];
                            case 1:
                                _state.sent(); // Add asset loading step
                                return [
                                    4,
                                    _this._setupHandTracking()
                                ];
                            case 2:
                                _state.sent(); // This needs to complete before we can proceed
                                // Ensure webcam is playing before starting game logic dependent on it
                                return [
                                    4,
                                    _this.videoElement.play()
                                ];
                            case 3:
                                _state.sent();
                                window.addEventListener('resize', _this._onResize.bind(_this));
                                _this._startGame(); // Start the game directly
                                _this._setupEventListeners(); // Set up interaction listeners
                                _this._animate(); // Start the animation loop (it will check state)
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_setupDOM",
            value: function _setupDOM() {
                this.renderDiv.style.position = 'relative';
                this.renderDiv.style.width = '100vw'; // Use viewport units for fullscreen
                this.renderDiv.style.height = '100vh';
                this.renderDiv.style.overflow = 'hidden';
                this.renderDiv.style.background = '#111'; // Fallback background
                this.videoElement = document.createElement('video');
                this.videoElement.style.position = 'absolute';
                this.videoElement.style.top = '0';
                this.videoElement.style.left = '0';
                this.videoElement.style.width = '100%';
                this.videoElement.style.height = '100%';
                this.videoElement.style.objectFit = 'cover';
                this.videoElement.style.transform = 'scaleX(-1)'; // Mirror view for intuitive control
                this.videoElement.style.filter = 'grayscale(100%)'; // Make it black and white
                this.videoElement.autoplay = true;
                this.videoElement.muted = true; // Mute video to avoid feedback loops if audio was captured
                this.videoElement.playsInline = true;
                this.videoElement.style.zIndex = '0'; // Ensure video is behind THREE canvas
                this.renderDiv.appendChild(this.videoElement);
                // Container for Status text (formerly Game Over) and restart hint
                this.gameOverContainer = document.createElement('div');
                this.gameOverContainer.style.position = 'absolute';
                this.gameOverContainer.style.top = '50%';
                this.gameOverContainer.style.left = '50%';
                this.gameOverContainer.style.transform = 'translate(-50%, -50%)';
                this.gameOverContainer.style.zIndex = '10';
                this.gameOverContainer.style.display = 'none'; // Hidden initially
                this.gameOverContainer.style.pointerEvents = 'none'; // Don't block clicks
                this.gameOverContainer.style.textAlign = 'center'; // Center text elements within
                this.gameOverContainer.style.color = 'white'; // Default color, can be changed by _showError
                this.gameOverContainer.style.textShadow = '2px 2px 4px black';
                this.gameOverContainer.style.fontFamily = '"Arial Black", Gadget, sans-serif';
                // Main Status Text (formerly Game Over Text)
                this.gameOverText = document.createElement('div'); // Will be 'gameOverText' internally
                this.gameOverText.innerText = 'STATUS'; // Generic placeholder
                this.gameOverText.style.fontSize = 'clamp(36px, 10vw, 72px)'; // Responsive font size
                this.gameOverText.style.fontWeight = 'bold';
                this.gameOverText.style.marginBottom = '10px'; // Space below main text
                this.gameOverContainer.appendChild(this.gameOverText);
                // Restart Hint Text (may or may not be shown depending on context)
                this.restartHintText = document.createElement('div');
                this.restartHintText.innerText = '(click to restart tracking)';
                this.restartHintText.style.fontSize = 'clamp(16px, 3vw, 24px)';
                this.restartHintText.style.fontWeight = 'normal';
                this.restartHintText.style.opacity = '0.8'; // Slightly faded
                this.gameOverContainer.appendChild(this.restartHintText);
                this.renderDiv.appendChild(this.gameOverContainer);
            // ScoreDisplay removed
            // Watermelon (Center Emoji Marker) setup removed
            // Chad Image Marker setup removed
            }
        },
        {
            key: "_setupThree",
            value: function _setupThree() {
                var width = this.renderDiv.clientWidth;
                var height = this.renderDiv.clientHeight;
                this.scene = new THREE.Scene();
                // Using OrthographicCamera for a 2D-like overlay effect
                this.camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000);
                this.camera.position.z = 100; // Position along Z doesn't change scale in Ortho
                this.renderer = new THREE.WebGLRenderer({
                    alpha: true,
                    antialias: true
                });
                this.renderer.setSize(width, height);
                this.renderer.setPixelRatio(window.devicePixelRatio);
                this.renderer.domElement.style.position = 'absolute';
                this.renderer.domElement.style.top = '0';
                this.renderer.domElement.style.left = '0';
                this.renderer.domElement.style.zIndex = '1'; // Canvas on top of video
                this.renderDiv.appendChild(this.renderer.domElement);
                var ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
                this.scene.add(ambientLight);
                var directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
                directionalLight.position.set(0, 0, 100); // Pointing from behind camera
                this.scene.add(directionalLight);
                // Setup hand visualization (palm circles removed, lines will be added later)
                for(var i = 0; i < 2; i++){
                    var lineGroup = new THREE.Group();
                    lineGroup.visible = false;
                    this.scene.add(lineGroup);
                    this.hands.push({
                        landmarks: null,
                        anchorPos: new THREE.Vector3(),
                        lineGroup: lineGroup,
                        isFist: false // Track if the hand is currently in a fist
                    });
                }
                this.handLineMaterial = new THREE.LineBasicMaterial({
                    color: 0x00ccff,
                    linewidth: 8
                });
                this.fingertipMaterialHand1 = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    side: THREE.DoubleSide
                }); // White
                this.fingertipMaterialHand2 = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    side: THREE.DoubleSide
                }); // White
                // Define connections for MediaPipe hand landmarks
                // See: https://developers.google.com/mediapipe/solutions/vision/hand_landmarker#hand_landmarks
                this.handConnections = [
                    // Thumb
                    [
                        0,
                        1
                    ],
                    [
                        1,
                        2
                    ],
                    [
                        2,
                        3
                    ],
                    [
                        3,
                        4
                    ],
                    // Index finger
                    [
                        0,
                        5
                    ],
                    [
                        5,
                        6
                    ],
                    [
                        6,
                        7
                    ],
                    [
                        7,
                        8
                    ],
                    // Middle finger
                    [
                        0,
                        9
                    ],
                    [
                        9,
                        10
                    ],
                    [
                        10,
                        11
                    ],
                    [
                        11,
                        12
                    ],
                    // Ring finger
                    [
                        0,
                        13
                    ],
                    [
                        13,
                        14
                    ],
                    [
                        14,
                        15
                    ],
                    [
                        15,
                        16
                    ],
                    // Pinky
                    [
                        0,
                        17
                    ],
                    [
                        17,
                        18
                    ],
                    [
                        18,
                        19
                    ],
                    [
                        19,
                        20
                    ],
                    // Palm
                    [
                        5,
                        9
                    ],
                    [
                        9,
                        13
                    ],
                    [
                        13,
                        17
                    ] // Connect base of fingers
                ];
                // Particle resources removed
                // Ground line removed
                // --- Beat Indicator ---
                this.beatIndicatorGroup = new THREE.Group();
                this.scene.add(this.beatIndicatorGroup);
                this._setupBeatIndicatorMaterials(); // Create materials based on drum pattern
                var indicatorGeometry = new THREE.PlaneGeometry(9, 38);
                for(var i1 = 0; i1 < 16; i1++){
                    // Use the pre-calculated material for this beat index
                    var indicator = new THREE.Mesh(indicatorGeometry, this.beatIndicatorMaterials[i1]);
                    this.beatIndicatorGroup.add(indicator);
                    this.beatIndicators.push(indicator);
                }
                this._positionBeatIndicators(); // Position them right after creation
            }
        },
        {
            key: "_loadAssets",
            value: function _loadAssets() {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                console.log("Loading assets...");
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                // Ghost Textures loading removed
                                // Ghost GLTF Model loading removed (was already commented out)
                                return [
                                    4,
                                    drumManager.loadSamples()
                                ];
                            case 2:
                                _state.sent(); // Load drum sounds
                                console.log("No game-specific assets to load for template.");
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                error = _state.sent();
                                console.error("Error loading assets:", error);
                                _this._showError("Failed to load assets."); // Generic message
                                throw error; // Stop initialization
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_setupHandTracking",
            value: function _setupHandTracking() {
                var _this = this;
                return _async_to_generator(function() {
                    var vision, stream, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    4,
                                    ,
                                    5
                                ]);
                                console.log("Setting up Hand Tracking...");
                                return [
                                    4,
                                    FilesetResolver.forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm')
                                ];
                            case 1:
                                vision = _state.sent();
                                return [
                                    4,
                                    HandLandmarker.createFromOptions(vision, {
                                        baseOptions: {
                                            modelAssetPath: "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
                                            delegate: 'GPU'
                                        },
                                        numHands: 2,
                                        runningMode: 'VIDEO'
                                    })
                                ];
                            case 2:
                                _this.handLandmarker = _state.sent();
                                console.log("HandLandmarker created.");
                                console.log("Requesting webcam access...");
                                return [
                                    4,
                                    navigator.mediaDevices.getUserMedia({
                                        video: {
                                            facingMode: 'user',
                                            width: {
                                                ideal: 1280
                                            },
                                            height: {
                                                ideal: 720
                                            }
                                        },
                                        audio: false
                                    })
                                ];
                            case 3:
                                stream = _state.sent();
                                _this.videoElement.srcObject = stream;
                                console.log("Webcam stream obtained.");
                                // Wait for video metadata to load to ensure dimensions are available
                                return [
                                    2,
                                    new Promise(function(resolve) {
                                        _this.videoElement.onloadedmetadata = function() {
                                            console.log("Webcam metadata loaded.");
                                            // Adjust video size slightly after metadata is loaded if needed, but CSS handles most
                                            _this.videoElement.style.width = _this.renderDiv.clientWidth + 'px';
                                            _this.videoElement.style.height = _this.renderDiv.clientHeight + 'px';
                                            resolve();
                                        };
                                    })
                                ];
                            case 4:
                                error = _state.sent();
                                console.error('Error setting up Hand Tracking or Webcam:', error);
                                _this._showError("Webcam/Hand Tracking Error: ".concat(error.message, ". Please allow camera access."));
                                throw error; // Re-throw to stop initialization
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            // _startSpawning, _scheduleNextSpawn, _stopSpawning, _spawnGhost methods removed.
            key: "_updateHands",
            value: function _updateHands() {
                var _this = this;
                if (!this.handLandmarker || !this.videoElement.srcObject || this.videoElement.readyState < 2 || this.videoElement.videoWidth === 0) return;
                var videoTime = this.videoElement.currentTime;
                if (videoTime > this.lastVideoTime) {
                    this.lastVideoTime = videoTime;
                    try {
                        var _this1, _loop = function(i) {
                            var hand = _this1.hands[i];
                            var wasVisible = hand.landmarks !== null;
                            if (results.landmarks && results.landmarks[i]) {
                                var currentRawLandmarks = results.landmarks[i];
                                if (!_this1.lastLandmarkPositions[i] || _this1.lastLandmarkPositions[i].length !== currentRawLandmarks.length) {
                                    _this1.lastLandmarkPositions[i] = currentRawLandmarks.map(function(lm) {
                                        return _object_spread({}, lm);
                                    });
                                }
                                var smoothedLandmarks = currentRawLandmarks.map(function(lm, lmIndex) {
                                    var prevLm = _this.lastLandmarkPositions[i][lmIndex];
                                    return {
                                        x: _this.smoothingFactor * lm.x + (1 - _this.smoothingFactor) * prevLm.x,
                                        y: _this.smoothingFactor * lm.y + (1 - _this.smoothingFactor) * prevLm.y,
                                        z: _this.smoothingFactor * lm.z + (1 - _this.smoothingFactor) * prevLm.z
                                    };
                                });
                                _this1.lastLandmarkPositions[i] = smoothedLandmarks.map(function(lm) {
                                    return _object_spread({}, lm);
                                });
                                hand.landmarks = smoothedLandmarks;
                                var palm = smoothedLandmarks[9]; // MIDDLE_FINGER_MCP
                                var lmOriginalX = palm.x * videoParams.videoNaturalWidth;
                                var lmOriginalY = palm.y * videoParams.videoNaturalHeight;
                                var normX_visible = (lmOriginalX - videoParams.offsetX) / videoParams.visibleWidth;
                                var normY_visible = (lmOriginalY - videoParams.offsetY) / videoParams.visibleHeight;
                                var handX = (1 - normX_visible) * canvasWidth - canvasWidth / 2;
                                var handY = (1 - normY_visible) * canvasHeight - canvasHeight / 2;
                                hand.anchorPos.set(handX, handY, 1);
                                if (i === 0) {
                                    // --- Music & Gesture Control ---
                                    var isFistNow = _this1._isFist(smoothedLandmarks);
                                    if (isFistNow && !hand.isFist) {
                                        // Fist gesture was just made
                                        _this1.musicManager.cycleSynth();
                                        _this1.musicManager.stopArpeggio(i); // Stop any old arpeggio
                                        if (window._gj) window._gj.synthIndex = _this1.musicManager.currentSynthIndex || 0;
                                    }
                                    hand.isFist = isFistNow;
                                    var noteIndex = Math.floor((1 - normY_visible) * scale.length);
                                    var note = scale[Math.max(0, Math.min(scale.length - 1, noteIndex))];
                                    if (_this1.waveformVisualizer) {
                                        var colorIndex = noteIndex % _this1.waveformColors.length;
                                        var newColor = _this1.waveformColors[colorIndex];
                                        _this1.waveformVisualizer.updateColor(newColor);
                                    }
                                    var thumbTip = smoothedLandmarks[4];
                                    var indexTip = smoothedLandmarks[8];
                                    var dx = thumbTip.x - indexTip.x;
                                    var dy = thumbTip.y - indexTip.y;
                                    var distance = Math.sqrt(dx * dx + dy * dy);
                                    var velocity = Math.max(0, Math.min(1.0, distance * 5));
                                    _this1._updateHandLines(i, smoothedLandmarks, videoParams, canvasWidth, canvasHeight, {
                                        note: note,
                                        velocity: velocity,
                                        isFist: isFistNow
                                    });
                                    if (!isFistNow) {
                                        // Start/Restart arpeggio if the hand just appeared OR if it just opened from a fist.
                                        var arpeggioIsActive = _this1.musicManager.activePatterns.has(i);
                                        if (!wasVisible || !arpeggioIsActive) {
                                            _this1.musicManager.startArpeggio(i, note);
                                        } else {
                                            _this1.musicManager.updateArpeggio(i, note);
                                        }
                                        _this1.musicManager.updateArpeggioVolume(i, velocity);
                                        if (window._gj) { window._gj.arpeggioActive = true; window._gj.currentNote = note; window._gj.currentVelocity = velocity; }
                                    } else {
                                        // If it is a fist, make sure the arpeggio is stopped
                                        _this1.musicManager.stopArpeggio(i);
                                        if (window._gj) window._gj.arpeggioActive = false;
                                    }
                                } else if (i === 1) {
                                    var fingerStates = _this1._getFingerStates(smoothedLandmarks);
                                    drumManager.updateActiveDrums(fingerStates);
                                    if (window._gj) {
                                        var _dm = drumManager.getFingerToDrumMap ? drumManager.getFingerToDrumMap() : {};
                                        var _activeList = Object.entries(fingerStates).filter(function(e){return e[1];}).map(function(e){return _dm[e[0]]||e[0];});
                                        window._gj.drumActive = _activeList.length > 0;
                                        window._gj.activeDrums = _activeList;
                                    }
                                    _this1._updateHandLines(i, smoothedLandmarks, videoParams, canvasWidth, canvasHeight, {
                                        fingerStates: fingerStates
                                    });
                                }
                                hand.lineGroup.visible = true;
                            } else {
                                if (wasVisible) {
                                    if (i === 0) {
                                        _this1.musicManager.stopArpeggio(i);
                                        if (window._gj) window._gj.arpeggioActive = false;
                                    } else if (i === 1) {
                                        // Disable all drums when hand is gone
                                        drumManager.updateActiveDrums({});
                                        if (window._gj) { window._gj.drumActive = false; window._gj.activeDrums = []; }
                                    }
                                }
                                hand.landmarks = null;
                                if (hand.lineGroup) hand.lineGroup.visible = false;
                            }
                        };
                        var results = this.handLandmarker.detectForVideo(this.videoElement, performance.now());
                        var videoParams = this._getVisibleVideoParameters();
                        if (!videoParams) return;
                        var canvasWidth = this.renderDiv.clientWidth;
                        var canvasHeight = this.renderDiv.clientHeight;
                        // E Major scale — key of "My Heart Will Go On"
                        var scale = [
                            'E3',
                            'F#3',
                            'G#3',
                            'A3',
                            'B3',
                            'C#4',
                            'E4',
                            'F#4',
                            'G#4',
                            'A4',
                            'B4',
                            'C#5'
                        ];
                        for(var i = 0; i < this.hands.length; i++)_this1 = this, _loop(i);
                    } catch (error) {
                        console.error("Error during hand detection:", error);
                    }
                }
            }
        },
        {
            key: "_getVisibleVideoParameters",
            value: function _getVisibleVideoParameters() {
                if (!this.videoElement || this.videoElement.videoWidth === 0 || this.videoElement.videoHeight === 0) {
                    return null;
                }
                var vNatW = this.videoElement.videoWidth;
                var vNatH = this.videoElement.videoHeight;
                var rW = this.renderDiv.clientWidth;
                var rH = this.renderDiv.clientHeight;
                if (vNatW === 0 || vNatH === 0 || rW === 0 || rH === 0) return null;
                var videoAR = vNatW / vNatH;
                var renderDivAR = rW / rH;
                var finalVideoPixelX, finalVideoPixelY;
                var visibleVideoPixelWidth, visibleVideoPixelHeight;
                if (videoAR > renderDivAR) {
                    // Video is wider than renderDiv, scaled to fit renderDiv height, cropped horizontally.
                    var scale = rH / vNatH; // Scale factor based on height.
                    var scaledVideoWidth = vNatW * scale; // Width of video if scaled to fit renderDiv height.
                    // Total original video pixels cropped horizontally (from both sides combined).
                    var totalCroppedPixelsX = (scaledVideoWidth - rW) / scale;
                    finalVideoPixelX = totalCroppedPixelsX / 2; // Pixels cropped from the left of original video.
                    finalVideoPixelY = 0; // No vertical cropping.
                    visibleVideoPixelWidth = vNatW - totalCroppedPixelsX; // Width of the visible part in original video pixels.
                    visibleVideoPixelHeight = vNatH; // Full height is visible.
                } else {
                    // Video is taller than renderDiv (or same AR), scaled to fit renderDiv width, cropped vertically.
                    var scale1 = rW / vNatW; // Scale factor based on width.
                    var scaledVideoHeight = vNatH * scale1; // Height of video if scaled to fit renderDiv width.
                    // Total original video pixels cropped vertically (from top and bottom combined).
                    var totalCroppedPixelsY = (scaledVideoHeight - rH) / scale1;
                    finalVideoPixelX = 0; // No horizontal cropping.
                    finalVideoPixelY = totalCroppedPixelsY / 2; // Pixels cropped from the top of original video.
                    visibleVideoPixelWidth = vNatW; // Full width is visible.
                    visibleVideoPixelHeight = vNatH - totalCroppedPixelsY; // Height of the visible part in original video pixels.
                }
                // Safety check for degenerate cases (e.g., extreme aspect ratios leading to zero visible dimension)
                if (visibleVideoPixelWidth <= 0 || visibleVideoPixelHeight <= 0) {
                    // Fallback or log error, this shouldn't happen in normal scenarios
                    console.warn("Calculated visible video dimension is zero or negative.", {
                        visibleVideoPixelWidth: visibleVideoPixelWidth,
                        visibleVideoPixelHeight: visibleVideoPixelHeight
                    });
                    return {
                        offsetX: 0,
                        offsetY: 0,
                        visibleWidth: vNatW,
                        visibleHeight: vNatH,
                        videoNaturalWidth: vNatW,
                        videoNaturalHeight: vNatH
                    };
                }
                return {
                    offsetX: finalVideoPixelX,
                    offsetY: finalVideoPixelY,
                    visibleWidth: visibleVideoPixelWidth,
                    visibleHeight: visibleVideoPixelHeight,
                    videoNaturalWidth: vNatW,
                    videoNaturalHeight: vNatH
                };
            }
        },
        {
            // _updateGhosts method removed.
            key: "_showStatusScreen",
            value: function _showStatusScreen(message) {
                var color = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'white', showRestartHint = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                this.gameOverContainer.style.display = 'block';
                this.gameOverText.innerText = message;
                this.gameOverText.style.color = color;
                this.restartHintText.style.display = showRestartHint ? 'block' : 'none';
            // No spawning to stop for template
            }
        },
        {
            key: "_showError",
            value: function _showError(message) {
                this.gameOverContainer.style.display = 'block';
                this.gameOverText.innerText = "ERROR: ".concat(message);
                this.gameOverText.style.color = 'orange';
                this.restartHintText.style.display = 'true'; // Show restart hint on error
                this.gameState = 'error';
                // No spawning to stop
                this.hands.forEach(function(hand) {
                    if (hand.lineGroup) hand.lineGroup.visible = false;
                });
            // if (this.startButton) this.startButton.style.display = 'none'; // No longer exists
            }
        },
        {
            key: "_startGame",
            value: function _startGame() {
                var _this = this;
                console.log("Starting tracking...");
                // This is now called automatically, so no need to check gameState
                this.musicManager.start().then(function() {
                    drumManager.startSequence(); // Start drums *after* audio context is ready.
                    window._gjLoaded = true; // Signal UI that game is ready
                    // Setup the waveform visualizer after the music manager is ready
                    var analyser = _this.musicManager.getAnalyser();
                    if (analyser) {
                        _this.waveformVisualizer = new WaveformVisualizer(_this.scene, analyser, _this.renderDiv.clientWidth, _this.renderDiv.clientHeight);
                    }
                });
                this.gameState = 'tracking'; // Changed from 'playing'
                this.lastVideoTime = -1;
                this.clock.start();
            // Removed display of score, castle, chad
            // Removed _startSpawning()
            }
        },
        {
            key: "_restartGame",
            value: function _restartGame() {
                console.log("Restarting tracking...");
                this.gameOverContainer.style.display = 'none';
                this.hands.forEach(function(hand) {
                    if (hand.lineGroup) {
                        hand.lineGroup.visible = false;
                    }
                });
                // Ghost removal removed
                // Score reset removed
                // Visibility of game elements removed
                this.gameState = 'tracking'; // Changed from 'playing'
                this.lastVideoTime = -1;
                this.clock.start();
            // Removed _startSpawning()
            }
        },
        {
            // _updateScoreDisplay method removed.
            key: "_onResize",
            value: function _onResize() {
                var width = this.renderDiv.clientWidth;
                var height = this.renderDiv.clientHeight;
                // Update camera perspective
                this.camera.left = width / -2;
                this.camera.right = width / 2;
                this.camera.top = height / 2;
                this.camera.bottom = height / -2;
                this.camera.updateProjectionMatrix();
                // Update renderer size
                this.renderer.setSize(width, height);
                // Update video element size
                this.videoElement.style.width = width + 'px';
                this.videoElement.style.height = height + 'px';
                // Watermelon, Chad, GroundLine updates removed.
                this._positionBeatIndicators();
                if (this.waveformVisualizer) {
                    this.waveformVisualizer.updatePosition(width, height);
                }
            }
        },
        {
            key: "_positionBeatIndicators",
            value: function _positionBeatIndicators() {
                var width = this.renderDiv.clientWidth;
                var height = this.renderDiv.clientHeight;
                var totalWidth = width * 0.8; // Occupy 80% of screen width to match the waveform
                var spacing = totalWidth / 16;
                var startX = -totalWidth / 2 + spacing / 2;
                var yPos = -height / 2 + 30; // Tight to bottom edge
                this.beatIndicators.forEach(function(indicator, i) {
                    indicator.position.set(startX + i * spacing, yPos, 1);
                });
            }
        },
        {
            key: "_setupBeatIndicatorMaterials",
            value: function _setupBeatIndicatorMaterials() {
                // All indicators start as 'off' (white)
                for(var i = 0; i < 16; i++){
                    // We just need one material definition now and will copy it.
                    this.beatIndicatorMaterials[i] = new THREE.MeshBasicMaterial({
                        color: this.beatIndicatorColors.off,
                        transparent: true,
                        opacity: 0.15
                    });
                }
            }
        },
        {
            key: "_createTextSprite",
            value: function _createTextSprite(message, parameters) {
                parameters = parameters || {};
                var fontface = parameters.fontface || 'Arial';
                var fontsize = parameters.fontsize || 24;
                // borderColor is no longer needed
                var backgroundColor = parameters.backgroundColor || {
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 0.8
                };
                var textColor = parameters.textColor || {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1.0
                };
                var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');
                context.font = "Bold ".concat(fontsize, "px ").concat(fontface);
                // get size data (height depends only on font size)
                var metrics = context.measureText(message);
                var textWidth = metrics.width;
                var padding = 10;
                var canvasWidth = textWidth + padding * 2;
                var canvasHeight = fontsize * 1.4 + padding;
                canvas.width = canvasWidth;
                canvas.height = canvasHeight;
                // Font needs to be re-applied after resizing canvas
                context.font = "Bold ".concat(fontsize, "px ").concat(fontface);
                // background color
                context.fillStyle = "rgba(".concat(backgroundColor.r, ",").concat(backgroundColor.g, ",").concat(backgroundColor.b, ",").concat(backgroundColor.a, ")");
                context.fillRect(0, 0, canvasWidth, canvasHeight);
                // text color and position
                context.fillStyle = "rgba(".concat(textColor.r, ", ").concat(textColor.g, ", ").concat(textColor.b, ", 1.0)");
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillText(message, canvasWidth / 2, canvasHeight / 2);
                // canvas contents will be used for a texture
                var texture = new THREE.CanvasTexture(canvas);
                texture.needsUpdate = true;
                var spriteMaterial = new THREE.SpriteMaterial({
                    map: texture
                });
                var sprite = new THREE.Sprite(spriteMaterial);
                sprite.scale.set(canvas.width, canvas.height, 1.0);
                return sprite;
            }
        },
        {
            key: "_getFingerStates",
            value: function _getFingerStates(landmarks) {
                // Landmark indices for fingertips
                var fingertips = {
                    index: 8,
                    middle: 12,
                    ring: 16,
                    pinky: 20
                };
                // Stricter check using the joint below the tip (PIP joint) to avoid false positives.
                var fingerJointsBelowTip = {
                    index: 6,
                    middle: 10,
                    ring: 14,
                    pinky: 18
                };
                var states = {};
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.entries(fingertips)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), finger = _step_value[0], tipIndex = _step_value[1];
                        var jointIndex = fingerJointsBelowTip[finger];
                        if (landmarks[tipIndex] && landmarks[jointIndex]) {
                            // A finger is "up" if its tip is higher than the joint just below it.
                            states[finger] = landmarks[tipIndex].y < landmarks[jointIndex].y;
                        } else {
                            states[finger] = false;
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
                return states;
            }
        },
        {
            key: "_isFist",
            value: function _isFist(landmarks) {
                if (!landmarks || landmarks.length < 21) return false;
                // Use the middle finger's MCP joint as a proxy for the palm center
                var palmCenter = landmarks[9];
                var fingertipsIndices = [
                    4,
                    8,
                    12,
                    16,
                    20
                ]; // Thumb, Index, Middle, Ring, Pinky
                // Threshold for normalized landmark distance. If fingertips are further than this from palm, it's not a fist.
                // This value may need tuning. A smaller value makes the fist detection stricter.
                var fistThreshold = 0.1;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = fingertipsIndices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var tipIndex = _step.value;
                        var tip = landmarks[tipIndex];
                        var dx = tip.x - palmCenter.x;
                        var dy = tip.y - palmCenter.y;
                        var distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance > fistThreshold) {
                            return false; // At least one finger is open
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
                return true; // All fingertips are close to the palm
            }
        },
        {
            key: "_updateHandLines",
            value: function _updateHandLines(handIndex, landmarks, videoParams, canvasWidth, canvasHeight, controlData) {
                var _this = this;
                var hand = this.hands[handIndex];
                var lineGroup = hand.lineGroup;
                // Clean up previous frame's objects
                while(lineGroup.children.length){
                    var child = lineGroup.children[0];
                    lineGroup.remove(child);
                    if (child.geometry) child.geometry.dispose();
                    if (child.material) {
                        // For sprites, we need to dispose the texture map as well
                        if (child.material.map) child.material.map.dispose();
                        child.material.dispose();
                    }
                }
                if (!landmarks || landmarks.length === 0 || !videoParams) {
                    lineGroup.visible = false;
                    return;
                }
                var points3D = landmarks.map(function(lm) {
                    var lmOriginalX = lm.x * videoParams.videoNaturalWidth;
                    var lmOriginalY = lm.y * videoParams.videoNaturalHeight;
                    var normX_visible = (lmOriginalX - videoParams.offsetX) / videoParams.visibleWidth;
                    var normY_visible = (lmOriginalY - videoParams.offsetY) / videoParams.visibleHeight;
                    normX_visible = Math.max(0, Math.min(1, normX_visible));
                    normY_visible = Math.max(0, Math.min(1, normY_visible));
                    var x = (1 - normX_visible) * canvasWidth - canvasWidth / 2;
                    var y = (1 - normY_visible) * canvasHeight - canvasHeight / 2;
                    return new THREE.Vector3(x, y, 1.1); // Z for fingertip circles
                });
                // --- Draw Skeleton Lines ---
                var lineZ = 1;
                this.handConnections.forEach(function(conn) {
                    var p1 = points3D[conn[0]];
                    var p2 = points3D[conn[1]];
                    if (p1 && p2) {
                        var lineP1 = p1.clone().setZ(lineZ);
                        var lineP2 = p2.clone().setZ(lineZ);
                        var geometry = new THREE.BufferGeometry().setFromPoints([
                            lineP1,
                            lineP2
                        ]);
                        var line = new THREE.Line(geometry, _this.handLineMaterial);
                        lineGroup.add(line);
                    }
                });
                // --- Draw Fingertip & Wrist Circles ---
                var fingertipRadius = 8, wristRadius = 12, circleSegments = 16;
                this.fingertipLandmarkIndices.forEach(function(index) {
                    var landmarkPosition = points3D[index];
                    if (landmarkPosition) {
                        var radius = index === 0 ? wristRadius : fingertipRadius;
                        var circleGeometry = new THREE.CircleGeometry(radius, circleSegments);
                        var material = handIndex === 0 ? _this.fingertipMaterialHand1 : _this.fingertipMaterialHand2;
                        var landmarkCircle = new THREE.Mesh(circleGeometry, material);
                        landmarkCircle.position.copy(landmarkPosition);
                        lineGroup.add(landmarkCircle);
                    }
                });
                // --- Draw Thumb-to-Index line and Labels ---
                var thumbPos = points3D[4];
                var indexPos = points3D[8];
                var wristPos = points3D[0];
                if (wristPos) {
                    // Labels depend on which hand it is
                    if (handIndex === 0 && thumbPos && indexPos) {
                        // Connecting line
                        var lineGeom = new THREE.BufferGeometry().setFromPoints([
                            thumbPos,
                            indexPos
                        ]);
                        var line = new THREE.Line(lineGeom, new THREE.LineBasicMaterial({
                            color: 0xffffff,
                            linewidth: 3
                        }));
                        lineGroup.add(line);
                        // Volume and Pitch labels
                        var note = controlData.note, velocity = controlData.velocity, isFist = controlData.isFist;
                        if (isFist) {
                            var fistLabel = this._createTextSprite("SYNTH ".concat(this.musicManager.currentSynthIndex + 1), {
                                fontface: 'Orbitron, Arial, sans-serif',
                                fontsize: 18,
                                backgroundColor: { r: 0, g: 5, b: 18, a: 0.78 },
                                textColor: { r: 255, g: 0, b: 255, a: 1.0 }
                            });
                            fistLabel.position.set(wristPos.x, wristPos.y + 60, 2);
                            lineGroup.add(fistLabel);
                        } else {
                            var midPoint = new THREE.Vector3().lerpVectors(thumbPos, indexPos, 0.5);
                            var volumeLabel = this._createTextSprite("VOL ".concat(Math.round(velocity * 100), "%"), {
                                fontface: 'Orbitron, Arial, sans-serif',
                                fontsize: 16,
                                backgroundColor: { r: 0, g: 5, b: 18, a: 0.78 },
                                textColor: { r: 255, g: 220, b: 0, a: 1.0 }
                            });
                            volumeLabel.position.set(midPoint.x, midPoint.y, 2);
                            lineGroup.add(volumeLabel);
                            var pitchLabel = this._createTextSprite(note, {
                                fontface: 'Orbitron, Arial, sans-serif',
                                fontsize: 22,
                                backgroundColor: { r: 0, g: 5, b: 18, a: 0.78 },
                                textColor: { r: 0, g: 255, b: 255, a: 1.0 }
                            });
                            pitchLabel.position.set(wristPos.x, wristPos.y + 60, 2); // Position above the wrist
                            lineGroup.add(pitchLabel);
                        }
                    } else if (handIndex === 1) {
                        var fingerStates = controlData.fingerStates;
                        var activeDrums = Object.entries(fingerStates).filter(function(param) {
                            var _param = _sliced_to_array(param, 2), _ = _param[0], isUp = _param[1];
                            return isUp;
                        }).map(function(param) {
                            var _param = _sliced_to_array(param, 2), finger = _param[0], _ = _param[1];
                            return drumManager.getFingerToDrumMap()[finger];
                        }).join(', ');
                        var drumLabel = this._createTextSprite(activeDrums ? activeDrums.toUpperCase() : 'READY', {
                            fontface: 'Orbitron, Arial, sans-serif',
                            fontsize: 16,
                            backgroundColor: { r: 0, g: 5, b: 18, a: 0.78 },
                            textColor: { r: 0, g: 255, b: 65, a: 1.0 }
                        });
                        drumLabel.position.set(wristPos.x, wristPos.y + 60, 2);
                        lineGroup.add(drumLabel);
                    }
                }
                lineGroup.visible = true;
            }
        },
        {
            key: "_animate",
            value: function _animate() {
                requestAnimationFrame(this._animate.bind(this));
                if (this.gameState === 'tracking') {
                    var deltaTime = this.clock.getDelta();
                    this._updateHands();
                    this._updateBeatIndicator();
                    if (this.waveformVisualizer) {
                        this.waveformVisualizer.update();
                    }
                }
                this.renderer.render(this.scene, this.camera);
            }
        },
        {
            key: "_updateBeatIndicator",
            value: function _updateBeatIndicator() {
                var _this = this;
                var currentBeat = drumManager.getCurrentBeat();
                var progress = Tone.Transport.progress;
                var beatProgress = progress * 16 % 1;
                var pulse = 1.5 + 0.5 * Math.cos(beatProgress * Math.PI * 2);
                var activeDrums = drumManager.getActiveDrums();
                var drumPattern = drumManager.getDrumPattern();
                var drumPriority = [
                    'kick',
                    'snare',
                    'clap',
                    'hihat'
                ];
                this.beatIndicators.forEach(function(indicator, i) {
                    // Determine the color for this step based on active drums
                    var stepColor = _this.beatIndicatorColors.off;
                    var isHit = false;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = drumPriority[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var drum = _step.value;
                            if (activeDrums.has(drum) && drumPattern[drum][i]) {
                                stepColor = _this.beatIndicatorColors[drum];
                                isHit = true;
                                break;
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
                    indicator.material.color.set(stepColor);
                    indicator.material.opacity = isHit ? 1.0 : 0.15;
                    // Pulse only the current beat — scale height only for bar effect
                    if (i === currentBeat) {
                        indicator.scale.set(1, pulse, 1);
                    } else {
                        indicator.scale.set(1, 1, 1);
                    }
                });
            }
        },
        {
            key: "_setupEventListeners",
            value: function _setupEventListeners() {
                var _this = this;
                // Add click listener for resuming audio context and potentially restarting on error
                this.renderDiv.addEventListener('click', function() {
                    _this.musicManager.start(); // Resume audio context on any click
                    if (_this.gameState === 'error') {
                        _this._restartGame();
                    }
                });
                console.log('Game event listeners set up.');
            }
        }
    ]);
    return Game;
}();
