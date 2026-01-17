const backArrow = document.getElementById("backArrow");
const xButton = document.getElementById("xButton");

function loadOverworld() {
    window.location.href = "../../overworld.html"
}

function closeWindow() {
    window.close();
}

backArrow.onclick = loadOverworld;
xButton.onclick = closeWindow;