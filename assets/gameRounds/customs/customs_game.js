"use strict";

// map data
const PATH = "./assets/mapGuessLocations/customs/";
let correctMarker;

const customsMapData = [
    {
        map_name: "customs",
        img: PATH + "factory.jpg",
        correct_position: [-80.604086, -104.992915],
    },
    {
        map_name: "customs",
        img: PATH + "ru_gate_customs.jpg",
        correct_position: [-80.604086, -104.992915],
    },
    {
        map_name: "customs",
        img: PATH + "construction.png",
        correct_position: [-80.604086, -104.992915],
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
        correctMarker = L.marker([selectedMapData.correct_position[0], selectedMapData.correct_position[1]]).addTo(map);
    }

    selectFirstImage();
    showCorrectLocation();
}
