// variable assingment
let rock= document.querySelector("#rock");
let paper= document.querySelector("#paper");
let scissor= document.querySelector("#scissor");

let you_score= document.querySelector("#you_score");
let comp_score= document.querySelector("#comp_score");
let comment= document.querySelector("#comment");
let yourscore=0;
let compscore=0;
let reset= document.querySelector(".reset");
let main= document.querySelector(".main");
let win= document.querySelector(".win");


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
        if(yourscore===5){
            end("you Win! MANKIND LIVES ANOTHER DAY!!");
        }
        you_score.textContent=yourscore
        comment.textContent=`You Win ${playerSelection} beats ${computerSelection}`;
    } else {
            compscore=compscore+1;
            if(compscore===5){
                end("You Lost...WHO WILL SAVE MANKIND NOW?");
            }
            comp_score.textContent=compscore;
        comment.textContent=`You Lose ${computerSelection} beats ${playerSelection}`;
    }
}
function end(wins){
    win.textContent=`${wins}`;
    main.className="main1";
    reset.className="show";
    win.className="show";
}