let balance = 300;

let balance_field = document.getElementById('balance');

balance_field.innerHTML = balance + "💰";

let upgradesAll = document.querySelectorAll('.upgrades');
let upgradesBlocks = document.getElementsByClassName('upgrades');

let noMoney = document.getElementById('no_money');

let noMoney_ok = document.getElementById('noMoney_ok');

let exit = document.getElementById('open_menu');
let exit_ask = document.getElementById('exit_ask');
let exit_yes = document.getElementById('exit_yes');
let exit_cancel = document.getElementById('exit_cancel');

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

for(let i = 0; i <upgradesBlocks.length; i++)
{
    let price_amount = upgrade_prices[i].match(/\d+/)[0];
    let dmg_amount = upgrade_damage[i].match(/\d+/)[0];
    upgradesBlocks[i].addEventListener('click', () => {
    if (price_amount > balance)
    {
        noMoney.style.visibility = 'visible';
    }
    else {
        upgradesBlocks[i].style.backgroundColor = 'rgb(99, 99, 99)';
        damage = Number(damage) + Number(dmg_amount);
        balance = Number(balance) - Number(price_amount);
        balance_field.innerHTML = balance + "💰";
    }  
     });
     
}

noMoney_ok.addEventListener('click', () => {
    noMoney.style.visibility = 'hidden';
});

exit.addEventListener('click', () => {
    exit_ask.style.visibility = 'visible';
    exit_yes.addEventListener('click', () => {
        game_conteiner.style.display = 'none';
        menu_conteiner.style.display = 'block';
    });
    exit_cancel.addEventListener('click', () => {
        exit_ask.style.visibility = 'hidden';
    });
    
});