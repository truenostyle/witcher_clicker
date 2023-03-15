'use strict'
const musicAudio = document.getElementById("myAudio");

function change() {
    var checkbox = document.getElementById("switch-music"); 
    musicAudio.volume = musicRangeVolume;
    if (checkbox.checked == true) {
        musicAudio.play();
    } else {
        musicAudio.pause();
    }
}


let hit = document.getElementsByClassName("img_enemy2");

document.addEventListener("click", function(event) {
    const hit2Sound = new Audio('./sounds/sword-hit-1.mp3');
    hit2Sound.volume = resultRangeVolume;
    hit2Sound.play();
    shakeImage(Sword);
});  
