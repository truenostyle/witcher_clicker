'use strict'
    var Pers_Damage = 1; 
    //LOCAL
    const Pers_DamageLocal = localStorage.getItem('Pers_Damage'); 
    if (Pers_DamageLocal !== null) Pers_Damage = parseInt(Pers_DamageLocal); 

    var Pers_HP = 100; 

    //localStorage.clear();

    let Enemy_ImageUrl = [
        './photo/enemies/dog.png',
        './photo/enemies/dog.png',
        './photo/enemies/dog.png',
        './photo/enemies/chydo.png',
        './photo/enemies/chydo.png',
        './photo/enemies/ghost.png',
        './photo/enemies/zombie.png',
        './photo/enemies/vinera.png',
        './photo/enemies/leshiy.png',
        './photo/enemies/golem.png'
        ];
    let Sword_ImageUrl = [
        './photo/items/dog.png',
        './photo/items/dog.png',
        './photo/items/dog.png',
        './photo/items/chydo.png',
        './photo/items/chydo.png',
        './photo/items/ghost.png',
        './photo/items/zombie.png',
        './photo/items/vinera.png',
        './photo/items/leshiy.png',
        './photo/items/golem.png'
        ];   
    let Level_ImageUrl = [
        './photo/background/Level 1.jpg',
        './photo/background/Level 2.jpg',
        './photo/background/Level 3.png',
        './photo/background/Level 4.jpg',
        './photo/background/Level 5.jpg',
        './photo/background/Level 6.jpg',
        './photo/background/Level 7.jpg',
        './photo/background/Level 8.jpg',
        './photo/background/Level 9.jpg',
        './photo/background/Level 10.jpg'
        ];
    let Level_Text = [
        "Level 1 - easy, dogs have 100HP",
        "Level 2 - easy too, dogs have 115HP",
        "Level 3 - easy again, dogs have 125HP",
        "Level 4 - midle, chydo have 155HP",
        "Level 5 - midle too, chydo have 200HP",
        "Level 6 - hard, ghosts have 233HP",
        "Level 7 - hard too, zombies have 350HP",
        "Level 8 - hard again, vineras have 400HP",
        "Level 9 - death, leshiy has 650HP",
        "Level 10 - death 100%, golem has 1000HP"
        ];

    let Enemy_Damage = [ 10, 15, 20, 25, 30, 33, 36, 40, 50, 60];
    let Enemy_HP = [ 100, 115, 125, 155, 200, 233, 350, 400, 650, 1000];
    let Enemy_Spavn = [ 5, 7, 10, 5, 7, 4, 5, 3, 2, 1];
    let Level_balance = [ 100, 100, 100, 150, 150, 200, 200, 200, 200, 1000];

    var Level = 0;
    var CountEnemyDie = 0;


    class Enemy {
    constructor() {
    this.health = Enemy_HP[Level];
    this.damage = Enemy_Damage[Level]; 
    this.element = document.createElement('div');
    this.element.classList.add('img_enemy2');

    this.element.style.position = 'absolute';
    this.element.style.top = this.randomPosition(0, window.innerHeight - 150) + 'px';
    this.element.style.left = this.randomPosition(0, window.innerWidth - 150) + 'px';
    document.body.appendChild(this.element);

    const img = document.createElement('img');
    img.src = Enemy_ImageUrl[Level];
    img.style.width = '180px';
    img.style.height = '180px';

    this.element.appendChild(img);   

    this.progressBar = document.createElement('div');  
    this.progressBar.classList.add('progress-bar');
    this.progressBar.innerText = this.health + '%';
    this.element.appendChild(this.progressBar);
    this.element.addEventListener('click', () => {
        
    this.health -= Pers_Damage;
    const percentage = this.health + '%';
    this.progressBar.style.width = ((this.health / Enemy_HP[Level]) * 100);
    this.progressBar.innerText = percentage;
    this.enemyActions();
    const hitSound = new Audio('./sounds/sword-hit-2.mp3');
    hitSound.volume = resultRangeVolume;
    hitSound.play();


    let randomNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1; 
    if (randomNum === 3) {
        Pers_HP -= Enemy_Damage[Level];  
        Pers_damage(Pers_HP) ;
    }

    if (this.health <= 0) { 
        this.element.remove();
        CountEnemyDie++;
        check_Level();
    } 
    });
}

enemyActions() {
    let intervalId;
    let x = 0;

    intervalId = setInterval(() => {
        x = x + ((Math.random() * 0.4) + 0.1);
        let y = Math.sin(x) * 10;
        this.element.style.transform = "translate(" + y + "px, " + y + "px)";
        if (x >= 3) {
            clearInterval(intervalId);
            this.element.style.transform = "none";
        }
    }, 20);
}

randomPosition(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    const otherEnemies = document.querySelectorAll('.enemy');
    let overlap = false;
    for (let enemy of otherEnemies) {
    const x1 = num;
    const y1 = num;
    const x2 = parseInt(enemy.style.top);
    const y2 = parseInt(enemy.style.left);
    const distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    if (distance < 50) {
        overlap = true;
        break;
    }
    }
    if (overlap) {
        return this.randomPosition(min, max);
    } else {
        return num;
    }
}
}


let enemies = [];

//START
function Start() {
    for (let i = 0; i < Enemy_Spavn[Level]; i++) {
        const enemy = new Enemy();
        enemies.push(enemy);
    }
    startTimer()
    creating_items();
    alert(Level_Text[Level]);

    Pers_HP = 100; 
    var elem = document.getElementById("myBar");    
    elem.style.width = Pers_HP + '%'; 
    elem.innerHTML = Pers_HP * 1  + '%'; 
}  

function Pers_damage(hp) {
    if (hp <= 0) 
    {
        hp = 100;
        Pers_HP = 100;
        alert(lvl_time.join("\n"));
        alert("game over"); 
        const elementsToDelete = document.querySelectorAll('.img_enemy2'); 
            elementsToDelete.forEach((element) => {
            element.remove();
        });
        const elementsToDelete2 = document.querySelectorAll('.img_enemy3'); 
            elementsToDelete2.forEach((element) => {
            element.remove();
        });
        Level = 0;
        game_conteiner.style.display = 'none';
        menu_conteiner.style.display = 'block';
    }
    
    var elem = document.getElementById("myBar");    
    elem.style.width = hp + '%'; 
    elem.innerHTML = hp * 1  + '%';   
}  


function check_Level() {
    if (Level === 9) alert(lvl_time.join("\n"));  
    {
        if (Level === 9)
        {
            alert(lvl_time.join("\n"));
            Level = 0;
            game_conteiner.style.display = 'none';
            menu_conteiner.style.display = 'block';
        } 
        if (CountEnemyDie === Enemy_Spavn[Level]) {
            Level++;
            CountEnemyDie = 0;
            var backgroundImg = document.getElementById("body");  
            backgroundImg.style.backgroundImage = "url('" + Level_ImageUrl[Level] + "')";
            balance += Level_balance[Level]; 
            localStorage.setItem('balance', balance);
            balance_field.innerHTML = balance + "💰";
            stopTimer();
            Start();
        }
    } 
}



//Статистика 
let lvl_time = [];

let seconds = 0;
let minutes = 0;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    let result_to_push = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    lvl_time.push("Level " + Level + " - " + result_to_push);
    seconds = 0;
    minutes = 0;
}