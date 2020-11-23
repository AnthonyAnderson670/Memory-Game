// JavaScript Document
document.addEventListener("DOMContentLoaded", () => {
//card options
	const cardArray = [
		{
			name: "hedwig",
			img: "images/hedwig.jpg"
		},
		{
			name: "hedwig",
			img: "images/hedwig.jpg"
		}, 
		{
			name: "idena",
			img: "images/idena.jpg"
		},
		{
			name: "idena",
			img: "images/idena.jpg"
		},
		{
			name: "nph",
			img: "images/nph.jpg"
		},
		{
			name: "nph",
			img: "images/nph.jpg"
		},
		{
			name: "organic",
			img: "images/organic.jpg"
		},
		{
			name: "organic",
			img: "images/organic.jpg"
		},
		{
			name: "rocky",
			img: "images/rocky.jpg"
		},
		{
			name: "rocky",
			img: "images/rocky.jpg"
		},
		{
			name: "turtle",
			img: "images/turtle.jpg"
		},
		{
			name: "turtle",
			img: "images/turtle.jpg"
		}
	]
	
	cardArray.sort(() => 0.5 - Math.random())

	const grid = document.querySelector(".grid")
	const resultDisplay = document.querySelector("#result")
	const message = document.querySelector("#message")
	const reset = document.querySelector("#reset")
	var cardsChosen = []
	var cardsChosenId = []
	var cardsWon = []

	//create your board
	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement("img")
			card.setAttribute("src", "images/blank.png")
			card.setAttribute("data-id", i)
			card.addEventListener("click", flipCard)
			grid.appendChild(card)
		}
	}
	
	//check for matches
	function checkForMatch() {
		var cards = document.querySelectorAll("img")
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]
		if (cardsChosen[0] === cardsChosen[1]) {
			message.textContent = "You found a match!"
			cards[optionOneId].setAttribute("src", "images/white.png")
			cards[optionTwoId].setAttribute("src", "images/white.png")
			cardsWon.push(cardsChosen)
		} else {
			cards[optionOneId].setAttribute("src", "images/blank.png")
			cards[optionTwoId].setAttribute("src", "images/blank.png")
			message.textContent = "Sorry, try again"
		}
		cardsChosen = []
		cardsChosenId = []
		resultDisplay.textContent = cardsWon.length
		if (cardsWon.length === cardArray.length/2) {
			resultDisplay.textContent = "Congratulations! You found them all!"
		}
	}
	
	
	//flip your card
	function flipCard() {
		var cardId = this.getAttribute("data-id")
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute("src", cardArray[cardId].img)
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500)
		}
	}
	
	
	createBoard()
	
	//Reset Game
	reset.addEventListener("click", gameRestart)
	
	function gameRestart() {
		document.location.reload();
	}
	
})