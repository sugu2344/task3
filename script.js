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
}

function flipcard() {
  const card_id = this.getAttribute("data-id");
  this.setAttribute("src", cardArray[card_id].img);
  console.log(card_id);
}
resetButton.addEventListener("click", suffleGame);

suffleGame();
