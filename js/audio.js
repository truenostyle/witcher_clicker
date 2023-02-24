'use strict'

function change() {
    var checkbox = document.getElementById("switch-music");

    var music = document.getElementById("myAudio");
    music.volume = 0.1;
    if (checkbox.checked == true) {
      music.play();
    } else {
      music.pause();
    }
  }

function playMusic() {
    const music = new Audio('./sounds/music.mp3');
    music.volume = 0.1;
    music.play();
  }

document.addEventListener("click", function(event) {
    const newAudio = new Audio('./sounds/sword-hit-1.mp3');
    newAudio.volume = 0.3;
    newAudio.play();
});