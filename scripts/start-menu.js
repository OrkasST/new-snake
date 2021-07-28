let startBtn = {
    box : {
        x: 50,
        y: 50,
        width: 200,
        height: 70,
        color: '#f2f316'
    },
    text : {
        x: 80,
        y: 89,
        content: 'START GAME',
        color: '#1d1d03'
    },
    border : {
        width: 2,
        color: '#474707'
    }
}

let inGame = false;

function displayMenu() {
    //box
    ctx.beginPath();
    ctx.fillStyle = startBtn.box.color;
    ctx.fillRect(startBtn.box.x, startBtn.box.y, startBtn.box.width, startBtn.box.height);
    ctx.closePath();
    //border
    ctx.beginPath();
    ctx.strokeStyle = startBtn.border.color;
    ctx.strokeRect(startBtn.box.x-1, startBtn.box.y-1, startBtn.box.width+1, startBtn.box.height+1);
    ctx.closePath();
    //text
    ctx.beginPath();
    ctx.fillStyle = startBtn.text.color;
    ctx.font = 'bold 20px TimesNewRoman';
    ctx.fillText(startBtn.text.content, startBtn.text.x, startBtn.text.y);
    ctx.closePath();
}

document.addEventListener('click', (e) => {
    if (!inGame &&
         e.target == Cnv &&
         e.offsetX >= startBtn.box.x &&
         e.offsetX <= startBtn.box.x + startBtn.box.width &&
         e.offsetY >= startBtn.box.y &&
         e.offsetY <= startBtn.box.y + startBtn.box.height) {
            
            inGame = true;
            start();
    }
});
