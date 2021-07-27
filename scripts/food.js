//render

//update
function updateFood() {
    availableFood.forEach(el => {
        if (food[el].eaten) {
            food.apple.x = Math.floor(Math.random()*(width / food.apple.size)) * food.apple.size;
            food.apple.y = Math.floor(Math.random()*(height / food.apple.size)) * food.apple.size;
        }
    });
}


//   food.apple.x = Math.floor(Math.random()*(width / food.apple.size)) * food.apple.size;
//   food.apple.y = Math.floor(Math.random()*(height / food.apple.size)) * food.apple.size;
  
//   player.forEach(el => { if (el.x == food.apple.x && el.y == food.apple.y) createApple(); });
  
//   ateApple = false;