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

let lang = 'en';

const enBtn = document.getElementById('engBtn');
const ruBtn = document.getElementById('ruBtn');

enBtn.addEventListener('click', (e) => {
    ruBtn.classList.remove('_selected');
    enBtn.classList.add('_selected');
    lang = 'en';
});
ruBtn.addEventListener('click', (e) => {
    ruBtn.classList.add('_selected');
    enBtn.classList.remove('_selected');
    lang = 'ru';
});

/*
leftBtn_lng
upBtn_lng
rightBtn_lng
downBtn_lng
attackBtn_lng
menuBtn_lng
mealsToSizeUp_lng
menu_player_lng
menu_statistic_lng
menu_settings_lng
menu_poison_lng
menu_scales_lng
upgrade_points_lng
apples_count_lng
mushrooms_count_lng
insects_count_lng

leftBtn
upBtn
rightBtn
downBtn
attackBtn
menuBtn
mealsToSizeUp
menu_player
menu_statistic
menu_settings
menu_poison
menu_scales
upgrade_points
apples_count
mushrooms_count
insects_count

'leftBtn' : '',
        'upBtn' : '',
        'rightBtn' : '',
        'downBtn' : '',
        'attackBtn' : '',
        'menuBtn' : '',
        'mealsToSizeUp' : '',
        'menu_player' : '',
        'menu_statistic' : '',
        'menu_settings' : '',
        'menu_poison' : '',
        'menu_scales' : '',
        'upgrade_points' : '',
        'apples_count' : '',
        'mushrooms_count' : '',
        'insects_count' : ''

.innerText = langText[lang][''];
*/

const langText = {
    'ru' : {
        'leftBtn' : '',
        'upBtn' : '',
        'rightBtn' : '',
        'downBtn' : '',
        'attackBtn' : '',
        'menuBtn' : '',
        'mealsToSizeUp' : '',
        'menu_player' : '',
        'menu_statistic' : '',
        'menu_settings' : '',
        'menu_poison' : '',
        'menu_scales' : '',
        'upgrade_points' : '',
        'apples_count' : '',
        'mushrooms_count' : '',
        'insects_count' : ''
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
    // displayText();