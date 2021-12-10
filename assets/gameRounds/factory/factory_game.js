"use strict";

// map data
const factoryPATH = "./assets/mapGuessLocations/factory/";

const factoryMapData = [
    {
        map_name: "factory",
        img: factoryPATH + "gas_blocks.png",
        correct_position: "41 -20",
    },
    {
        map_name: "factory",
        img: factoryPATH + "office.jpg",
        correct_position: "24 -15",
    },
    {
        map_name: "factory",
        img: factoryPATH + "pve.jpg",
        correct_position: "30 -14",
    },
];

// load image

function factoryStart() {
    let imageContainer = document.getElementById("mainImage");
    let currentLocationSet = document.getElementById("current-map-set");

    const selectFirstImage = () => {
        // just use first item for now
        let selectedMapData = factoryMapData[getRandomInt(factoryMapData.length)];
        imageContainer.src = selectedMapData.img;
        currentLocationSet.textContent = selectedMapData.map_name;
    };

    selectFirstImage();
}

