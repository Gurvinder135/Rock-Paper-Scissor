
function computerPlay(){
    arrayList=["ROCK", "PAPER", "SEASOR"];
    return arrayList[Math.floor(Math.random()*arrayList.length)]
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection===computerSelection){
        return("Game draw");
    } else if((playerSelection==="ROCK" && computerSelection==="SEASOR")||(playerSelection==="SEASOR"&&computerSelection==="PAPER")||(playerSelection==="PAPER"&& computerSelection==="ROCK")){
        score=score+1;
        return(`You Win ${playerSelection} beats ${computerSelection}`);
    } else {
        if(score>0){
            score=score-1;
        }
        return(`You Lose ${computerSelection} beats ${playerSelection}`);
    }
}
let numberOfRounds= parseInt(prompt("Welcome to the game, How many rounds you want to play?"));
while (isNaN(numberOfRounds)){
    numberOfRounds=parseInt(prompt("Invalid input! Please enter integer value, How many rounds you want to play?"));
}
let score=0;
function game(round){
    
 for(let i=0; i<round; i++){   
    let userInput=(prompt("Enter your choice from Rock, Paper, Seasor!")).toUpperCase();
    while(userInput!=="ROCK"&& userInput!=="PAPER"&& userInput!=="SEASOR"){
        userInput=(prompt("Invalid entry! Please only enter from from Rock, Paper, Seasor!")).toUpperCase();
    }
console.log(playRound(userInput, computerPlay()) + ` and your score is ${score}`);
 }
}

game(numberOfRounds);