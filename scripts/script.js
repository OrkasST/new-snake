const Cnv = document.getElementById("fCanv");
const ctx = Cnv.getContext("2d");
let width = 600,
height = 600;
let toolBar = 50;
Cnv.width = width;
Cnv.height = height + toolBar;

const buttons = document.querySelectorAll('.button');

//food
const SCORE = document.getElementById('score');
const MUSHROOM_SCORE = document.getElementById('mushroomScore');
const INSECTS_SCORE = document.getElementById('insectsScore');
const currentApplesEatenAmmount = document.getElementById('currentApplesEatenAmmount');
const applesToSizeUpAmmount = document.getElementById('applesToSizeUpAmmount');

//images
const apple_img = new Image();
apple_img.src = 'images/apple.png';

const mushroom_img = new Image();
mushroom_img.src = 'images/mushroom.png';

const ant_img = new Image();
ant_img.src = 'images/ant.png';

const bigAnt_img = new Image();
bigAnt_img.src = 'images/big-ant.png';

const player_head = new Image();
player_head.src = 'images/snake-head.png';

const player_body = new Image();
player_body.src = 'images/snake-body.png';

const player_tail = new Image();
player_tail.src = 'images/snake-tail.png';
	
let loop;
let intervalSpeed = 300;
let countdown = 5;
let attacking = false;
	
let player = [{
  x: 20,
  y: 20,
  size: 20,
  direction: 'left'
}];
let direction = 'left';
let lastDirection;
let speed = player[0].size;

let ateApple = true;
let ateMushroom = false;
let inBattle = false;
let insectName = '';
let insectExists = false;
let enemyHealth;
let injured = false;

let food = {
  apple : {
    x: 0,
    y: 80,
    size: 20,
    available: true
  },
  mushroom : {
    x: 0,
    y: 0,
    size: 18,
    available: false
  }
}

let insects = {
  ant: {
    x: 0,
    y: 0,
    width: 20,
    height: 40,
    //color:  '#00131C',
    image: ant_img,
    health: 3,
    attack: 1,
    armor: 0,
    available: false,
    eaten: false
  },
  bigAnt: {
    x: 0,
    y: 0,
    width: 40,
    height: 80,
    //color:  '#00131C',
    image: bigAnt_img,
    health: 6,
    attack: 3,
    armor: 1,
    available: false,
    eaten: false
  },
  bigHeavyAnt: {
    x: 0,
    y: 0,
    width: 40,
    height: 80,
    //color:  '#00131C',
    image: bigAnt_img,
    health: 15,
    attack: 12,
    armor: 5,
    available: false,
    eaten: false
  }
}

let score = 0;
let mushroom_score = 0;
let insects_score = 0;

let currentApplesEaten = 0;
let applesToSizeUp = 2;
sizeUpAvailable = false;
let points = 0;
let sizeUps = 0;

let poison = 1;
let scales = 1;
let health = 8 + player.length - 1;
let currentHealth = health;

document.addEventListener("DOMContentLoaded", () => {
  displayMenu(ctx, Cnv);
});

function game() {
  update();
  render();
}

function start() {
  loop = setInterval(game, intervalSpeed);
}

function render() {
  ctx.clearRect(0, 0, width, height + toolBar);
  drawPlayer();
  drawToolBar();
  drawApple();
  if (food.mushroom.available) drawMushroom();
  if (insects.hasOwnProperty(insectName) && insects[insectName].available) drawInsect(insectName);
}

function update() {
  updatePlayerPosition();
  playerCollisionCheck();
  updateScore();
  updateHealth();
  updateMealsAvailable();
  if (ateApple) createApple();
  if (ateMushroom) createMushroom();
  if (!insectExists && insectName != '') updateInsectName();
  if (insects.hasOwnProperty(insectName) && insects[insectName].eaten) createInsect(insectName);
		
		if (attacking) attackCountdown();
  }
  
  
function drawPlayer() {
  let image;
  let dirInd;
  player.forEach((el, i, pl) => {
    ctx.beginPath();
    let rotInd = 0; 
    if (i == 0) {
      image = player_head;
    } else if (i < player.length-1){
      image = player_body;
    } else {
      image = player_tail;
    }
    if (el.direction === 'up') {
      dirInd = 0;
      if (player.length > 1 && player[i-1] && player[i - 1].direction === 'right') rotInd = 1;
      else if (player.length > 1 && player[i-1] && player[i - 1].direction === 'left') rotInd = 2;

    } else if (el.direction === 'right') {
      dirInd = 1;
      if (player.length > 1 && player[i-1] && player[i - 1].direction === 'down') rotInd = 1;
      else if (player.length > 1 && player[i-1] && player[i - 1].direction === 'up') rotInd = 2;

    } else if (el.direction === 'left') {
      dirInd = 2;
      if (player.length > 1 && player[i-1] && player[i - 1].direction === 'down') rotInd = 1;
      else if (player.length > 1 && player[i-1] && player[i - 1].direction === 'up') rotInd = 2;

    } else if (el.direction === 'down') {
      dirInd = 3;
      if (player.length > 1 && player[i-1] && player[i - 1].direction === 'right') rotInd = 1;
      else if (player.length > 1 && player[i-1] && player[i - 1].direction === 'left') rotInd = 2;
    }
    //console.log((player[i-1] && player[i-1].direction) || (player[i] && (player[i] + 'head')));
    ctx.drawImage(image, dirInd * el.size, rotInd * el.size, el.size, el.size, el.x, el.y, el.size, el.size);
    ctx.closePath();
  });
}

function updatePlayerPosition() { 
  let head = player[0];
  let x = head.x, y = head.y;
  
  if (direction == 'left') x -= speed;
  else if (direction == 'right') x += speed;
  else if (direction == 'up') y -= speed;
  else if (direction == 'down') y += speed;
  if (direction != 'stand') {
    player.unshift({
      x: x,
      y: y,
      size: head.size,
      direction: direction
    });
  }
  player.forEach(el => {
    if (el.x + el.size <= 0) el.x = width - el.size;
    if (el.x >= width) el.x = 0;
    if (el.y + el.size <= 0) el.y = height - el.size;
    if (el.y >= height) el.y = 0;
  });
  //console.log(player[0]);
}

function playerCollisionCheck() {
  if (player[0].x == food.apple.x && player[0].y == food.apple.y) {
    ateApple = true;
    score++;
    currentApplesEaten++;
    if (injured) {
      currentHealth++;
    }
    sizeUpCheck();
    if (!sizeUpAvailable) {
      player.pop();
    } else {
      sizeUpAvailable = false;
    }
  } else if (player[0].x == food.mushroom.x && player[0].y == food.mushroom.y && sizeUps >= 2) {
    ateMushroom = true;
    mushroom_score++;
    currentApplesEaten += 2;
    if (injured) {
      currentHealth += 2;
    }
    sizeUpCheck();
    if (!sizeUpAvailable) {
      player.pop();
    } else {
      sizeUpAvailable = false;
    }
  } else if ((insects.hasOwnProperty(insectName)) &&
    ((player[0].y >= insects[insectName].y) &&
      (player[0].y <= insects[insectName].y + (insects[insectName].height-player[0].size)))&&
    ((player[0].x >= insects[insectName].x) &&
    ((player[0].x <= insects[insectName].x + (insects[insectName].width - player[0].size)))
    )) {
    if (battleCheck(insectName)) {
      insects_score++;
      currentApplesEaten += insects[insectName].health;
      if (injured) {
        currentHealth += insects[insectName].health;
      }
      insectExists = false;
      insects[insectName].eaten = true;
      sizeUpCheck();
      if (!sizeUpAvailable) {
        player.pop();
      } else {
        sizeUpAvailable = false;
      }
    } else {
      player.pop();
    }
  } else if (direction != 'stand') {
    player.pop();
  }
  // player.pop();
}

function drawToolBar() {
  ctx.beginPath();
  ctx.moveTo(0, height);
  ctx.lineTo(width, height);
  ctx.strokeStyle = "#000000";
  ctx.stroke();
  ctx.closePath();
  drawPlayerHealth();
}

function drawPlayerHealth() {
  ctx.beginPath();
  ctx.fillStyle = '#FF0000';
  ctx.strokeStyle = '#000000';
  ctx.strokeRect(4, height + 14, 4 * health +1, 11);
  ctx.fillRect(5, height + 15, 4 * currentHealth, 10);
  ctx.closePath();
}

function updateHealth() {
  health = 8 + player.length - 1;
  if (!injured) {
    currentHealth = health;
  } else {
    //currentHealth = currentHealth;
    if (currentHealth >= health) {
      injured = false;
      currentHealth = health;
    }
  }
//console.log('HU//currentHealth: ', currentHealth, typeof(currentHealth));
}

function battleCheck(enemy) {
  enemyHealth -= ((() => {
    let res = poison * 2 - insects[enemy].armor;
    return res < 0 ? 0 : res;
  })());
  // console.log('BCH1//currentHealth: ', currentHealth);
  // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  // console.log('insects[enemy].attak: ', insects[enemy].attack, typeof(insects[enemy].attack));
  // console.log('scales: ', scales, typeof(scales));
  // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  currentHealth -= ((() => {
    let res = insects[enemy].attack - (scales * 2);
    return res < 0 ? 0 : res;
  })());
  // console.log('BCH2//currentHealth: ', currentHealth);
  if (currentHealth < health) {
    injured = true;
  } 
  if (currentHealth <= 0) {
    currentApplesEaten = 0;
    player.splice(2);
    injured = false;
  }
  if (enemyHealth <= 0) {
    return true;
  } else {
    return false;
  }
}

function createApple() {
  food.apple.x = Math.floor(Math.random()*(width / food.apple.size)) * food.apple.size;
  food.apple.y = Math.floor(Math.random()*(height / food.apple.size)) * food.apple.size;
  
  player.forEach(el => { if (el.x == food.apple.x && el.y == food.apple.y) createApple(); });
  
  ateApple = false;
}

function drawApple() {
  ctx.drawImage(apple_img, food.apple.x, food.apple.y);
}

function createMushroom() {
  food.mushroom.x = Math.floor(Math.random()*(width / food.apple.size)) * food.apple.size;
  food.mushroom.y = Math.floor(Math.random()*(height / food.apple.size)) * food.apple.size;
  
  player.forEach(el => { if (el.x == food.mushroom.x && el.y == food.mushroom.y) createMushroom() });
  
  ateMushroom = false;
}  

function drawMushroom() {
  ctx.drawImage(mushroom_img, food.mushroom.x, food.mushroom.y);
}

function updateInsectName() {
  let names = [];
  for (let i in insects) {
    if (insects.hasOwnProperty(i) && insects[i].available) {
      names.push(i);
    }
  }

  insectName = names[Math.floor(Math.random() * names.length)];
  insectExists = true;
}

function createInsect(name) {
  insects[name].x = Math.floor(Math.random()*(width / apple.size)) * apple.size;
  insects[name].y = Math.floor(Math.random()*(height / apple.size)) * apple.size;
  
  player.forEach(el => { if (el.x == insects[name].x && el.y == insects[name].y) createInsect(name) });
  
  insects[name].eaten = false;
	enemyHealth = insects[name].health;
  }
  
  function drawInsect(name) {
    ctx.drawImage(insects[name].image, insects[name].x, insects[name].y);
		ctx.beginPath();
		ctx.strokeStyle = '#000000';
		ctx.fillStyle = enemyDanger(insects[name]);
		ctx.strokeRect(insects[name].x - 5, insects[name].y - 8, 3*insects[name].health+1, 5);
		ctx.fillRect(insects[name].x - 4, insects[name].y - 7, 3*enemyHealth, 3);
		ctx.closePath();
  }

  function enemyDanger(enemy) {
    if (enemy.attack - (scales * 2) >= health) {
      return '#17002F';
    } else if (enemy.attack - (scales * 2) >= health / 2) {
      return '#24004B';
    } else {
      return '#FF0000';
    }
  }

  document.addEventListener('click', (e) => {
    if (e.target == buttons[0] && direction != 'right') {
      direction = 'left';
    }    
    else if (e.target == buttons[1] && direction != 'down') {
      direction = 'up';
    }
    else if (e.target == buttons[2] && direction != 'up') {
      direction = 'down';
    }
    else if (e.target == buttons[3] && direction != 'left') {
      direction = 'right';
    } else if (e.target == buttons[4]) {
      attack();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code == 'KeyA' && direction != 'right') {
      direction = 'left';
    }    
    else if (e.code == 'KeyW' && direction != 'down') {
      direction = 'up';
    }
    else if (e.code == 'KeyS' && direction != 'up') {
      direction = 'down';
    }
    else if (e.code == 'KeyD' && direction != 'left') {
      direction = 'right';
    } else if (e.code == 'KeyE') {
      attack();
    }
  });

  function sizeUpCheck() {
    if (currentApplesEaten === applesToSizeUp) {
     sizeUpAvailable = true;
     currentApplesEaten = 0;
     applesToSizeUp = Math.floor(applesToSizeUp * 1.5);
     sizeUps++;
   } else if (currentApplesEaten > applesToSizeUp) {
     sizeUpAvailable = true;
     currentApplesEaten -= applesToSizeUp;
     applesToSizeUp = Math.floor(applesToSizeUp * 1.5);
     sizeUps++;
   }
 }

function attack() {
  clearInterval(loop);
  intervalSpeed = 50;
  loop = setInterval(game, intervalSpeed);
  attacking = true;
  //direction = 'stand';
}
function attackCountdown() {
  countdown--;
  if (countdown == 0) {
    clearInterval(loop);
    intervalSpeed = 300;
    loop = setInterval(game, intervalSpeed);
    countdown = 5;
    attacking = false;
  }
}

function updateScore() {
  SCORE.innerText = score;
  MUSHROOM_SCORE.innerText = mushroom_score;
  INSECTS_SCORE.innerText = insects_score;
  applesToSizeUpAmmount.innerText = applesToSizeUp;
  currentApplesEatenAmmount.innerText = currentApplesEaten;
}