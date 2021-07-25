let startBtn = {
    x: 50,
    y: 50,
    width: 200,
    height: 200
}

function displayMenu() {
    ctx.beginPath();
    ctx.fillRect(startBtn.x, startBtn.y, startBtn.width, startBtn.height);
    ctx.closePath();
}


//document.addEventListener("DOMContentLoaded", displayMenu);