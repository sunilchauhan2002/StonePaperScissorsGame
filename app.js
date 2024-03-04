let userScore = "0";
let compScore = "0";
let updateUserScore = document.querySelector("#user-score");
let updateCompScore = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
let msgCompChoice = document.querySelector("#compChoice");
const choices = document.querySelectorAll(".Main-Btn");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin ,userChoice,compChoice )=>{
    if(userWin){
        console.log("You Win");
        userScore++;
        updateUserScore.innerText=`${userScore}`;
        msg.innerText= `You Win Your ${userChoice} beats ${compChoice}`;
        msg.style.width = "350px";
        msg.style.backgroundColor = "Green";
        msg.style.border = "none";
    }
    else{
        console.log("Computer Win");
        compScore++;
        updateCompScore.innerText=`${compScore}`;
        msg.innerText= `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.width = "370px";
        msg.style.backgroundColor = "Red";
        msg.style.border = "none";
    }

}

const playgame = (userChoice) => {
    console.log("userChoice = ", userChoice);
    //Gemrate Computer Choice
    const compChoice = genComputerChoice();
  
    console.log("computer Choice = ", compChoice);
    msgCompChoice.innerText = `${compChoice}`;
    if (userChoice === compChoice) {
        drawGame();

    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //computer choice remains paper, scissors

          userWin =  compChoice === "paper"? false:true;
        }
        else if(userChoice ==="paper"){
            //computer choice remains rock , scissors
          userWin =  compChoice ==="scissors"? false : true;
        }
        else{
            //computer choice remains paper, rock
          userWin=  compChoice ==="rock"? false:true;

        }
        showWinner(userWin , userChoice , compChoice);
    }
}
const drawGame = () => {
    console.log("Game Was Draw");
    msg.innerText= "Game Was Draw. Play Again";
    msg.style.width = "300px";
    msg.style.backgroundColor = "Black";
    msg.style.border = "none";
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});