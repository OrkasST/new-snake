function updateMealsAvailable() {
    if (!food.mushroom.available && sizeUps >= 2) {
      food.mushroom.available = true;
      ateMushroom = true;
    }
    if (!insects.ant.available && sizeUps >= 5) {
      insects.ant.available = true;
      insects.ant.eaten = true;
      updateInsectName();
    }
    if (!insects.bigAnt.available && sizeUps >= 7) {
      insects.bigAnt.available = true;
      insects.bigAnt.eaten = true;
      updateInsectName();
    }
    if (!insects.bigHeavyAnt.available && sizeUps >= 9) {
      insects.bigHeavyAnt.available = true;
      insects.bigHeavyAnt.eaten = true;
      updateInsectName();
    }
  }