// variable assingment
let rock= document.querySelector("#rock");
let paper= document.querySelector("#paper");
let scissor= document.querySelector("#scissor");

let you_score= document.querySelector("#you_score");
let comp_score= document.querySelector("#comp_score");
let comment= document.querySelector("#comment");
let yourscore=0;
let compscore=0;

// logic
rock.addEventListener("click", function(){
playRound("ROCK",computerPlay());
})
paper.addEventListener("click", function(){
    playRound("PAPER",computerPlay());  
 })
scissor.addEventListener("click", function(){
        playRound("SCISSOR",computerPlay());      
 })

// Random generator
function computerPlay(){
    arrayList=["ROCK", "PAPER", "SCISSOR"];
    return arrayList[Math.floor(Math.random()*arrayList.length)]
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection===computerSelection){
        comment.textContent="Game draw";
    } else if((playerSelection==="ROCK" && computerSelection==="SCISSOR")||(playerSelection==="SCISSOR"&&computerSelection==="PAPER")||(playerSelection==="PAPER"&& computerSelection==="ROCK")){
        yourscore=yourscore+1;
        you_score.textContent=yourscore
        comment.textContent=`You Win ${playerSelection} beats ${computerSelection}`;
    } else {
            compscore=compscore+1;
            comp_score.textContent=compscore;
        comment.textContent=`You Lose ${computerSelection} beats ${playerSelection}`;
    }
}
