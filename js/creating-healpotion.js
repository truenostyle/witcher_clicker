'use strict'

let game_conteiner = document.getElementById("game_conteiner");

game_conteiner.style.display = 'none';

let images = []; 
let hp_count = 0;
function creating_items()
{   
    if(images.length > 0)
    {
        for(let i = 0; i < images.length; i++)
        {
            images[i].style.display = 'none';
        }
    }

    images.splice(0, images.length);
    hp_count = 0;
    
    for (let i = 0; i < 15; i++) {
        let img = new Image(); 
        img.src = './photo/items/chicken.png'; 
        images.push(img); 
    }
    
    
    for(let i = 0; i < 15; i++)
    {
        images[i].style.display = 'none';
        images[i].style.position = "absolute";
        images[i].style.width = "100px";
        images[i].style.height = "100px";
        images[i].style.top = Math.floor(Math.random() * (window.innerHeight - "100")) + "px";
        images[i].style.left = Math.floor(Math.random() * (window.innerWidth  - "100")) + "px";
        document.body.appendChild(images[i]);
    }
    
    let intervalHP = setInterval(checkHP, 5000);
    
    function checkHP()
    {
        if (hp_count <= images.length)
        {
            if(Pers_HP <= 90)
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
    
            if(Pers_HP <= 80)
            {
                Pers_HP = Pers_HP + 20;
            } else if (Pers_HP >= 81 && Pers_HP <= 99)
            {
                Pers_HP = 100;
            } else if (Pers_HP >= 100)
            {
                Pers_HP = 100;
            }
            Pers_damage(Pers_HP) ;
        });
    }
}
