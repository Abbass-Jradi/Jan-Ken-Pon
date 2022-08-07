var player = "";
var computer = "";
var round = 0;
var player_score = 0;
var ai_score = 0;

function getPlayerChoice(){
    const player_choices = document.querySelectorAll('.player_choice');
    player_choices.forEach(player_choice => player_choice.addEventListener('click', (e)=>{
        player = e.target.id;
        roundCount();
        generateComputerChoice();
        winner();
    }))
}

getPlayerChoice();

function generateComputerChoice(){
    const arr = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random()*(arr.length));
    computer = arr[index];
}

function winner(){
    const winner = document.querySelector('#winner');
    const your_score = document.querySelector('#player_score');
    const computer_score = document.querySelector('#ai_score');
    if((player === 'rock' && computer === 'scissors') ||
       (player === 'paper' && computer === 'rock') ||
       (player === 'scissors' && computer === 'paper'))
       {
        winner.innerHTML = 'Player';
        player_score += 1;
        your_score.innerHTML = player_score;
       }
    else if(player === computer){winner.innerHTML = 'It\'s a draw';}
    else {
        winner.innerHTML = 'AI';
        ai_score += 1;
        computer_score.innerHTML = ai_score;
    }
    
}

function roundCount(){
    const round_count = document.querySelector('#round_count');
    if(round === 5){
        round = 0;
    }
    round +=1;
    round_count.innerHTML = round;
}


