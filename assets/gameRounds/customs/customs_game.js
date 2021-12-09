// map data
const PATH = "./assets/mapGuessLocations/customs/";

const mapData = [
    {
        map_name: "customs",
        img: PATH + "factory.jpg",
        correct_position: "41 -20",
    },
    {
        map_name: "customs",
        img: PATH + "ru_gate_customs.jpg",
        correct_position: "24 -15",
    },
    {
        map_name: "customs",
        img: PATH + "construction.png",
        correct_position: "30 -14",
    },
];

// load image

function customsStart() {
    let imageContainer = document.getElementById("mainImage");

    const selectFirstImage = () => {
        // just use first item for now
        imageContainer.src = mapData[getRandomInt(mapData.length)].img;
    };

    selectFirstImage();
}
