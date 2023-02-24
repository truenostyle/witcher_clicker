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

if (HP_pers <= 20)
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

        if(HP_pers <= 80)
        {
            HP_pers = HP_pers + 20;
        } else if (HP_pers >= 81 && HP_pers <= 99)
        {
            HP_pers = 100;
        }
    });
}

for(let i = 0; i < 5; i++)
{
    let image = document.createElement("img");
    image.src = "./photo/items/healpotion.png";
    image.style.position = "absolute";
    image.style.top = randomY + "px";
    image.style.left = randomX + "px";
    image.style.width = "100px";
    image.style.height = "100px";
    setTimeout(function() {
        document.body.appendChild(image);
        }, randomTime);
}