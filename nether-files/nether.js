const backArrow = document.getElementById("backArrow");
const goldButton = document.getElementById("goldOre");
const netheriteButton = document.getElementById("ancientDebris");
const quartzButton = document.getElementById("quartzOre");
const xButton = document.getElementById("xButton");

function loadHome() {
    window.location.href = "../home-files/home.html"
}

function loadGold() {
    window.location.href = "ore-pages/gold/gold.html"
}

function loadNetherite() {
    window.location.href = "ore-pages/netherite/netherite.html"
}

function loadQuartz() {
    window.location.href = "ore-pages/quartz/quartz.html"
}

function closeWindow() {
    window.close();
}

backArrow.onclick = loadHome;
goldButton.onclick = loadGold;
netheriteButton.onclick = loadNetherite;
quartzButton.onclick = loadQuartz;
xButton.onclick = closeWindow;
