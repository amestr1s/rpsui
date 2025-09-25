let max = 3;

function getComputerChoice (max) {
    return Math.floor(Math.random() * max);
}

function getString (choice) {
    if (choice === 0) {
    choice = "rock";
} else if (choice === 1) {
    choice = "paper";
} else {
    choice = "scissors";
} 
    console.log("PC rolls " + (choice));
    return choice;
}

const announcement = document.querySelector("#announcement");
const scoreBoard = document.querySelector("#scoreboard");

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    announcement.textContent = "It's a tie!";
    computerScore = ++computerScore;
    humanScore = ++humanScore;

    } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
    console.log("PC wins, paper beats rock");
    announcement.textContent = "PC wins, paper beats rock";
    computerScore = ++computerScore;
    
    } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
    console.log("You win, rock beats scissors");
    announcement.textContent = "You win, rock beats scissors";
    humanScore = ++humanScore;
    
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
    console.log("You win, paper beats rock");
    announcement.textContent = "You win, paper beats rock";
    humanScore = ++humanScore;
    
    } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
    console.log("PC wins, scissors beat paper");
    announcement.textContent = "PC wins, scissors beat paper";
    computerScore = ++computerScore;
    
    } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
    console.log("You win, scissors beat paper");
    announcement.textContent = "You win, scissors beat paper";
    humanScore = ++humanScore;
    
    } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
    console.log("PC wins, rock beats scissors");
    announcement.textContent = "PC wins, rock beats scissors";
    computerScore = ++computerScore;
    
    } 
    console.log(humanScore); //checking human score
    console.log(computerScore); //checking computer score
    console.log(`Your points are ${humanScore} and the PC points are ${computerScore}`);
    
    scoreBoard.textContent = `Your points are ${humanScore} and the PC points are ${computerScore}`;
    
    if (computerScore === 5) {
        const pcWin = document.createElement("div");
        pcWin.setAttribute("id", "final");
        pcWin.textContent = "Pc is the final winner!";
        scoreBoard.appendChild(pcWin);
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    } else if (humanScore === 5) {
        const humanWin = document.createElement("div");
        humanWin.setAttribute("id", "final");
        humanWin.textContent = "Human is the final winner!";
        scoreBoard.appendChild(humanWin);
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    } else if (humanScore === 5 && computerScore === 5) {
        const humanComputerTie = document.createElement("div");
        humanComputerTie.setAttribute("id", "final");
        humanComputerTie.textContent = "It's a final tie!";
        scoreBoard.appendChild(humanComputerTie);
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    } return;
}

let computerChoice = "";
let choice = "";
let humanChoice = "";

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const reset = document.querySelector("#reset");
const choices = document.querySelector("#choices");

rock.addEventListener('click',() => {
        
        humanChoice = "rock";
        choice = getComputerChoice(max);
        computerChoice = getString(choice);
        console.log(humanChoice);
        playRound(humanChoice, computerChoice);
})

paper.addEventListener('click',() => {
        humanChoice = "paper";
        choice = getComputerChoice(max);
        computerChoice = getString(choice);
        console.log(humanChoice);
        playRound(humanChoice, computerChoice);
})

scissors.addEventListener('click',() => {
        humanChoice = "scissors";
        choice = getComputerChoice(max);
        computerChoice = getString(choice);
        console.log(humanChoice);
        playRound(humanChoice, computerChoice);
})

reset.addEventListener('click',() => {
        computerScore = 0;
        humanScore = 0;
        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("scissors").disabled = false;
        scoreBoard.textContent = `Your points are ${humanScore} and the PC points are ${computerScore}`;
        announcement.textContent = "";
 })
       