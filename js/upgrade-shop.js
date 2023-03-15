let balance = 1000;

//LOCAL
const balanceLocal = localStorage.getItem('balance'); 
if (balanceLocal !== null) balance = parseInt(balanceLocal); 

let Img_Sword = document.getElementById('img_sword');
const Img_SwordLocal = localStorage.getItem('Img_Sword'); 
if (Img_SwordLocal !== null) Img_Sword.src = Img_SwordLocal; 

let balance_field = document.getElementById('balance');

balance_field.innerHTML = balance + "💰";

let upgradesAll = document.querySelectorAll('.upgrades');
let upgradesBlocks = document.getElementsByClassName('upgrades');

let noMoney = document.getElementById('no_money');

let noMoney_ok = document.getElementById('noMoney_ok');




const upgrade_prices = []; 
const upgrade_damage = [];

upgradesAll.forEach(div => {
    const h2 = div.querySelector('h2'); 
    upgrade_prices.push(h2.textContent); 
});

upgradesAll.forEach(div => {
    const h3 = div.querySelector('h3'); 
    upgrade_damage.push(h3.textContent); 
});

const localArrIMG = ["save 1","save 2","save 3","save 4","save 5","save 6","save 7"];
let chek_sword = [0,0,0,0,0,0,0];
const chek_swordArray = JSON.parse(localStorage.getItem('chek_sword'));
if (chek_swordArray !== null) chek_sword = [...chek_swordArray]; 

for (let j = 0; j < chek_sword.length; j++) {
    if (chek_sword[j] === 1) { 
        const lolchek2 = localStorage.getItem(localArrIMG[j]);
        if (lolchek2 !== null) {
            upgradesBlocks[j].style.backgroundColor = localStorage.getItem(localArrIMG[j]);
        }  
    }
}


let last_sword = -1;




for(let i = 0; i <upgradesBlocks.length; i++)
{
    let price_amount = upgrade_prices[i].match(/\d+/)[0];
    let dmg_amount = upgrade_damage[i].match(/\d+/)[0];
    upgradesBlocks[i].addEventListener('click', () => {
    if (chek_sword[i] === 1) 
    {
        Img_Sword.src = upgradesBlocks[i].querySelector('.upgrades img').src;  
        localStorage.setItem('Img_Sword', upgradesBlocks[i].querySelector('.upgrades img').src);
        Pers_Damage = Number(dmg_amount);
        localStorage.setItem('Pers_Damage', Pers_Damage);
        upgradesBlocks[i].style.backgroundColor = 'rgb(255, 50, 50)';
        if (last_sword !== i) upgradesBlocks[last_sword].style.backgroundColor = 'rgb(99, 99, 99)'; 
        last_sword = i;
    }
    else if (price_amount > balance) noMoney.style.visibility = 'visible'; 
    else {     
        last_sword = i;
        Img_Sword.src = upgradesBlocks[i].querySelector('.upgrades img').src; 
        localStorage.setItem('Img_Sword', upgradesBlocks[i].querySelector('.upgrades img').src);
        upgradesBlocks[i].style.backgroundColor = 'rgb(255, 50, 50)';
        upgradesBlocks[last_sword].style.backgroundColor = 'rgb(99, 99, 99)'; 
        localStorage.setItem(localArrIMG[i], 'rgb(99, 99, 99)'); 
        balance = Number(balance) - Number(price_amount);
        balance_field.innerHTML = balance + "💰";
        localStorage.setItem('balance', balance);
        chek_sword[i]++;
        localStorage.setItem('chek_sword', JSON.stringify(chek_sword));
        Pers_Damage = Number(dmg_amount); 
        localStorage.setItem('Pers_Damage', Pers_Damage);
        }  
    }
    );
}

noMoney_ok.addEventListener('click', () => {
    noMoney.style.visibility = 'hidden';
});

