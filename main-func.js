function getComputerChoice() {
    let rand = Math.floor(Math.random() * (3-1+1)) + 1;
    if(rand == 1){
        return 'rock';
    } else if(rand == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        return "You lose! paper beats rock!";

    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return "You win!";

    } else if (playerSelection == 'rock' && computerSelection == 'rock'){
        return "Draw!";
        
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        return "You win!";
        
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return "You lose!";
        
    } else if (playerSelection == 'paper' && computerSelection == 'paper'){
        return "Draw!";
        
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return "You lose!";
        
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return "You lose!";
        
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        return "Draw!";
        
    } else {
        return "Something is wrong!"
    }
}

function getPlayerChoice() {
    let playerSelect = prompt("Enter your choice (rock/paper/scissors):");
    playerSelect = playerSelect.toLowerCase();
    let loop = new Boolean(true);

    while(loop){
        if(playerSelect == 'rock' || playerSelect == 'paper' || playerSelect == 'scissors') {
            loop = false;
            return playerSelect;
        }
        playerSelect = prompt("ERROR! Enter again your choice (rock/paper/scissors):");
        playerSelect = playerSelect.toLowerCase();
    }

}

function game(){
    let player;
    let computer;

    for(let i = 0; i < 5; i++) {
        player = getPlayerChoice();
        computer = getComputerChoice();
        console.log("Player: " + player);
        console.log("Computer: " + computer);
        console.log(playRound(player, computer));
    }

}