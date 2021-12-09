let magnifyGlassInit = false;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// document.getElementById("mainImage").addEventListener("mouseover", () => {
//     if (!magnifyGlassInit) {
//         magnify("mainImage", 2);
//         magnifyGlassInit = true;
//     }
// });

document.getElementById("start-game").addEventListener("click", () => {
    let glass = document.getElementById("maginfyGlass");

    if (glass) {
        glass.parentNode.removeChild(glass);
    }

    customsStart();
    magnify("mainImage", 2);
});
