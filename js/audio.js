'use strict'
const hit1Audio = new Audio('./sounds/sword-hit-1.mp3');
const hit2Audio = new Audio('./sounds/sword-hit-2.mp3');
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

for (let i = 0; i < hit.length; i++)
{  
        hit[i].addEventListener("click", function(event) {      
        hit2Audio.volume = resultRangeVolume;
        hit2Audio.play();
    });
}


document.addEventListener("click", function(event) {
    hit1Audio.volume = resultRangeVolume;
    hit1Audio.play(); 
    shakeImage(Sword);
});  
