//console.log("Hello World")
alert("Welcome to a game of 5 rounds of Rock Paper Scissors played through alert boxes");

let max = 3;

function getComputerChoice (max) {
    return Math.floor(Math.random() * max);
}
let choice = getComputerChoice(max);
//console.log (choice); //checking correct string conversion

function getString (choice) {
    if (choice === 0) {
    choice = "rock";
//    console.log(choice);
} else if (choice === 1) {
    choice = "paper";
//    console.log(choice);
} else {
    choice = "scissors";
//    console.log(choice);
} 
    console.log("PC rolls " + (choice));
    return choice;
}


let value = 0;

function ask (value) {
    value = prompt("Choose and enter a value between rock, paper, scissors");
    value = value.trim();
    value = value.toLowerCase();
    return value;
}

let hchoice = ask (value);
//console.log(hchoice); //checking correct input transition through getHumanChoice

function getHumanChoice (hchoice) {
    if (hchoice === "rock") {
    hchoice = hchoice;
    } else if (hchoice === "paper") {
    hchoice = hchoice;
    } else if (hchoice === "scissors") {
    hchoice = hchoice;
    } else {
    hchoice = "invalid value reload the page to start again";
    alert("This round won't count, this answer is invalid");
    } 
    console.log("User chose " + (hchoice));
    return hchoice;
}

//console.log("User chose " + (hchoice));

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    alert("It's a tie");
    } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
    console.log("PC wins, paper beats rock");
    computerScore = ++computerScore;
    alert("You lose\nPaper beats rock");
    } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
    console.log("You win, rock beats scissors");
    humanScore = ++humanScore;
    alert("You win\nRock beats scissors");
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
    console.log("You win, paper beats rock");
    humanScore = ++humanScore;
    alert("You win\nPaper beats rock");
    } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
    console.log("PC wins, scissors beat paper");
    computerScore = ++computerScore;
    alert("You lose\nScissors beat paper");
    } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
    console.log("You win, scissors beat paper");
    humanScore = ++humanScore;
    alert("You win\nScissors beat paper");
    } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
    console.log("PC wins, rock beats scissors");
    computerScore = ++computerScore;
    alert("You lose\nRock beats scissors");
    } 
    console.log(humanScore); //checking human score
    console.log(computerScore); //checking computer score
    console.log("Your points are " + (humanScore) + " and the PC points are " + (computerScore));
    alert("Score now is user: " + (humanScore) + " PC: " + (computerScore));
    return;
}

function playGame() {
let computerChoice = getString(choice);
let humanChoice = getHumanChoice(hchoice);
playRound(humanChoice, computerChoice);
choice = getComputerChoice(max);
hchoice = ask(value);
computerChoice = getString(choice);
humanChoice = getHumanChoice(hchoice);
playRound(humanChoice, computerChoice);
choice = getComputerChoice(max);
hchoice = ask(value);
computerChoice = getString(choice);
humanChoice = getHumanChoice(hchoice);
playRound(humanChoice, computerChoice);
choice = getComputerChoice(max);
hchoice = ask(value);
computerChoice = getString(choice);
humanChoice = getHumanChoice(hchoice);
playRound(humanChoice, computerChoice);
choice = getComputerChoice(max);
hchoice = ask(value);
computerChoice = getString(choice);
humanChoice = getHumanChoice(hchoice);
playRound(humanChoice, computerChoice);
alert("Final score is user: " + (humanScore) + " PC: " + (computerScore));
}

playGame();



console.log("Your points are " + (humanScore) + " and the PC points are " + (computerScore));