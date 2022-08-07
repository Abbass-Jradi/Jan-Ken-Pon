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
    const final_winner = document.querySelector('#final_winner');
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
    if(round === 5){
        final_winner.style.opacity='1';
        if(player_score > ai_score){final_winner.innerHTML = 'You Won!'}
        else if(ai_score > player_score){final_winner.innerHTML = 'You Lost!'}
        else{final_winner.innerHTML = 'It is a draw.'}
    }
}

function roundCount(){
    const round_count = document.querySelector('#round_count');
    round +=1;
    if(round === 5){
        const button = document.createElement('button');
        const left = document.querySelector('.left');
        button.textContent = 'Play Again?';
        left.appendChild(button);
    }
    round_count.innerHTML = round;
}


