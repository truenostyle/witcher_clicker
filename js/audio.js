'use strict'

var audio = document.getElementById("sword-hit-1");

function playAudio() {
    audio.play();
}

document.addEventListener("click", function(event) {
    const newAudio = new Audio('./sounds/sword-hit-1.mp3');
    newAudio.play();
});