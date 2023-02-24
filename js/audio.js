'use strict'
<<<<<<< HEAD
/*
var audio = document.getElementById("sword-hit-1");
=======

function change() {
    var checkbox = document.getElementById("switch-music");
>>>>>>> f059cea1c6fdc963c583770dcc918de025584806

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
<<<<<<< HEAD
*/
=======

>>>>>>> f059cea1c6fdc963c583770dcc918de025584806
