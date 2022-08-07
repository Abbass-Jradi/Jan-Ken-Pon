var player = "";
var computer = "";
var round = 0;
var player_score = 0;
var ai_score = 0;

function pick(e){
    player = e.target.id;
    roundCount();
    generateComputerChoice();
    winner();
}
function getPlayerChoice(){
    const player_choices = document.querySelectorAll('.player_choice');
    player_choices.forEach(player_choice => player_choice.addEventListener('click', pick))
}

getPlayerChoice();

function generateComputerChoice(){
    const arr = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random()*(arr.length));
    computer = arr[index];
}

function winner(){
    const round_winner = document.querySelector('#winner');
    const your_score = document.querySelector('#player_score');
    const computer_score = document.querySelector('#ai_score');
    const final_winner = document.querySelector('#final_winner');
    if((((player === 'rock' && computer === 'scissors') ||
       (player === 'paper' && computer === 'rock') ||
       (player === 'scissors' && computer === 'paper'))))
       {
        round_winner.innerHTML = 'Player';
        player_score += 1;
        your_score.innerHTML = player_score;
       }
    else if(player === computer){round_winner.innerHTML = 'It\'s a draw';}
    else {
        round_winner.innerHTML = 'AI';
        ai_score += 1;
        computer_score.innerHTML = ai_score;
    }
    if(round === 5){
        const player_choices = document.querySelectorAll('.player_choice');
        player_choices.forEach(player_choice => player_choice.removeEventListener('click',pick))
        final_winner.style.opacity='1';
        if(player_score > ai_score){final_winner.innerHTML = 'You Won!'}
        else if(ai_score > player_score){final_winner.innerHTML = 'You Lost!'}
        else{final_winner.innerHTML = 'It is a draw.'}
    }
}

function roundCount(){
    const round_count = document.querySelector('#round_count');
    const round_winner = document.querySelector('#winner');
    const your_score = document.querySelector('#player_score');
    const computer_score = document.querySelector('#ai_score');
    const final_winner = document.querySelector('#final_winner');
    const button = document.createElement('button');
    const left = document.querySelector('.left');
    
    if(round <5){
        round +=1;
    }
    
    if(round === 5){
        button.textContent = 'Play Again?';
        button.addEventListener('click',()=>{
            round = 0;
            player_score = 0;
            ai_score = 0;
            round_winner.textContent = " ";
            round_count.innerHTML = 0;
            your_score.innerHTML = 0;
            computer_score.innerHTML = 0;
            final_winner.innerHTML = "";
            getPlayerChoice();
            if(round === 0){left.removeChild(button);}
        })
        left.appendChild(button);
    }
    round_count.innerHTML = round;
}


