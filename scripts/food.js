//render
function drawFood() {
    availableFood.forEach(el => {
        ctx.drawImage(food[el].image, food[el].x, food[el].y);
    });
}

//update
function updateFood() {
    availableFood.forEach(el => {
        if (food[el].eaten) {
            (function create() {
                food[el].x = Math.floor(Math.random()*(width / gridStep)) * gridStep;
                food[el].y = Math.floor(Math.random()*(height / gridStep)) * gridStep;
                player.forEach(part => { if (part.x === food[el].x && part.y === food[el].y)  create(); });
                availableFood.forEach( item => {
                    if (item.x === food[el].x && item.y === food[el].y) create();
                });
            })();
            food[el].eaten = false;
        }
    });
}

function isFoodEaten() {
    let res = false;
    availableFood.forEach( item => {
        if (player[0].x === food[item].x && player[0].y === food[item].y) {
            food[item].eaten = true;
            score += food[item].health;
            currentApplesEaten += food[item].health;
            if (injured) {
                currentHealth += food[item].health;
            }
            res = true;
            return
        }
    });
    return res;
}