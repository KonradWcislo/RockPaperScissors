const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")

const choice = ["rock", "paper", "scissors"]

let playerScore = 0
let computerScore = 0

function playGame(playerChoice) {
	const computerChoice = choice[Math.floor(Math.random() * 3)]
	let result = ""

	if (playerChoice === computerChoice) {
		result = "NO ONE WON!"
	} else if (playerChoice === "rock" && computerChoice === "paper") {
		result = "YOU LOSE!"
	} else if (playerChoice === "rock" && computerChoice === "scissors") {
		result = "YOU WIN!"
	} else if (playerChoice === "paper" && computerChoice === "rock") {
		result = "YOU WIN!"
	} else if (playerChoice === "paper" && computerChoice === "scissors") {
		result = "YOU LOSE!"
	} else if (playerChoice === "scissors" && computerChoice === "rock") {
		result = "YOU LOSE!"
	} else if (playerChoice === "scissors" && computerChoice === "paper") {
		result = "YOU WIN!"
	}

	playerDisplay.textContent = `PLAYER: ${playerChoice}`
	computerDisplay.textContent = `Computer: ${computerChoice}`
	resultDisplay.textContent = result
	resultDisplay.classList.remove("text_green", "text_red")

	if (result === "YOU WIN!") {
		resultDisplay.classList.add("text_green")
		playerScore++
		playerScoreDisplay.textContent = playerScore
	} else if (result === "YOU LOSE!") {
		resultDisplay.classList.add("text_red")
		computerScore++
		computerScoreDisplay.textContent = computerScore
	}
}
