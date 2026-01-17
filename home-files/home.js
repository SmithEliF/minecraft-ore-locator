const overworldButton = document.getElementById("grassBlock");
const netherButton = document.getElementById("netherrackBlock");
const xButton = document.getElementById("xButton");

function loadOverworld() {
    window.location.href = "../overworld-files/overworld.html"
}

function loadNether() {
    window.location.href = "../nether-files/nether.html"
}

function closeWindow() {
    window.close();
}

overworldButton.onclick = loadOverworld;
netherButton.onclick = loadNether;
xButton.onclick = closeWindow;