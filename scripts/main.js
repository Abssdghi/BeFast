function increaseSeconds() {
    const timeDiv = document.getElementById("time");
    let seconds = parseInt(timeDiv.textContent, 10);
    if (seconds == 16) {
        seconds = 2;
    }
    seconds += 1;
    timeDiv.textContent = seconds + "s";
}

function goToGame(time) {
    window.location.href = "./pages/game.html?t=" + time;
    const timeDiv = document.getElementById("gametime");
    timeDiv.textContent = time + "s";
}