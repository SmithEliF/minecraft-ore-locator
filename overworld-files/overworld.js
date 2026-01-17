const backArrow = document.getElementById("backArrow");
const coalButton = document.getElementById("coalOre");
const copperButton = document.getElementById("copperOre");
const diamondButton = document.getElementById("diamondOre");
const emeraldButton = document.getElementById("emeraldOre");
const goldButton = document.getElementById("goldOre");
const ironButton = document.getElementById("ironOre");
const lapisButton = document.getElementById("lapisOre");
const redstoneButton = document.getElementById("redstoneOre");
const xButton = document.getElementById("xButton");

function loadHome() {
    window.location.href = "../home-files/home.html"
}

function loadCoal() {
    window.location.href = "ore-pages/coal/coal.html"
}

function loadCopper() {
    window.location.href = "ore-pages/copper/copper.html"
}

function loadDiamond() {
    window.location.href = "ore-pages/diamond/diamond.html"
}

function loadEmerald() {
    window.location.href = "ore-pages/emerald/emerald.html"
}

function loadGold() {
    window.location.href = "ore-pages/gold/gold.html"
}

function loadIron() {
    window.location.href = "ore-pages/iron/iron.html"
}

function loadLapis() {
    window.location.href = "ore-pages/lapis/lapis.html"
}

function loadRedstone() {
    window.location.href = "ore-pages/redstone/redstone.html"
}

function closeWindow() {
    window.close(); 
}

backArrow.onclick = loadHome;
coalButton.onclick = loadCoal;
copperButton.onclick = loadCopper;
diamondButton.onclick = loadDiamond; 
emeraldButton.onclick = loadEmerald;
goldButton.onclick = loadGold;
ironButton.onclick = loadIron;
lapisButton.onclick = loadLapis;
redstoneButton.onclick = loadRedstone;
xButton.onclick = closeWindow;