'use strict'

let dmgimages = [];
let hp_count = 0;
let dmg_count = 0;
for (let i = 0; i < 5; i++) {
    let img2 = new Image(); 
    img2.src = './photo/items/dmgpotion.png'; 
    dmgimages.push(img2); 
}

for(let i = 0; i < 5; i++)
{
    dmgimages[i].style.display = 'none';
    dmgimages[i].style.position = "absolute";
    dmgimages[i].style.width = "100px";
    dmgimages[i].style.height = "100px";
    dmgimages[i].style.top = Math.floor(Math.random() * (window.innerHeight - "100")) + "px";
    dmgimages[i].style.left = Math.floor(Math.random() * (window.innerWidth  - "100")) + "px";
    document.body.appendChild(dmgimages[i]);
}


for (let i = 0; i < dmgimages.length; i++)
{
    dmgimages[i].addEventListener("click", function(event) {
        const healAudio = new Audio('./sounds/drink.mp3');
        healAudio.volume = 0.3;
        healAudio.play();
        dmgimages[i].style.display = 'none';
        pers.damage = pers.damage + 10;
    });
}

let intervalDMG = setInterval(checkDMG, 3000);


function checkDMG()
{
    if (dmg_count <= dmgimages.length)
    {
    if(Math.round(Math.random()) === 1)
        {
            dmgimages[dmg_count].style.display = 'block';
            dmg_count++;
        }  
    }
    else {
        clearInterval(intervalDMG);
    }
}


let images = []; 


for (let i = 0; i < 5; i++) {
    let img = new Image(); 
    img.src = './photo/items/chicken.png'; 
    images.push(img); 
}


for(let i = 0; i < 5; i++)
{
    images[i].style.display = 'none';
    images[i].style.position = "absolute";
    images[i].style.width = "100px";
    images[i].style.height = "100px";
    images[i].style.top = Math.floor(Math.random() * (window.innerHeight - "100")) + "px";
    images[i].style.left = Math.floor(Math.random() * (window.innerWidth  - "100")) + "px";
    document.body.appendChild(images[i]);
}

let intervalHP = setInterval(checkHP, 3000);

function checkHP()
{
    if (hp_count <= images.length)
    {
        if(pers.hp <= 35)
        {
            images[hp_count].style.display = 'block';
            hp_count++;
        }
    }
    else {
        clearInterval(intervalHP);
    }
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
        } else if (pers.hp >= 100)
        {
            pers.hp = 100;
        }
        Pers_damage(pers.hp) ;
    });
}