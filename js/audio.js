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

let hit = document.getElementsByClassName("img_enemy");

for (let i = 0; i < hit.length; i++)
{
    hit[i].addEventListener("click", function(event) {
        const newAudio = new Audio('./sounds/sword-hit-2.mp3');
        newAudio.volume = 0.3;
        newAudio.play();
    });
}


document.addEventListener("click", function(event) {
    const newAudio = new Audio('./sounds/sword-hit-1.mp3');
    newAudio.volume = 0.3;
    newAudio.play();
});

