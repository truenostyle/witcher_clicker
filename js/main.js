'use strict'
    var Pers_Damage = 10; 
    var Pers_HP_Start = 100;
    var Pers_HP_Up = 0;

    var Pers_HP = Pers_HP_Start + Pers_HP_Up; 


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

    // Добавляем изображение в div
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
    console.log(hitSound.volume);
    hitSound.play();


    let randomNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1; 
    if (randomNum === 3 || randomNum === 6) {
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
    alert(Level_Text[Level]);
}  

function Pers_damage(hp) {
    if (hp <= 0) 
    {
        hp = 100;
        Pers_HP = 100;
        alert("game over");
        /*
        elem2.style.visibility = "visible";
        elem21.style.visibility = "visible";
        elem22.style.visibility = "visible";
        chydo1.width = 100;
        chydo2.width = 100;
        dog1.width = 100;*/
    }
    
    var elem = document.getElementById("myBar");    
    elem.style.width = hp + '%'; 
    elem.innerHTML = hp * 1  + '%';  
    //localStorage.setItem('pers.hp', pers.hp); 
}  


function check_Level()
{
    if (CountEnemyDie === Enemy_Spavn[Level]) {
        Level++;
        CountEnemyDie = 0;
        var backgroundImg = document.getElementById("body");  
        backgroundImg.style.backgroundImage = "url('" + Level_ImageUrl[Level] + "')";
        Start();
    }
} 









/*

class FactoryEnemys {  
    static create(type) {  
        switch (type) {
            case "chydo": return new Create_chydo();
                break;
            case "dog": return new Create_dog();
                break;
            default: console.log("Error");
                break;
        }  
    }
} 

class Create_pers {
    constructor() {
        if (localStorage.getItem('pers.hp') !== null) {
            this.hp = localStorage.getItem('pers.hp');
            }
        else this.hp = 100;
        this.damage = 10; 
    } 
}

class Create_chydo {
    constructor() {
        this.hp = 100;
        this.width = 100; 
        this.damage = 15;
    } 
}

class Create_dog {
    constructor() {
        this.hp = 200;
        this.width = 100; 
        this.damage = 25;
    }
}

var pers = new Create_pers();
var chydo1 = FactoryEnemys.create("chydo");
var chydo2 = FactoryEnemys.create("chydo"); 
var dog1 = FactoryEnemys.create("dog");


var elem2 = document.getElementById("chydo1"); 
var elem21 = document.getElementById("chydo2"); 
var elem22 = document.getElementById("dog1");  

function fight_chydo() {
    if (localStorage.getItem('chydo1') !== null) chydo1.width = localStorage.getItem('chydo1');
    var elem = document.getElementById("Chydo_Bar");    
    var proc = (100 * pers.damage) / chydo1.hp; 
    chydo1.width -= proc;
    elem.style.width = chydo1.width + '%'; 
    elem.innerHTML = chydo1.width * 1  + '%';  
    localStorage.setItem('chydo1.width', chydo1.width); 
    if (chydo1.width <= 0) {   
        elem2.style.visibility = "hidden"; 
    }
    hit_Pers(chydo1.damage);
    checkLVL();
}

function fight_chydo2() {
    if (localStorage.getItem('chydo2') !== null) chydo2.width = localStorage.getItem('chydo2');

    var elem = document.getElementById("Chydo_Bar2");    
    var proc = (100 * pers.damage) / chydo2.hp; 
    chydo2.width -= proc;
    elem.style.width = chydo2.width + '%'; 
    elem.innerHTML = chydo2.width * 1  + '%';  
    localStorage.setItem('chydo2.width', chydo2.width); 
    if (chydo2.width <= 0) { 
        elem21.style.visibility = "hidden"; 
    }
    hit_Pers(chydo2.damage); 
    checkLVL();
}

function fight_dog() {
    if (localStorage.getItem('dog1') !== null) dog1.width = localStorage.getItem('dog1');
    var elem = document.getElementById("Dog_Bar");    
    var proc = (100 * pers.damage) / dog1.hp; 
    dog1.width -= proc;
    elem.style.width = dog1.width + '%'; 
    elem.innerHTML = dog1.width * 1  + '%';  
    localStorage.setItem('dog1.width', dog1.width);  
    if (dog1.width <= 0) {  
        elem22.style.visibility = "hidden";
    }
    hit_Pers(dog1.damage);
    checkLVL();
}

function hit_Pers(damage) {
    let randomNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1; 
    if (randomNum === 3 || randomNum === 6) {
        pers.hp -= damage;  
        Pers_damage(pers.hp) ;
    }
}

function Pers_damage(hp) {
    if (hp <= 0) 
    {
        hp = 100;
        pers.hp = 100;
        alert("game over");
        elem2.style.visibility = "visible";
        elem21.style.visibility = "visible";
        elem22.style.visibility = "visible";
        chydo1.width = 100;
        chydo2.width = 100;
        dog1.width = 100;
    }
    
    var elem = document.getElementById("myBar");    
    elem.style.width = hp + '%'; 
    elem.innerHTML = hp * 1  + '%';  
    localStorage.setItem('pers.hp', pers.hp); 
}   

let lvl = 1;
function checkLVL()
{
    if (chydo1.width <= 0 && chydo2.width <= 0 && dog1.width <= 0 && lvl === 1) {
        alert("lvl2");
        var body = document.getElementById("body"); 
        body.style.backgroundImage = "url('./photo/background/Level\ 2.jpg')";
        elem2.style.visibility = "visible";
        elem21.style.visibility = "visible";
        elem22.style.visibility = "visible";
        chydo1.width = 100;
        chydo2.width = 100;
        dog1.width = 100;
        lvl++;
    }
    if (chydo1.width <= 0 && chydo2.width <= 0 && dog1.width <= 0 && lvl === 2) {
        alert("lvl2");
        var body = document.getElementById("body"); 
        body.style.backgroundImage = "url('./photo/background/Level\ 3.png')";
        elem2.style.visibility = "visible";
        elem21.style.visibility = "visible";
        elem22.style.visibility = "visible";
        chydo1.width = 100;
        chydo2.width = 100;
        dog1.width = 100;
        lvl++;
    }
    
}*/