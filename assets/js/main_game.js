// calculate Score
let score = 0,
    currentRound = 0,
    roundLimit = 10,
    mapData = [],
    correctMarker,
    currentRoundData,
    guessSelected,
    selectedMap,
    totalScore = 500 * roundLimit;

const calcScore = (distance) => {
    if (distance >= 0 && distance < 10) {
        score += 500;
    } else if (distance > 10 && distance < 20) {
        score += 250;
    } else if (distance > 20 && distance < 40) {
        score += 125;
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

    mapData = localTempArray.splice(0, roundLimit);
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
        gameEnd();
        return; // will end game here
    }

    removeRoundEndComponents();
    removeMapMarkers();

    // take object from end of currentRoundData array
    currentRoundData = mapData.pop();

    selectNextImage(selectedMap, currentRoundData.img);

    currentRound++;
    // update the current round UI
    gameRound.textContent = currentRound + "/" + roundLimit;
};

const endRound = () => {
    guessSelected = true;
    createNextRoundButtonContainer();
    correctMarker = L.marker([currentRoundData.correct_position[0], currentRoundData.correct_position[1]]).addTo(map);
};

const gameEnd = () => {
    document.body.innerHTML = gameOverUI(score, totalScore);
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
