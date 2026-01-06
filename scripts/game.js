const params = new URLSearchParams(window.location.search);

let init = params.get("t") ?? "3";
let t = init;

// validate t
if (
    !params.has("t") ||
    isNaN(Number(t)) ||
    Number(t) % 1 !== 0 ||
    Number(t) < 3 ||
    t.includes("-")
) {
    t = init = 3;
}

t = init = Math.min(Number(t), 16);

const gameTimeEl = document.getElementById("gametime");

let interval = null;
let currentOnFinish = null;

function endgame(bgColor) {
    const a = new Audio('../assets/lose.mp3');
    a.currentTime = 0;
    a.play().catch(() => {});
    gameTimeEl.style.fontSize = "5rem";
    gameTimeEl.textContent = (bgColor === "#EF4444" ? "RED" : "BLUE") + " LOST"
}

function round(time, bgColor, onFinish) {
    gameTimeEl.style.fontSize = "9xl";
    document.body.style.backgroundColor = bgColor;
    gameTimeEl.textContent = time;

    currentOnFinish = onFinish;

    interval = setInterval(() => {
        time--;
        if (time <= 0) {
            clearInterval(interval);
            interval = null;
            endgame(bgColor)
            return;
        }
        gameTimeEl.textContent = time;
    }, 1000);
}

let isRed = true;

function startNextRound() {
    round(init, isRed ? "#EF4444" : "#38bdf8", () => {
        isRed = !isRed;
        startNextRound();
    });
}

document.addEventListener("click", () => {
    gameTimeEl.style.fontSize = "8rem";
    if (interval) {
        clearInterval(interval);
        interval = null;
        currentOnFinish?.();
    } else {
        isRed = !isRed;
        startNextRound();
    }
});

startNextRound();
