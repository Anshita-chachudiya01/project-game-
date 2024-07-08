let userScore = 0;
let computerScore = 0;

const Choice = document.querySelectorAll(".Choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("user-Score");
const computerScorePara = document.querySelector("computer-Score");

const genComputerChoise = () => {
    const option = ["rock", "paper","scissors"];
     const randIdx = Math.floor(Math.random() * 3);
     return option[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Drow. Play again.";
    msg.style.backgroundColor = "081b31";
};

const showWinner = (userWin,userChoice,computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = 'You win! Your ${userChoice} beats ${computerChoice}';
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = 'You lose. ${computerChoice} beats your ${userChoice}';
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) => {
    //Generate computer choice 
    const computerChoice = genComputerChoise();
    if(userChoice === computerChoice) {
        //Draw Game
        drawGame();
    } else{
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = computerChoice === "scissors" ? false : true;
        }else{
            //rock, paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

Choice.forEach((Choice) => {
    Choice.addEventListener("click",() => {
        const userChoice = Choice.getAttribute("id");
        playGame(userChoice);
    });
});
