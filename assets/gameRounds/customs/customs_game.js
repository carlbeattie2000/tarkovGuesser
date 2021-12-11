"use strict";

// map data
const PATH = "./assets/mapGuessLocations/customs/";
let correctMarker;

const customsMapData = [
    {
        map_name: "customs",
        img: PATH + "factory.jpg",
        correct_position: [-84.196507, 0.439453],
    },
    {
        map_name: "customs",
        img: PATH + "ru_gate_customs.jpg",
        correct_position: [-80.297927, -102.480469],
    },
    {
        map_name: "customs",
        img: PATH + "construction.png",
        correct_position: [-71.663663, 13.798828],
    },
];

// load image

function customsStart() {
    let imageContainer = document.getElementById("mainImage");
    let currentLocationSet = document.getElementById("current-map-set");
    let selectedMapData = customsMapData[getRandomInt(customsMapData.length)];

    const selectFirstImage = () => {
        // just use first item for now
        imageContainer.src = selectedMapData.img;
        currentLocationSet.textContent = selectedMapData.map_name;
    };

    function showCorrectLocation() {
        // TODO: this needs to only show at the end of the round, but be stored so we can show it
        correctMarker = L.marker([selectedMapData.correct_position[0], selectedMapData.correct_position[1]]).addTo(map);
    }

    selectFirstImage();
    showCorrectLocation();
}
