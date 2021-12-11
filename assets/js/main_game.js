// calculate Score
let score = 0,
    currentRound = 1,
    roundLimit = 5;

const calcScore = (distance) => {
    if (distance > 0 && distance < 50) {
        score += 1000;
    } else if (distance > 50 && distance < 100) {
        score += 600;
    } else if (distance > 100 && distance < 200) {
        score += 200;
    } else {
        score = score;
    }
};

const setScore = () => {
    const scoreComponent = document.getElementById("game_score");

    console.log(score);

    scoreComponent.innerHTML = score;
};

const gameStart = () => {
    // will start the game, and load the selected map into a var
};

const nextRound = () => {
    if (currentRound >= roundLimit) {
        return; // will end game here
    }
    // run the functions the change to load the next image and points on the map
    currentRound++;
};
