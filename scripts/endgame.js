const a = new Audio('../assets/lose.mp3');
a.currentTime = 0;
a.play().catch(() => {});

const params = new URLSearchParams(window.location.search);

let loserparam = params.get("c") ?? "YOU";
const loserEl = document.getElementById("loser");

if (loserparam == "RED") {
    document.body.style.backgroundColor = "#EF4444";
} else if (loserparam == "BLUE") {
    document.body.style.backgroundColor = "#38bdf8";
} else {
    window.location.href = "../index.html";
}


loserEl.textContent = loserparam + " LOST";

