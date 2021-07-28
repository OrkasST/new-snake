const menuBtn = document.getElementById('menuBtn');
const upgradeList = document.querySelector('.upgrade_popUp');
const confirmUpgrade = document.querySelector('.confirm_upgrade');
const upgradePoints = document.getElementById('points');
const poisonLvl = document.getElementById('poison');
const plusPoisonLvl = document.getElementById('plus_poison');
const minusPoisonLvl = document.getElementById('minus_poison');
const scalesLvl = document.getElementById('scales');
const plusScalesLvl = document.getElementById('plus_scales');
const minusScalesLvl = document.getElementById('minus_scales');
const closeBtn = document.getElementById('closeBtn');

const list = document.querySelectorAll('.menu li');
const pages = document.querySelectorAll('.page');

let startPoison, startScales;

menuBtn.addEventListener('click', () => {
    lastDirection = direction;
    direction = 'stand';
    points = player.length - 1;
    startPoison = poison;
    startScales = scales;
    upgradeList.classList.remove('_hidden');
    upgradePoints.innerText = points;
});

confirmUpgrade.addEventListener('click', () => {
    player.splice(points + 1);
    startPoison = poison;
    startScales = scales;
    minusPoisonLvl.classList.add('_hidden');
    minusScalesLvl.classList.add('_hidden');
});

plusPoisonLvl.addEventListener('click', () => {
    if (points > 0) {
        points--;
        poison++;
        minusPoisonLvl.classList.remove('_hidden');
        upgradePoints.innerText = points;
        poisonLvl.innerText = poison;
    } else {
        alert('not enough points');
    }
});

plusScalesLvl.addEventListener('click', () => {
    if (points > 0) {
        points--;
        scales++;
        minusScalesLvl.classList.remove('_hidden');
        upgradePoints.innerText = points;
        scalesLvl.innerText = scales;
    } else {
        alert('not enough points');
    }
});

minusPoisonLvl.addEventListener('click', () => {
    poison--;
    points++;
    upgradePoints.innerText = points;
    poisonLvl.innerText = poison;
    if (poison === startPoison) minusPoisonLvl.classList.add('_hidden');
});
minusScalesLvl.addEventListener('click', () => {
    scales--;
    points++;
    upgradePoints.innerText = points;
    scalesLvl.innerText = scales;
    if (scales === startScales) minusScalesLvl.classList.add('_hidden');
});

list.forEach((el, i) => {
    el.addEventListener('click', (ev) => {
        list.forEach(btn => {
            btn.classList.remove('_pressed');
        });
        pages.forEach(page => {
            page.classList.add('_hidden');
        });
        ev.target.classList.add('_pressed');
        if (pages[i]) pages[i].classList.remove('_hidden');
    });
});

closeBtn.addEventListener('click', () => {
    upgradeList.classList.add('_hidden');
    direction = lastDirection;
});