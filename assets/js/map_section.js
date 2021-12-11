"use strict";

let map = L.map("map").setView([0, 0], 2),
    marker,
    polyline,
    distance,
    latlngs,
    popup;

const getDistanceBetweenTwoPoints = (lat1, lon1, lat2, lon2, unit) => {
    if (lat1 == lat2 && lon1 == lon2) {
        return 0;
    } else {
        var radlat1 = (Math.PI * lat1) / 180;
        var radlat2 = (Math.PI * lat2) / 180;
        var theta = lon1 - lon2;
        var radtheta = (Math.PI * theta) / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344;
        }
        if (unit == "N") {
            dist = dist * 0.8684;
        }
        return Math.round(dist / 10);
    }
};

const updateDistanceUI = () => {
    const distanceContainer = document.getElementById("distance-container");

    distanceContainer.innerHTML = setDistanceComponent(distance);
};

const checkDistance = () => {
    distance = getDistanceBetweenTwoPoints(
        correctMarker.getLatLng().lat,
        correctMarker.getLatLng().lng,
        marker.getLatLng().lat,
        marker.getLatLng().lng,
        "M"
    );
};

const drawLineBetweenTwoPoints = () => {
    latlngs = Array();

    //Get latlng from first marker
    latlngs.push(marker.getLatLng());

    //Get latlng from second marker
    latlngs.push(correctMarker.getLatLng());

    // create a red polyline from an arrays of LatLng points
    polyline = L.polyline(latlngs, { color: "red" }).addTo(map);

    // zoom the map to the polyline
    // map.fitBounds(polyline.getBounds());
};

const removeMapMarkers = () => {
    if (marker && polyline && correctMarker) {
        map.removeLayer(marker);
        map.removeLayer(polyline);
        map.removeLayer(correctMarker);
    }
};

// Basically the game loop once the user selects a map.
const onMapClick = (e) => {
    if (guessSelected) {
        return;
    }

    endRound();

    marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

    drawLineBetweenTwoPoints();
    checkDistance();
    updateDistanceUI();

    calcScore(distance);
    setScore();

    // // DEVELOPMENT ONLY
    // popup
    //     .setLatLng(e.latlng)
    //     .setContent("You clicked the map at " + e.latlng.toString())
    //     .openOn(map);
};

const setMapTiles = (tilesPath, maxZoom) => {
    map.off();
    map.remove();

    map = L.map("map").setView([0, 0], 2);

    L.tileLayer(`./assets/maps/${tilesPath}/{z}/{x}/{y}.png`, {
        minZoom: 1,
        maxZoom: maxZoom,
        tileSize: 256,
        crs: L.CRS.Simple, // this is important for nongeo maps
        attribution: "@carlbeattie2000",
        tms: true,
        noWrap: true,
    }).addTo(map);

    // DEVELOPMENT ONLY
    popup = L.popup();

    map.on("click", onMapClick);
};
