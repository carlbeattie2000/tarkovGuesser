"use strict";

// map data
const reservePATH = "./assets/mapGuessLocations/reserve/";

const reserveMapData = [
    {
        map_name: "reserve",
        img: reservePATH + "boss.jpg",
        correct_position: "41 -20",
    },
    {
        map_name: "reserve",
        img: reservePATH + "bunkers.jpg",
        correct_position: "24 -15",
    },
    {
        map_name: "reserve",
        img: reservePATH + "drain.jpg",
        correct_position: "30 -14",
    },
];

// load image

function reserveStart() {
    let imageContainer = document.getElementById("mainImage");
    let currentLocationSet = document.getElementById("current-map-set");

    const selectFirstImage = () => {
        // just use first item for now
        let selectedMapData = reserveMapData[getRandomInt(reserveMapData.length)];
        imageContainer.src = selectedMapData.img;
        currentLocationSet.textContent = selectedMapData.map_name;
    };

    selectFirstImage();
}

