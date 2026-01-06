const params = new URLSearchParams(window.location.search);
let t = params.get("t") ?? "3";
if (!params.has("t") || params.get("t") === null || isNaN(Number(params.get("t"))) || Number(params.get("t")) % 1 !== 0 || Number(params.get("t")) < 3 || params.get("t").includes("-")) {
    t = 3;
}
if (Number(t) > 16) {
    t = 16;
}
document.getElementById("gametime").textContent = `${t}s`;