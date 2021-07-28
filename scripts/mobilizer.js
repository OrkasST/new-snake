const info = document.querySelector('.info');
const navig = document.querySelector('.navig');
const controls = document.querySelector('.buttons');

function mobilize() {
    if (window.innerWidth < 700) {
        console.log('< 700');
        Cnv.classList.add('_mobi');
        menuBtn.classList.add('_mobi');
        info.classList.add('_mobi');
        upgradeList.classList.add('_mobi');
        navig.classList.add('_mobi');
        controls.classList.remove('_hidden');

    } else if (window.innerWidth < 850) {
        console.log('< 850');
        controls.classList.remove('_hidden');

    } else if (window.innerWidth > 850 && window.innerWidth < 1300) {
        console.log('> 850');
        controls.classList.add('_hidden');

    } else if (window.innerWidth < 1350) {
        console.log('< 1350');
        info.classList.add('_mobi');
        
    } else if (window.innerWidth > 1350) {
        console.log('> 1350');
        Cnv.classList.remove('_mobi');
        menuBtn.classList.remove('_mobi');
        info.classList.remove('_mobi');
        upgradeList.classList.remove('_mobi');
        navig.classList.remove('_mobi');
        controls.classList.add('_hidden');
    }
}

//document.addEventListener('DOMContentLoaded', mobilize);

window.addEventListener('resize', () => {
    mobilize();
});