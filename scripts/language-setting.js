const leftBtn_lng = document.getElementById('leftButton');
const upBtn_lng = document.getElementById('upButton');
const rightBtn_lng = document.getElementById('rightButton');
const downBtn_lng = document.getElementById('downButton');
const attackBtn_lng = document.getElementById('attackButton');
const menuBtn_lng = document.getElementById('menuBtn');

const mealsToSizeUp_lng = document.getElementById('meals-to-sizeup');

const menu_player_lng = document.getElementById('menu-player');
const menu_statistic_lng = document.getElementById('menu-statistic');
const menu_settings_lng = document.getElementById('menu-settings');
const menu_poison_lng = document.getElementById('menu-poison');
const menu_scales_lng = document.getElementById('menu-scales');

const upgrade_points_lng = document.getElementById('upgrade-points');

const apples_count_lng = document.getElementById('apples-count');
const mushrooms_count_lng = document.getElementById('mushrooms-count');
const insects_count_lng = document.getElementById('insects-count');

let lang = 'ru';

const enBtn = document.getElementById('engBtn');
const ruBtn = document.getElementById('ruBtn');

enBtn.addEventListener('click', (e) => {
    ruBtn.classList.remove('_selected');
    enBtn.classList.add('_selected');
    lang = 'en';
    displayText();
});
ruBtn.addEventListener('click', (e) => {
    ruBtn.classList.add('_selected');
    enBtn.classList.remove('_selected');
    lang = 'ru';
    displayText();
});

const langText = {
    'ru' : {
        'leftBtn' : 'влево',
        'upBtn' : 'вверх',
        'rightBtn' : 'вправо',
        'downBtn' : 'вниз',
        'attackBtn' : 'атака',
        'menuBtn' : 'Меню',
        'mealsToSizeUp' : 'Пища для роста',
        'menu_player' : 'Игрок',
        'menu_statistic' : 'Статистика',
        'menu_settings' : 'Настройки',
        'menu_poison' : 'Яд',
        'menu_scales' : 'Чешуя',
        'upgrade_points' : 'Текущие очки улучшения',
        'apples_count' : 'Всего яблок съедено',
        'mushrooms_count' : 'Всего грибов съедено',
        'insects_count' : 'Всего насекомых съедено'
    },
    'en' : {
        'leftBtn' : 'left',
        'upBtn' : 'up',
        'rightBtn' : 'right',
        'downBtn' : 'down',
        'attackBtn' : 'attack',
        'menuBtn' : 'Menu',
        'mealsToSizeUp' : 'Meals to size up',
        'menu_player' : 'Player',
        'menu_statistic' : 'Statistic',
        'menu_settings' : 'Settings',
        'menu_poison' : 'Poison',
        'menu_scales' : 'Scales',
        'upgrade_points' : 'Current upgrade points',
        'apples_count' : 'Total apples eaten',
        'mushrooms_count' : 'Total mushrooms eaten',
        'insects_count' : 'Total insects eaten'
    }
}

function displayText() {
    leftBtn_lng.innerText = langText[lang]['leftBtn'];
    upBtn_lng.innerText = langText[lang]['upBtn'];
    rightBtn_lng.innerText = langText[lang]['rightBtn'];
    downBtn_lng.innerText = langText[lang]['downBtn'];
    attackBtn_lng.innerText = langText[lang]['attackBtn'];
    menuBtn_lng.innerText = langText[lang]['menuBtn'];
    mealsToSizeUp_lng.innerText = langText[lang]['mealsToSizeUp'];
    menu_player_lng.innerText = langText[lang]['menu_player'];
    menu_statistic_lng.innerText = langText[lang]['menu_statistic'];
    menu_settings_lng.innerText = langText[lang]['menu_settings'];
    menu_poison_lng.innerText = langText[lang]['menu_poison'];
    menu_scales_lng.innerText = langText[lang]['menu_scales'];
    upgrade_points_lng.innerText = langText[lang]['upgrade_points'];
    apples_count_lng.innerText = langText[lang]['apples_count'];
    mushrooms_count_lng.innerText = langText[lang]['mushrooms_count'];
    insects_count_lng.innerText = langText[lang]['insects_count'];
}

document.addEventListener("DOMContentLoaded", displayText);