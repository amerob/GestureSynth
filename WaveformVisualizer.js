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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import * as THREE from 'three';
// A class to create and manage a waveform visualizer using Tone.Analyser
export var WaveformVisualizer = /*#__PURE__*/ function() {
    "use strict";
    function WaveformVisualizer(scene, analyser, canvasWidth, canvasHeight) {
        _class_call_check(this, WaveformVisualizer);
        this.scene = scene;
        this.analyser = analyser;
        this.mesh = null;
        this.bufferLength = this.analyser.size;
        this.dataArray = new Float32Array(this.bufferLength);
        this.smoothedDataArray = new Float32Array(this.bufferLength); // For smoothing
        // Visual properties
        this.smoothingFactor = 0.4; // How much to smooth the wave (0.0 - 1.0)
        this.width = canvasWidth * 0.8; // Occupy 80% of the screen width
        this.height = 450; // The vertical amplitude of the wave
        this.yPosition = 0; // The vertical center of the wave
        this.thickness = 10.0; // The thickness of the line mesh
        this.currentColor = new THREE.Color('#7B4394');
        this.targetColor = new THREE.Color('#7B4394');
        this.uniforms = {
            solidColor: {
                value: this.currentColor
            }
        };
        this._createVisualizer();
    }
    _create_class(WaveformVisualizer, [
        {
            key: "_createVisualizer",
            value: function _createVisualizer() {
                var material = new THREE.ShaderMaterial({
                    uniforms: this.uniforms,
                    vertexShader: "\n                varying vec2 vUv;\n                void main() {\n                    vUv = uv;\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n                }\n            ",
                    fragmentShader: "\n                uniform vec3 solidColor;\n                varying vec2 vUv;\n                void main() {\n                    float edge = abs(vUv.y - 0.5) * 2.0;\n                    float alpha = pow(1.0 - edge, 1.8) * 0.95;\n                    vec3 glow = solidColor + vec3(0.18) * (1.0 - edge);\n                    gl_FragColor = vec4(glow, alpha);\n                }\n            ",
                    transparent: true,
                    side: THREE.DoubleSide
                });
                var geometry = new THREE.BufferGeometry();
                var positions = new Float32Array(this.bufferLength * 2 * 3);
                var uvs = new Float32Array(this.bufferLength * 2 * 2);
                geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
                var indices = [];
                for(var i = 0; i < this.bufferLength - 1; i++){
                    var p1 = i * 2; // top-left
                    var p2 = p1 + 1; // bottom-left
                    var p3 = (i + 1) * 2; // top-right
                    var p4 = p3 + 1; // bottom-right
                    indices.push(p1, p2, p3);
                    indices.push(p2, p4, p3);
                }
                geometry.setIndex(indices);
                this.mesh = new THREE.Mesh(geometry, material);
                this.scene.add(this.mesh);
                this.updatePosition(window.innerWidth, window.innerHeight);
            }
        },
        {
            // Call this from the main animation loop
            key: "update",
            value: function update() {
                if (!this.analyser || !this.mesh) return;
                // Smoothly interpolate the current color towards the target color
                this.currentColor.lerp(this.targetColor, 0.05);
                var newArray = this.analyser.getValue();
                if (_instanceof(newArray, Float32Array)) {
                    this.dataArray.set(newArray);
                }
                var positions = this.mesh.geometry.attributes.position.array;
                var uvs = this.mesh.geometry.attributes.uv.array;
                var startX = -this.width / 2;
                var xStep = this.width / (this.bufferLength - 1);
                var halfThickness = this.thickness / 2;
                for(var i = 0; i < this.bufferLength; i++){
                    // Apply exponential smoothing
                    this.smoothedDataArray[i] = this.smoothingFactor * this.dataArray[i] + (1 - this.smoothingFactor) * this.smoothedDataArray[i];
                    var x = startX + i * xStep;
                    var y = this.yPosition + this.smoothedDataArray[i] * this.height;
                    // Set top and bottom vertices for the ribbon
                    var vertexIndex = i * 2 * 3;
                    positions[vertexIndex] = x;
                    positions[vertexIndex + 1] = y + halfThickness;
                    positions[vertexIndex + 2] = 2;
                    positions[vertexIndex + 3] = x;
                    positions[vertexIndex + 4] = y - halfThickness;
                    positions[vertexIndex + 5] = 2;
                    // Set UVs
                    var uvIndex = i * 2 * 2;
                    uvs[uvIndex] = i / (this.bufferLength - 1); // U coordinate
                    uvs[uvIndex + 1] = 1.0; // V for top vertex
                    uvs[uvIndex + 2] = i / (this.bufferLength - 1); // U coordinate
                    uvs[uvIndex + 3] = 0.0; // V for bottom vertex
                }
                this.mesh.geometry.attributes.position.needsUpdate = true;
                this.mesh.geometry.attributes.uv.needsUpdate = true;
                this.mesh.geometry.computeBoundingSphere();
            }
        },
        {
            key: "updateColor",
            value: function updateColor(newColor) {
                if (this.uniforms) {
                    this.targetColor.set(newColor);
                }
            }
        },
        {
            // Call this on window resize
            key: "updatePosition",
            value: function updatePosition(canvasWidth, canvasHeight) {
                this.width = canvasWidth * 0.8;
                this.yPosition = -canvasHeight / 2 + 170; // Position it above the beat indicators
            }
        },
        {
            // Clean up Three.js resources
            key: "dispose",
            value: function dispose() {
                if (this.mesh) {
                    this.scene.remove(this.mesh);
                    if (this.mesh.geometry) this.mesh.geometry.dispose();
                    if (this.mesh.material) this.mesh.material.dispose();
                }
            }
        }
    ]);
    return WaveformVisualizer;
}();