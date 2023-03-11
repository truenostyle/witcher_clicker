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

play.addEventListener('click', () => {
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