let saves_conteiner = document.getElementById('saves-conteiner');
let saves = document.getElementById('saves');
saves_conteiner.style.display = 'none'

let saves_back = document.getElementById('saves-back');

let saves_blocks = document.getElementsByClassName('saves-block');

var chek_Save = [0,0,0];

//LOCAL
const storedArray = JSON.parse(localStorage.getItem('myArray'));
if (storedArray !== null) chek_Save = [...storedArray]; 

const localArr = ["save 1","save 2","save 3"];

//LOCAL
for (let j = 0; j < chek_Save.length; j++) {
    if (chek_Save[j] === 1) { 
        const lolchek = localStorage.getItem(localArr[j]);
        if (lolchek !== null) {
            saves_blocks[j].style.backgroundColor = 'rgb(99, 99, 99)'; 
            saves_blocks[j].innerHTML = localStorage.getItem(localArr[j]);
        }  
    }
}



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

        if (chek_Save[i] === 0) {
            chek_Save[i] = 1;
            localStorage.setItem('myArray', JSON.stringify(chek_Save));
            saves_blocks[i].style.backgroundColor = 'rgb(99, 99, 99)'; 
            saves_blocks[i].innerHTML = "Сохранение " + (i + 1) + "\n" + "Level: " + (Level + 1);
            localStorage.setItem(localArr[i], saves_blocks[i].innerHTML); 
        } 
        else {
            var choise = prompt("1 - Удалить сейв \n2 - Продолжить игру");
            if (choise === "1") {
                saves_blocks[i].style.backgroundColor = 'rgb(44, 44, 44)';
                saves_blocks[i].innerHTML = "";
                chek_Save[i] = 0;
                localStorage.removeItem(localArr[i]);
            }
            else if(choise === null) { }
            else {
                let divText = saves_blocks[i].innerHTML; 
                let lastChar = divText.charAt(divText.length - 1); 
                Level = lastChar - 1;
                menu.style.display = 'flex';
                saves_conteiner.style.display = 'none';
                if (exit_ask.style.visibility === 'visible') exit_ask.style.visibility = 'hidden';
                game_conteiner.style.display = 'block';
                menu_conteiner.style.display = 'none';
                Start();
            }
        }


        

        /*
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
        */
    })
}