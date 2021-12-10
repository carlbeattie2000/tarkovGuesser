let map = L.map('map').setView([0, 0], 2);

const setMapTiles = (tilesPath, maxZoom) => {
    map.off();
    map.remove();

    map = L.map('map').setView([0, 0], 2);

    L.tileLayer(`./assets/maps/${tilesPath}/{z}/{x}/{y}.png`, {
        minZoom: 1,
        maxZoom: maxZoom,
        tileSize: 256, // or 512  
        crs: L.CRS.Simple, // this is important for nongeo maps
        attribution: 'ESO/INAF-VST/OmegaCAM',
        tms: true,
        noWrap: true
    }).addTo(map);
}

// set default map to customs
setMapTiles("customTiles", 6);

// handle map changing

document.getElementById("start-game").addEventListener("click", () => {
    let glass = document.getElementById("maginfyGlass");
    let mapSelectValue = document.getElementById("map-select").value;

    switch(mapSelectValue) {
        case "customs" :
            setMapTiles("customTiles", 6);
            customsStart();
            break
        case "factory" :
            setMapTiles("factoryTiles", 2);
            break
        case "reserve" :
            setMapTiles("reserveTiles", 4);
            break
        case "interchange" :
            setMapTiles("interchangeTiles", 3);
            break
        default :
            console.log("error");
            break
    }

    if (glass) {
        glass.parentNode.removeChild(glass);
    }

    magnify("mainImage", 2);
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
