;function startCounter() {
    let movementText;
    movement++;
    movementText = movement;
    
    if (movement > levels[levelActual].movementMax) {
        gameOver();
        return;
    }
    
    if(movement < 10) {
        movementText = "0" + movement;
    }
    document.querySelector("#mov").innerText = movementText;
}


function maxCounter() {
    let movementMaxText = levels[levelActual].movementMax;
    if(movementMaxText < 10) {
        movementMaxText = "0" + movementMaxText;
    }
    document.querySelector("#mov-total").innerText = movementMaxText;
}