"use strict";

// vars for DOM elements via ID
const mapSelect = document.getElementById("map-select"),
    startButton = document.getElementById("start-game"),
    glass = document.getElementById("maginfyGlass"),
    gameRound = document.getElementById("game_rounds");

const setDistanceComponent = (distance) => {
    return `
    <h4>You were <span>${distance}</span>M away</h4>
    `;
};
