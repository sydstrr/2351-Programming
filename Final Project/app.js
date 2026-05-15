const symbols = ["🐌", "🦋", "🐝", "🐞"];

// Duplicate Symbols
let cardsArray = [...symbols, ...symbols];

// Shuffle cards
cardsArray.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById("gameBoard");

let firstCard = null;
let secondCard = null;
let lockBoard = false;

let matchedPairs = 0;

// Create cards
cardsArray.forEach(symbol => {
  
  const card = document.createElement("div");

  card.classList.add("card");
  card.dataset.symbol = symbol;
  card.innerHTML = "";

  card.addEventListener("click", flipCard);

  gameBoard.appendChild(card);
});

function flipCard() {

  //prevent clicking more than 2 cards
  if (lockBoard) return;

  // prevent clicking same card twice
  if (this === firstCard) return;

  this.innerHTML = this.dataset.symbol;
  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;

  checkMatch();
}

function checkMatch() {

  const isMatch =
    firstCard.dataset.symbol === secondCard.dataset.symbol;

  if (isMatch) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");

    matchedPairs++;

    //Win
    if (matchedPairs === symbols.length) {
      setTimeout(() => {
        alert("Congratulations! You've matched all bugs! :)");
      }, 500);
    }

    resetTurn();
  
  } else {

    lockBoard = true;

    setTimeout(() => {

      firstCard.innerHTML = "";
      secondCard.innerHTML = "";

      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");

      resetTurn();

    }, 1000);
  }
}

function resetTurn() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
};