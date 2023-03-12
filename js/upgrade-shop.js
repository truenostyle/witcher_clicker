let balance = 1000;

let balance_field = document.getElementById('balance');

balance_field.innerHTML = balance + "💰";

let upgradesAll = document.querySelectorAll('.upgrades');
let upgradesBlocks = document.getElementsByClassName('upgrades');

let noMoney = document.getElementById('no_money');

let noMoney_ok = document.getElementById('noMoney_ok');

let Img_Sword = document.getElementById('img_sword');


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


let chek_sword = [0,0,0,0,0,0,0];
let last_sword = -1;
for(let i = 0; i <upgradesBlocks.length; i++)
{
    let price_amount = upgrade_prices[i].match(/\d+/)[0];
    let dmg_amount = upgrade_damage[i].match(/\d+/)[0];
    upgradesBlocks[i].addEventListener('click', () => {
    if (chek_sword[i] === 1) 
    {
        Img_Sword.src = upgradesBlocks[i].querySelector('.upgrades img').src;  
        Pers_Damage = Number(dmg_amount);
        upgradesBlocks[i].style.backgroundColor = 'rgb(255, 50, 50)';
        if (last_sword !== i) upgradesBlocks[last_sword].style.backgroundColor = 'rgb(99, 99, 99)'; 
        last_sword = i;
    }
    else if (price_amount > balance) noMoney.style.visibility = 'visible'; 
    else {     
        last_sword = i;
        Img_Sword.src = upgradesBlocks[i].querySelector('.upgrades img').src; 
        upgradesBlocks[i].style.backgroundColor = 'rgb(255, 50, 50)';
        upgradesBlocks[last_sword].style.backgroundColor = 'rgb(99, 99, 99)'; 
        balance = Number(balance) - Number(price_amount);
        balance_field.innerHTML = balance + "💰";
        chek_sword[i]++;
        Pers_Damage = Number(dmg_amount); 
        }  
    }
    );
}

noMoney_ok.addEventListener('click', () => {
    noMoney.style.visibility = 'hidden';
});

