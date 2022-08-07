var result = "";

function getPlayerChoice(){
    const player_choices = document.querySelectorAll('.player_choice');
    player_choices.forEach(player_choice => player_choice.addEventListener('click', (e)=>{
        result = e.target.id;  
    }))
}

getPlayerChoice();