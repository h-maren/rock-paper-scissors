//function called getComputerChoice to randomly return string rock paper or scissors
//use random nnumber generator to pick value between 0,1,2, which each correspond to a string value
function getComputerChoice(){
    let computerNumber=Math.floor(Math.random()*3);
    //console.log(computerNumber);
    //let computerChoice="";
    switch(computerNumber){
        case 0:
            computerChoice="rock";
            break;
        case 1:
            computerChoice="paper";
            break;
        case 2:
            computerChoice="scissors";
            break;
    }
    return computerChoice;
    console.log(computerChoice);
}

//use prompt to get human choice for rock paper scissors making sure user picks valid choice
function getHumanChoice(){
    let check=1;
    while(check=1){
        let humanChoice=prompt("Please pick rock paper or scissors!").toLowerCase();
        //console.log(humanChoice);
        if ((humanChoice=="rock")|(humanChoice=="paper")|(humanChoice=="scissors")){
            check=0;
            return humanChoice;
        } else {
        alert("You didn't pick a valid value! Please enter rock paper or scissors!");
        }
    }
    //console.log(humanChoice);
}



//game to play 5 rounds - use variable gameRound to count. keep track of humanScore and computerScore, declare winner at end

function playGame(){

    //initialize variables humanScore,computerScore and gameRound in game;
    let humanScore=0;
    let computerScore=0;

    let gameRound=0;


    //function to play single round which takes human choice and computerchoice and increments score based on what values are

    //cases (comp vs human): rock v rock, rock v paper, rock v scissors, paper v rock, paper v paper, paper v scissors, scissors v rock, scissors v paper, scissors v scissors
    //cases where comp wins: rock v scissors, paper v rock, scissors v paper
    //cases where human wins: rock v paper, paper v scissors, scissors v rock
    //cases where there's a tie: rock v rock, paper v paper, scissors v scissors

    function playRound(humanChoice,computerChoice){
        //console.log(humanChoice);
        //console.log(computerChoice);
        if(((computerChoice=="rock")&&(humanChoice=="scissors"))|((computerChoice=="paper")&&(humanChoice=="rock"))|((computerChoice=="scissors")&&(humanChoice=="paper"))){
            alert(`Human chooses ${humanChoice} and Computer chooses ${computerChoice}.Computer wins!`);
            computerScore++;
        }
        else if(((computerChoice=="rock")&&(humanChoice=="paper"))|((computerChoice=="paper")&&(humanChoice=="scissors"))|((computerChoice=="scissors")&&(humanChoice=="rock"))){
            alert(`Human chooses ${humanChoice} and Computer chooses ${computerChoice}. Human wins!`);
            humanScore++;
        }
        else {
            alert(`Both Human and Computer choose ${humanChoice}. A tie!`);
        }
        //console.log(computerScore);
        //console.log(humanScore);
    }


    while(gameRound<5){
        //console.log(gameRound);
        humanChoice=getHumanChoice();
        //console.log(humanChoice);
        computerChoice=getComputerChoice();
        //console.log(computerChoice);
        playRound(humanChoice,computerChoice);
        gameRound++;
        if (computerScore>humanScore){
            alert(`Round ${gameRound}: The computer is ahead with a score of ${computerScore} vs ${humanScore}`);
        }
        else if(humanScore>computerScore) {
            alert(`Round ${gameRound}: The human is ahead with a score of ${humanScore} vs ${computerScore}`);
        }
        else {
            alert(`Round ${gameRound}: Holy moly! A tight race, both have a score of ${humanScore}`);
        }
    }

    //declare who overall winner is
    if (computerScore>humanScore){
        alert(`Final score computer with ${computerScore} vs human's ${humanScore}. The machine just won this game! and soon - the world!`);
    }
    else if(humanScore>computerScore) {
        alert(`Final score human with ${humanScore} vs computer's ${computerScore}. Human wins! And soon the apes may take over!`);
    }
    else {
        alert(`Wow! A final tie! Both have ${humanScore}`);
    }
}
