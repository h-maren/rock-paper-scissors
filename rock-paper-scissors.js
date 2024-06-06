//function called getComputerChoice to randomly return string rock paper or scissors
//use random nnumber generator to pick value between 0,1,2, which each correspond to a string value
function getComputerChoice(){
    let computerNumber=Math.floor(Math.random()*3);
    //console.log(computerNumber);
    let computerChoice="";
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

//initialize variables humanScore and computerScore in game;
let humanScore=0;
let computerScore=0;

//function to play single round which takes human choice and computerchoice and increments score based on what values are

//cases (comp vs human): rock v rock, rock v paper, rock v scissors, paper v rock, paper v paper, paper v scissors, scissors v rock, scissors v paper, scissors v scissors
//cases where comp wins: rock v scissors, paper v rock, scissors v paper
//cases where human wins: rock v paper, paper v scissors, scissors v rock
//cases where there's a tie: rock v rock, paper v paper, scissors v scissors

function playRound(humanChoice,computerChoice){
    if(((computerChoice=="rock")&&(humanChoice=="scissors"))|((computerChoice=="paper")&&(humanChoice=="rock"))|((computerChoice=="scissors")&&(humanChoice=="paper"))){
        alert("computer wins this round!");
        computerScore++;
    }
    else if(((computerChoice=="rock")&&(humanChoice=="paper"))|((computerChoice=="paper")&&(humanChoice=="scissors"))|((computerChoice=="scissors")&&(humanChoice=="rock"))){
        alert("human wins this round!");
        humanScore++;
    }
    else {
        alert("a tie!");
    }
    console.log(computerScore);
    console.log(humanScore);
}

