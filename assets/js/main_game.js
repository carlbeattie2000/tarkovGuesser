// calculate Score
let score = 0,
    currentRound = 0,
    roundLimit = 3,
    mapData = [],
    correctMarker,
    currentRoundData,
    guessSelected,
    selectedMap;

const calcScore = (distance) => {
    if (distance >= 0 && distance < 50) {
        score += 1000;
    } else if (distance > 50 && distance < 100) {
        score += 600;
    } else if (distance > 100 && distance < 120) {
        score += 100;
    } else {
        score = score;
    }
};

const setScore = () => {
    const scoreComponent = document.getElementById("game_score");

    scoreComponent.innerHTML = score;
};

const selectNextImage = (map_name, img) => {
    // will set the next image
    let PATH = `./assets/mapGuessLocations/${map_name}/`;
    let imageContainer = document.getElementById("mainImage");
    let currentLocationSet = document.getElementById("current-map-set");

    imageContainer.src = PATH + img;
    currentLocationSet.textContent = map_name;

    if (glass) {
        glass.parentNode.removeChild(glass);
    }

    magnify("mainImage", 2);
};

const getRoundMapData = (map_name) => {
    // we get and load the data for a map, and randomize the order of rounds
    let localTempArray = [];

    for (data of mapLocations) {
        console.log(data.map_name, map_name);
        if (data.map_name == map_name) {
            localTempArray.push(data);
        }
    }

    localTempArray.sort(() => 0.5 - Math.random());

    mapData = localTempArray.splice(0, 5);
};

const gameStart = () => {
    // will start the game, and load the selected map into a var
    mapSelect.disabled = true;
    startButton.disabled = true;

    getRoundMapData(selectedMap);

    nextRound();
};

const nextRound = () => {
    guessSelected = false;
    const nextRoundButton = document.getElementById("next_round_container");

    if (currentRound >= roundLimit) {
        return; // will end game here
    }
    if (marker && polyline && correctMarker && nextRoundButton) {
        map.removeLayer(marker);
        map.removeLayer(polyline);
        map.removeLayer(correctMarker);
        nextRoundButton.remove();
    }

    currentRoundData = mapData.pop();

    selectNextImage(selectedMap, currentRoundData.img);

    currentRound++;
    // update the current round UI
    gameRound.textContent = currentRound + "/" + roundLimit;
};

const endRound = () => {
    // will handle what happens when a player clicks to select a location, an the round ends
    guessSelected = true;
    createNextRoundButtonContainer();
    correctMarker = L.marker([currentRoundData.correct_position[0], currentRoundData.correct_position[1]]).addTo(map);
    // show button to go to next round
};

// handle map changing at start of game
startButton.addEventListener("click", () => {
    let selectedMapValue = document.getElementById("map-select").value;

    selectedMap = selectedMapValue;

    switch (selectedMapValue) {
        case "customs":
            setMapTiles("customTiles", 4);
            gameStart();
            break;
        case "factory":
            setMapTiles("factoryTiles", 2);
            gameStart();
            break;
        case "reserve":
            setMapTiles("reserveTiles", 4);
            gameStart();
            break;
        case "interchange":
            setMapTiles("interchangeTiles", 3);
            break;
        default:
            console.log("error");
            break;
    }
});
