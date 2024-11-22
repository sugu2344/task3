const welcomeScreen = document.getElementById("welcomeScreen");
const gameScreen = document.getElementById("gameScreen");
const playerNameInput = document.getElementById("playerNameInput");
const startGameButton = document.getElementById("startGameButton");
const playerNameDisplay = document.getElementById("playerName");
const scoreDisplay = document.getElementById("score");
const resetButton = document.getElementById("resetButton");
const grid = document.getElementById("grid");

let score = 0;

startGameButton.addEventListener("click", () => {
  const playerName = playerNameInput.value.trim();
  if (playerName) {
    playerNameDisplay.textContent = playerName;

    welcomeScreen.style.display = "none";
    gameScreen.style.display = "block";
    // image embedded via js

    const cardArray = [
      // Cards set 1
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

      // Cards set 2
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

    function suffleGame() {
      grid.innerHTML = "";
      cardArray.sort(() => 0.5 - Math.random());
      board();
    }
    // game board

    function board() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "public/dummy.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipcard);
        grid.appendChild(card);
      }
      console.log(cardArray);
    }
    //

    let card_Choosen = [];
    let card_Choosen_id = [];
    let cardsWon = [];
    //  to flip the card

    function flipcard() {
      const card_id = this.getAttribute("data-id");

      if (card_Choosen_id.includes(card_id)) {
        return;
      }

      this.setAttribute("src", cardArray[card_id].img);
      card_Choosen_id.push(card_id);
      card_Choosen.push(cardArray[card_id].name);

      if (card_Choosen.length === 2) {
        setTimeout(checkMatch, 500);
      }
    }
    // to find match
    function checkMatch() {
      const cards = document.querySelectorAll("img");
      const firstCard = cards[card_Choosen_id[0]];
      const secondCard = cards[card_Choosen_id[1]];

      if (card_Choosen[0] === card_Choosen[1]) {
        alert("Match found!");
        firstCard.removeEventListener("click", flipcard);
        secondCard.removeEventListener("click", flipcard);
        cardsWon.push(card_Choosen);
        scoreDisplay.textContent = cardsWon.length;
      } else {
        firstCard.setAttribute("src", "public/dummy.png");
        secondCard.setAttribute("src", "public/dummy.png");
      }

      card_Choosen = [];
      card_Choosen_id = [];

      if (cardsWon.length === cardArray.length / 2) {
        scoreDisplay.textContent = "Congratulations! You've matched all cards!";
      }
    }

    resetButton.addEventListener("click", suffleGame);

    suffleGame();
  } else {
    alert("Please enter your name to start the game.");
  }
});
