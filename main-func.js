
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

let player_counter = 0;
let ai_counter = 0;

function getPlayerChoiceClick() {

    const rps_button = document.querySelectorAll('[data-element-id="1"]');
    let whatIsMarked = "";

    for (let i = 0; i<rps_button.length; i++) {
        rps_button[i].addEventListener('click', function(e) {

            for (let j = 0; j<rps_button.length; j++) {
                rps_button[j].classList.remove('marked');
            }
            
            rps_button[i].classList.add('marked');
            
        });
    }
}

function show_ai_choice(img_container2, img2) {

    let ai_choice = Math.floor(Math.random() * (3 - 0) + 0);

    if(ai_choice == 0) {
        img2.srcset = "./images/rock2.png"
        img_container2.append(img2);
    } else if(ai_choice == 1){
        img2.srcset = "./images/paper2.png"
        img_container2.append(img2);
    } else if(ai_choice == 2){
        img2.srcset = "./images/scissors2.png"
        img_container2.append(img2);
    }
    return ai_choice;
}

function show_player_choice() {
    const buttons = document.querySelectorAll('[data-element-id="1"]');

    const img_container1 = document.querySelector('[data-key="1"]');
    const img_container2 = document.querySelector('[data-key="2"]');

    const img = document.createElement('img');
    img.width = "200";

    const img2 = document.createElement('img');
    img2.width = "200";

    let ai_choice;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(e) {
            if(i == 0) {
                img.srcset = "./images/rock2.png"
                img_container1.append(img);
            } else if(i == 1) {
                img.srcset = "./images/paper2.png"
                img_container1.append(img);
            } else if(i == 2) {
                img.srcset = "./images/scissors2.png"
                img_container1.append(img);
            }
            ai_choice = show_ai_choice(img_container2, img2);
            let whoWin = playRound(i, ai_choice);

            if(whoWin == 0) {
                ai_counter++;
            } else if(whoWin == 1) {
                player_counter++;
            }
            update_score();
        });
    }  
}

function update_score() {
    const score = document.querySelector('[data-key="3"]');
    score.innerHTML = `${player_counter}:${ai_counter}`;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == 0 && computerSelection == 1){
        return 0;
    } else if (playerSelection == 0 && computerSelection == 2){
        return 1;

    } else if (playerSelection == 0 && computerSelection == 0){
        return 0;
        
    } else if (playerSelection == 1 && computerSelection == 0){
        return 1;
        
    } else if (playerSelection == 1 && computerSelection == 2){
        return 0;
        
    } else if (playerSelection == 1 && computerSelection == 1){
        return 0;
        
    } else if (playerSelection == 2 && computerSelection == 0){
        return 0;
        
    } else if (playerSelection == 2 && computerSelection == 1){
        return 1;
        
    } else if (playerSelection == 2 && computerSelection == 2){
        return 0;
    } else {
        return 2;
    }
}