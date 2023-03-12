'use strict'

let menu_conteiner = document.getElementById('menu_conteiner');
const play =  document.getElementById('play');
const body =  document.getElementById('body');
const settings = document.getElementById('settings');

let settings_conteiner = document.getElementById('settings_conteiner')
let menu_buttons = document.getElementsByClassName('menu_buttons');

const rangeInput = document.getElementById('volume_range');
const rangeMusic = document.getElementById('music_range');
let resultRangeVolume = rangeInput.value / 10;
let musicRangeVolume = rangeMusic.value / 10;

let checkSounds = document.getElementById('sounds');

const brightRange = document.getElementById('bright_range');
let brightness = brightRange.value;

let theme = document.getElementById('theme'); 
let menu_back = document.getElementById('menu');

const difficutly = document.getElementById('difficutly');

const upgradeShop = document.getElementById('upgradeShop');
let upgradeConteiner = document.getElementById('upgradeShop-conteiner');
let upgradeBack = document.getElementById('upgrade-back');

play.addEventListener('click', () => {
    if (exit_ask.style.visibility === 'visible' )
    {
        exit_ask.style.visibility = 'hidden'; 
    }
    game_conteiner.style.display = 'block';
    menu_conteiner.style.display = 'none';
    Start();
});

let flag = 0;
body.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && flag === 0) {
        game_conteiner.style.display = 'block';
        menu_conteiner.style.display = 'none';
        Start();
        flag = 1;
    }
});


settings.addEventListener('click', () => {
    for(let i = 0; i < menu_buttons.length; i++)
    {
        menu_buttons[i].style.visibility = 'hidden';
    }
    settings_conteiner.style.visibility = 'visible';
});

back.addEventListener('click', () => {
    for(let i = 0; i < menu_buttons.length; i++)
    {
        menu_buttons[i].style.visibility = 'visible';
    }
    settings_conteiner.style.visibility = 'hidden';
});

rangeInput.addEventListener('input', () => {
    resultRangeVolume = rangeInput.value;
    if(resultRangeVolume % 1 === 0)
        {
            resultRangeVolume = rangeInput.value / 10;
        }
        else {
            resultRangeVolume = rangeInput.value;
        }
    hit1Audio.volume = resultRangeVolume;
});

rangeMusic.addEventListener('input', ()=>{
    musicRangeVolume = rangeMusic.value / 10;
    musicAudio.volume = musicRangeVolume;
});


checkSounds.addEventListener('change', () => {
    if (checkSounds.checked) {
        resultRangeVolume = rangeInput.value;
        rangeInput.disabled = false;
        if(resultRangeVolume % 1 === 0)
        {
            resultRangeVolume = rangeInput.value / 10;
        }
        else {
            resultRangeVolume = rangeInput.value;
        } 
    } else {
        resultRangeVolume = 0;
        rangeInput.disabled = true;
    }
});


brightRange.addEventListener('input', () => {
    brightness = brightRange.value;
    updateBrightness();
});

function updateBrightness() {
    document.body.style.filter = `brightness(${brightness}%)`;
}; 

theme.addEventListener('change', () => {
    if (theme.checked) {
        menu_back.style.backgroundColor = 'rgb(216, 216, 216)';
    for (let i = 0; menu_buttons.length;i++)
        {
            menu_buttons.style.backgroundColor = 'rgb(216, 216, 216)';
        }
    } else { 
        for (let i = 0; menu_buttons.length;i++)
        {
            menu_buttons.style.backgroundColor = 'black';
        }
        menu_back.style.backgroundColor = 'black';
    }
});

difficutly.addEventListener('change', () => {
    if(difficutly.checked) {
        Enemy_Damage = [ 20, 25, 30, 35, 40, 43, 46, 50, 60, 70];
        Enemy_HP = [ 200, 215, 225, 255, 300, 333, 450, 700, 950, 1500];
    } 
    else {
        Enemy_Damage = [ 10, 15, 20, 25, 30, 33, 36, 40, 50, 60];
        Enemy_HP = [ 100, 115, 125, 155, 200, 233, 350, 400, 650, 1000];
    }
})

upgradeShop.addEventListener('click', () => {
    upgradeConteiner.style.display = 'block';
    menu_back.style.display = 'none';
});
upgradeBack.addEventListener('click', () => {
    upgradeConteiner.style.display = 'none';
    menu_back.style.display = 'flex';
});


let exit = document.getElementById('open_menu');
let exit_ask = document.getElementById('exit_ask');
let exit_yes = document.getElementById('exit_yes');
let exit_cancel = document.getElementById('exit_cancel');

exit.addEventListener('click', () => {
    exit_ask.style.visibility = 'visible'; 
    exit_yes.addEventListener('click', () => {
        game_conteiner.style.display = 'none';
        menu_conteiner.style.display = 'block';

        const elementsToDelete = document.querySelectorAll('.img_enemy2'); 
            elementsToDelete.forEach((element) => {
            element.remove();
        }); 
    });
    exit_cancel.addEventListener('click', () => {
        exit_ask.style.visibility = 'hidden';
    });
    
});