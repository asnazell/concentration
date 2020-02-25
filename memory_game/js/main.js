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

//check for match function
function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

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
    checkForMatch();
  }
}

//createBoard function that loops through cards array
function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
}
createBoard();

// console.log("Up and running!");

// var cards = ["queen", "queen", "king", "king"];
// var cardsInPlay = [];
// var cardOne = cards[0];
// cardsInPlay.push(cardOne);
// console.log("User flipped queen");
// var cardTwo = cards[2];
// cardsInPlay.push(cardTwo);
// console.log("User flipped king");
// if (cardsInPlay.length === 2) {
//   if (cardsInPlay[0] === cardsInPlay[1]) {
//     alert("You found a match!");
//   } else {
//     alert("Sorry, try again.");
//   }
// }
