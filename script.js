const dice = document.querySelector('.dice');
const rollButton = document.querySelector('.roll');
const result = document.querySelector('.result');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const player3 = document.querySelector('.player3');
const player4 = document.querySelector('.player4');



const rollDice = () => {

    let index = Math.floor(Math.random() * Math.floor(4)) + 1;
    let playerActive;

    switch(index) {
        case 1: 
            playerActive = player1;
            break;
        
        case 2:
            playerActive = player2;
            break;

        case 3:
            playerActive = player3;
            break;

        case 4: 
            playerActive = player4;
            break;
    }

    let moveUp = false;

    for(let aCell of playerActive.children) {

        if(moveUp == true) {
            aCell.classList.add('active-p' + index);
            if(aCell.classList.contains('finish-line')) {
                alert('end');
                resetGame();
            }
            return;
        } else {
            if(aCell.classList.contains('active-p' + index)) {
                aCell.classList.remove('active-p' + index);
                moveUp = true;
            }
        }
    }

   

}

rollButton.addEventListener('click', rollDice);
