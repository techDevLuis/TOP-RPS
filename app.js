const choices = ["rock", "paper", "scissors"];


function computerPlay(){
    const rand = Math.floor(Math.random() * 3);

    return choices[rand];
}



function playRound(playerSelection, computerSelection){
    if(playerSelection === 'rock'){
       if(computerSelection === 'rock'){
           return 'tie'
       }
       else if(computerSelection === 'paper'){
        return 'lose'
    }
    else {
        return 'win'
    }
}
    if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            return 'win'
        }
        else if(computerSelection === 'paper'){
        return 'tie'
    }
    else {
        return 'lose'
    }
    }
    if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            return 'lose'
        }
        else if(computerSelection === 'paper'){
         return 'win'
     }
     else {
         return 'tie'
     }
 }

}

function game(){
    let playerWins = 0;
    let pcWins = 0;
    let tieGames =0;


    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Enter a value").toLowerCase();
        console.log(playerSelection);
        let computerSelection = computerPlay();
        if(playRound(playerSelection, computerSelection) === 'win'){
            playerWins++
        }
        else if(playRound(playerSelection, computerSelection) === 'lose'){
            pcWins++;
        }
        else if(playRound(playerSelection, computerSelection) === 'tie'){
            tieGames++;
        }
    }
    console.log(playerWins);
    console.log(pcWins);
    console.log(tieGames);

}
    game();
