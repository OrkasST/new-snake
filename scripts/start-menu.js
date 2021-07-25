let startMenu = {
    startBtn: {
        x: 50,
        y: 50,
        width: 200,
        height: 200
    }
}

function displayMenu() {
    for(let i in startMenu) {
        if (startMenu.hasOwnProperty(i)) {
            ctx.beginPath();
            ctx.fillRect(i.x, i.y, i.width, i.height);
            ctx.closePath();
        }
    }
}


//document.addEventListener("DOMContentLoaded", displayMenu);