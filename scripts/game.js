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

function round(time, bgColor, onFinish) {
    document.body.style.backgroundColor = bgColor;
    gameTimeEl.textContent = time;

    currentOnFinish = onFinish;

    interval = setInterval(() => {
        time--;
        gameTimeEl.textContent = time;

        if (time <= 0) {
            clearInterval(interval);
            interval = null;
            onFinish();
        }
    }, 1000);
}

// infinite loop logic
let isRed = true;

function startNextRound() {
    round(init, isRed ? "#EF4444" : "#38bdf8", () => {
        isRed = !isRed;
        startNextRound();
    });
}

document.addEventListener("click", () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
        currentOnFinish?.();
    }
});

// start loop
startNextRound();
