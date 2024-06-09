const buttons = document.querySelectorAll("button");
const selfScoreEl = document.getElementById("Yscore");
const comScoreEl = document.getElementById("Cscore");

const resultEl = document.getElementById("final-output");

let selfScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const result = playRound(button.id, computerPlay());
		resultEl.textContent = result;
	});
});

function computerPlay() {
	const choices = ["Rock", "Paper", "Scissors"];
	const randomChoice = Math.floor(Math.random() * choices.length);
	return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "It's a tie.";
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		selfScore++;
		selfScoreEl.textContent = selfScore;
		return "You win! " + playerSelection + " beats " + computerSelection;
	} else {
		computerScore++;
		comScoreEl.textContent = computerScore;
		return "Oops! You lose.. " + computerSelection + " beats " + playerSelection;
	}
}
