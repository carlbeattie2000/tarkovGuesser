"use strict";

// vars for DOM elements via ID
const mapSelect = document.getElementById("map-select"),
    startButton = document.getElementById("start-game"),
    glass = document.getElementById("maginfyGlass"),
    gameRound = document.getElementById("game_rounds"),
    sideMenu = document.getElementById("side-menu");

const setDistanceComponent = (distance) => {
    return `
    <h4>You were <span>${distance}</span>M away</h4>
    `;
};

const createNextRoundButtonContainer = () => {
    const divToInsertAfter = document.getElementById("distance-container");

    const div = document.createElement("div");
    div.id = "next_round_container";
    div.classList.add("distance-ui");

    const nextRoundButton = document.createElement("button");
    nextRoundButton.id = "next_round";
    nextRoundButton.textContent = "Next Round";

    div.appendChild(nextRoundButton);

    divToInsertAfter.parentNode.insertBefore(div, divToInsertAfter.nextSibling);

    document.getElementById("next_round").addEventListener("click", () => {
        nextRound();
    });
};
