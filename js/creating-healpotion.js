'use strict'

var images = []; 
let hp_count = 0;

for (var i = 0; i < 5; i++) {
    var img = new Image(); 
    img.src = './photo/items/chicken.png'; 
    images.push(img); 
}


for(let i = 0; i < 5; i++)
{
    images[i].style.display = 'none';
    images[i].style.position = "absolute";
    images[i].style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    images[i].style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    document.body.appendChild(images[i]);
}

if (pers.hp <= 20)
{
    images[hp_count].style.display = 'block';
    hp_count++;
}

for (let i = 0; i < images.length; i++)
{
    images[i].addEventListener("click", function(event) {
        const healAudio = new Audio('./sounds/heal.mp3');
        healAudio.volume = 0.3;
        healAudio.play();
        images[i].style.display = 'none';

        if(pers.hp <= 80)
        {
            pers.hp = pers.hp + 20;
        } else if (pers.hp >= 81 && pers.hp <= 99)
        {
            pers.hp = 100;
        }
    });
}