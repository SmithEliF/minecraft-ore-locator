const backArrow = document.getElementById("backArrow");
const xButton = document.getElementById("xButton");

function loadNether() {
    window.location.href = "../../nether.html"
}

function closeWindow() {
    window.close();
}

backArrow.onclick = loadNether;
xButton.onclick = closeWindow;