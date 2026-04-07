import './ui.js';
import { Game } from './game.js';
// Get the render target div
var renderDiv = document.getElementById('renderDiv');
// Check if renderDiv exists
if (!renderDiv) {
    console.error('Fatal Error: renderDiv element not found.');
} else {
    // Initialize the game with the render target
    var game = new Game(renderDiv);
// The game now initializes and starts automatically from its constructor.
}
