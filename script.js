const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#score");
const resetButton = document.querySelector("#resetButton");
const cardArray = [
  // set1
  {
    name: "aspade",
    img: "public/aspade.jpeg",
  },
  {
    name: "2spade",
    img: "public/2spade.png",
  },
  {
    name: "3spade",
    img: "public/3spade.png",
  },
  {
    name: "4spade",
    img: "public/4spade.png",
  },
  {
    name: "5spade",
    img: "public/5spade.png",
  },
  {
    name: "6spade",
    img: "public/6spade.png",
  },
  {
    name: "7spade",
    img: "public/7spade.png",
  },
  {
    name: "8spade",
    img: "public/8spade.png",
  },
  {
    name: "9spade",
    img: "public/9spade.png",
  },
  {
    name: "10spade",
    img: "public/10spade.png",
  },
  {
    name: "kingspade",
    img: "public/kingspade.jpg",
  },
  {
    name: "queenspade",
    img: "public/queenspade.jpeg",
  },

  // set 2
  {
    name: "aspade",
    img: "public/aspade.jpeg",
  },
  {
    name: "2spade",
    img: "public/2spade.png",
  },
  {
    name: "3spade",
    img: "public/3spade.png",
  },
  {
    name: "4spade",
    img: "public/4spade.png",
  },
  {
    name: "5spade",
    img: "public/5spade.png",
  },
  {
    name: "6spade",
    img: "public/6spade.png",
  },
  {
    name: "7spade",
    img: "public/7spade.png",
  },
  {
    name: "8spade",
    img: "public/8spade.png",
  },
  {
    name: "9spade",
    img: "public/9spade.png",
  },
  {
    name: "10spade",
    img: "public/10spade.png",
  },
  {
    name: "kingspade",
    img: "public/kingspade.jpg",
  },
  {
    name: "queenspade",
    img: "public/queenspade.jpeg",
  },
];
// cardArray.sort(() => 0.5 - Math.random());
function suffleGame() {
  gridDisplay.innerHTML = "";

  cardArray.sort(() => 0.5 - Math.random());

  board();
}

board();
function board() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "public/dummy.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipcard);
    gridDisplay.appendChild(card);
  }
  console.log(cardArray);
}

card_Choosen = [];
card_Choosen_id = [];
function flipcard() {
  const card_id = this.getAttribute("data-id");
  this.setAttribute("src", cardArray[card_id].img);
  card_Choosen_id.push(card_id);
  card_Choosen.push(cardArray[card_id].name);
  if (card_Choosen.length === 2) {
    setTimeout(checkMatch, 1000);
  }
}
resetButton.addEventListener("click", suffleGame);

suffleGame();
cardsWon = [];

function checkMatch() {
  const cards = document.querySelectorAll("img");
  if (card_Choosen[0] == card_Choosen[1]) {
    alert("match found");
    cards[card_Choosen_id[0]].setAttribute("src", "public/done.jpeg");
    cards[card_Choosen_id[1]].setAttribute("src", "public/done.jpeg");
    cards[card_Choosen_id[0]].removeEventListener("click", flipcard);
    cards[card_Choosen_id[1]].removeEventListener("click", flipcard);
    cardsWon.push(card_Choosen);
    resultDisplay.innerHTML = cardsWon.length;
  } else {
    cards[card_Choosen_id[0]].setAttribute("src", "public/dummy.png");
    cards[card_Choosen_id[1]].setAttribute("src", "public/dummy.png");
  }
  card_Choosen = [];
  card_Choosen_id = [];
  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "congrulations";
  }
}
