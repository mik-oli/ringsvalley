function loadPlaceholder(tile) {
    var x = document.getElementById(tile);
    if (x.style.display === "none") {
        document.getElementById("main-page").style.display = "none";
        document.getElementById("rules-page").style.display = "none";
        document.getElementById("items-page").style.display = "none";
        document.getElementById("factions-page").style.display = "none";
        x.style.display = "block";
    }
}