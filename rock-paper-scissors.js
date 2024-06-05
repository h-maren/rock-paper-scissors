console.log("hello, test");

//function called getComputerChoice to randomly return string rock paper or scissors
//use random nnumber generator to pick value between 0,1,2, which each correspond to a string value
function getComputerChoice(){
    let computerNumber=Math.floor(Math.random()*3);
    console.log(computerNumber);
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