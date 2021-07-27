const info = document.querySelector('.info');
const navig = document.querySelector('.navig');
const controls = document.querySelector('.buttons');

window.addEventListener('resize', () => {
    if (window.innerWidth < 700) {
        Cnv.classList.add('_mobi');
        menuBtn.classList.add('_mobi');
        info.classList.add('_mobi');
        upgradeList.classList.add('_mobi');
        navig.classList.add('_mobi');
        controls.classList.remove('_hidden');

    } else if (window.innerWidth > 850) {
        controls.classList.add('_hidden');

    } else if (window.innerWidth < 850) {
        controls.classList.remove('_hidden');

    } else if (window.innerWidth < 1350) {
        info.classList.add('_mobi');
        
    } else {
        Cnv.classList.remove('_mobi');
        menuBtn.classList.remove('_mobi');
        info.classList.remove('_mobi');
        upgradeList.classList.remove('_mobi');
        navig.classList.remove('_mobi');
        controls.classList.add('_hidden');
    }

});