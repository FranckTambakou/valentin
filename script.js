function nextPage() {
    window.location.href = "yes.html";
}

function hideButton() {
    document.getElementById("noButton").style.opacity = "0";
    document.getElementById("yesButton").classList.add("blink");
}

function showButton() {
    document.getElementById("noButton").style.opacity = "1";
    document.getElementById("yesButton").classList.remove("blink");
}
