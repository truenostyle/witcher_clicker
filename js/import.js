'use strict'

let import1 = document.getElementById('import');
let export1 = document.getElementById('export');



let importText = "chek_Save ";

for (let i = 0; i < chek_Save.length; i++) importText += chek_Save[i] + ","; 
importText += ";";
for (let j = 0; j < localArr.length; j++) importText += localStorage.getItem(localArr[j]) + ",";
importText += ";"; 
importText += Img_SwordLocal; 
importText += ";"; 
importText += balanceLocal; 
importText += ";"; 




import1.addEventListener('click', () => {
    alert(importText);

    /*
    location.reload();
    setTimeout(() => {
        
    }, 100); // отложенный вызов функции alert на 100 миллисекунд
    */
});

export1.addEventListener('click', () => {
    let str = prompt("Введите текст import");

    const parts = str.split(';');  
    const [s1, s11, s111] = parts[0].substring(9).split(',');  
    const [s2, s22, s222] = parts[1].split(',');  
    const s3 = parts[2];  
    const s4 = parts[3];
    
    chek_Save[0] = parseInt(s1); 
    chek_Save[1] = parseInt(s11);
    chek_Save[2] = parseInt(s111);
    localStorage.setItem('myArray', JSON.stringify(chek_Save));

    for(let i = 0; i < chek_Save.length; i++)
    {
        if (chek_Save[i] === 0) {
            saves_blocks[i].style.backgroundColor = 'rgb(44, 44, 44)';
            saves_blocks[i].innerHTML = "";
            chek_Save[i] = 0;
            localStorage.removeItem(localArr[i]);
        }
    }

    localStorage.setItem(localArr[0], s2);
    localStorage.setItem(localArr[1], s22);
    localStorage.setItem(localArr[2], s222);

    for (let j = 0; j < chek_Save.length; j++) {
        if (chek_Save[j] === 1) { 
            const lolchek = localStorage.getItem(localArr[j]);
            if (lolchek !== null) {
                saves_blocks[j].style.backgroundColor = 'rgb(99, 99, 99)'; 
                saves_blocks[j].innerHTML = localStorage.getItem(localArr[j]);
            }  
        }
    }

    localStorage.setItem('Img_Sword', s3);
    localStorage.setItem('balance', s4); 
});
