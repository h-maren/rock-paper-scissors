console.log("hello, test");

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