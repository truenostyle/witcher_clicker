let saves_conteiner = document.getElementById('saves-conteiner');
let saves = document.getElementById('saves');
saves_conteiner.style.display = 'none'

let saves_back = document.getElementById('saves-back');

let saves_blocks = document.getElementsByClassName('saves-block');

saves.addEventListener('click', () => {
    menu.style.display = 'none';
    saves_conteiner.style.display = 'block';
});

saves_back.addEventListener('click', () => {
    menu.style.display = 'flex';
    saves_conteiner.style.display = 'none';
});

for(let i = 0; i < saves_blocks.length; i++)
{
    saves_blocks[i].addEventListener('click', () => {
        saves_blocks[i].style.backgroundColor = 'rgb(99, 99, 99)'; 
        if(i === 0)
        {
            saves_blocks[1].style.backgroundColor = 'rgb(44, 44, 44)';   
            saves_blocks[2].style.backgroundColor = 'rgb(44, 44, 44)';   
        }
        if(i === 1)
        {
            saves_blocks[0].style.backgroundColor = 'rgb(44, 44, 44)';   
            saves_blocks[2].style.backgroundColor = 'rgb(44, 44, 44)';   
        }
        if(i === 2)
        {
            saves_blocks[0].style.backgroundColor = 'rgb(44, 44, 44)';   
            saves_blocks[1].style.backgroundColor = 'rgb(44, 44, 44)';   
        }
    })
}
