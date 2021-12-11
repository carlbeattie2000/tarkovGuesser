let map = L.map("map").setView([0, 0], 2);
let marker;

const setMapTiles = (tilesPath, maxZoom) => {
    map.off();
    map.remove();

    map = L.map("map").setView([0, 0], 2);

    L.tileLayer(`./assets/maps/${tilesPath}/{z}/{x}/{y}.png`, {
        minZoom: 1,
        maxZoom: maxZoom,
        tileSize: 256, // or 512
        crs: L.CRS.Simple, // this is important for nongeo maps
        attribution: "@carlbeattie2000",
        tms: true,
        noWrap: true,
    }).addTo(map);

    function onMapClick(e) {
        if (marker) {
            map.removeLayer(marker);
        }
        marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    }

    map.on("click", onMapClick);
};

// set default map to customs
setMapTiles("customTiles", 6);

// handle map changing
document.getElementById("start-game").addEventListener("click", () => {
    let glass = document.getElementById("maginfyGlass");
    let mapSelectValue = document.getElementById("map-select").value;

    switch (mapSelectValue) {
        case "customs":
            setMapTiles("customTiles", 6);
            customsStart();
            break;
        case "factory":
            setMapTiles("factoryTiles", 2);
            factoryStart();
            break;
        case "reserve":
            setMapTiles("reserveTiles", 4);
            reserveStart();
            break;
        case "interchange":
            setMapTiles("interchangeTiles", 3);
            break;
        default:
            console.log("error");
            break;
    }

    if (glass) {
        glass.parentNode.removeChild(glass);
    }

    magnify("mainImage", 2);
});
