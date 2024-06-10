//initialize variables humanScore,computerScore and gameRound in game;
let humanScore=0;
let computerScore=0;
let gameRound=0;

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

//eventListener to find selection for buttons
const buttons=document.querySelectorAll("button");
//console.log(buttons);
 //iterate through buttons and change playerSelection depending on which button is pressed
buttons.forEach((button)=> {
    button.addEventListener("click",()=>{
        //alert("button clicked!");
        const playerSelection=button.textContent.toLowerCase();
        //console.log(`Human choice is ${playerSelection}`);
        playRound(playerSelection);
    });
});
//console.log(playerSelection);

function playRound(humanChoice){
    getComputerChoice();
    //console.log(`Computer choice is: ${computerChoice}`);
    gameRound++;
    //creating element to display results
    const roundResult=document.createElement("div");
    //console.log(humanChoice);
    //console.log(computerChoice);
    if(((computerChoice=="rock")&&(humanChoice=="scissors"))|((computerChoice=="paper")&&(humanChoice=="rock"))|((computerChoice=="scissors")&&(humanChoice=="paper"))){
        computerScore++;
        roundResult.textContent=`Round ${gameRound}: Human chooses ${humanChoice} and Computer chooses ${computerChoice}. Computer wins this round!\nHuman: ${humanScore} vs. Computer: ${computerScore}`;
    }
    else if(((computerChoice=="rock")&&(humanChoice=="paper"))|((computerChoice=="paper")&&(humanChoice=="scissors"))|((computerChoice=="scissors")&&(humanChoice=="rock"))){
        humanScore++;
        roundResult.textContent=`Round ${gameRound}: Human chooses ${humanChoice} and Computer chooses ${computerChoice}. Human wins this round!\nHuman: ${humanScore} vs. Computer: ${computerScore}`;
    }
    else {
        roundResult.textContent=`Round ${gameRound}: Human chooses ${humanChoice} and Computer chooses ${computerChoice}. A tie!\nHuman: ${humanScore} vs. Computer: ${computerScore}`;
    }
    document.body.appendChild(roundResult);
    //console.log(computerScore);
    //console.log(humanScore);
    if (gameRound==5){
        const endResult=document.createElement("div");
            //declare who overall winner is
        if (computerScore>humanScore){
            endResult.textContent=`All 5 rounds are complete! Final score computer with ${computerScore} vs human's ${humanScore}.\nThe machine just won this game! and soon - the world!`;
        }
        else if(humanScore>computerScore) {
            endResult.textContent=`All 5 rounds are complete!  Final score human with ${humanScore} vs computer's ${computerScore}.\nHuman wins! And soon the apes may take over!`;
        }
        else {
            endResult.textContent=`All 5 rounds are complete! Both have ${humanScore}.\nWow! A final tie!`;
        }
        document.body.appendChild(endResult);
        //reset everything
        gameRound=0;
        humanScore=0;
        computerScore=0;
    }
};
