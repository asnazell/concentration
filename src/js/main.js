var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
const cardsInPlay = [];

//flip card function
function flipCard() {
  // These 2 lines make the card faces appear instead of the card backs.
  var cardId = this.getAttribute("data-id");
  this.setAttribute("src", cards[cardId].cardImage);
  // Adds value to cardsInPlay array.
  cardsInPlay.push(cards[cardId].rank);
  // Logs card flipped, image location & suit.
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  // Check for match AFTER value has been added to cardsInPlay array.
  if (cardsInPlay.length === 2) {
    setTimeout(checkForMatch, 250);
    //checkForMatch();
  }
}

//check for match function
function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

//createBoard function that loops through cards array
function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("class", "card");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
}
createBoard();
