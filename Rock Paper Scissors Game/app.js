let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = () => {
    document.querySelector("#msg");
    msg.innerText = "Game was draw."
    msg.style.backgroundColor = "#295F98";
}

const showWinner = (userWin,userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "#07BA04";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "#F5004F";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});