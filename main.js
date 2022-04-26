//Query Selectors
var tictactoeBoard = document.querySelector("main");
var winResultText = document.querySelector(".event-text")
var player1WinsText = document.querySelector("#player1");
var player2WinsText = document.querySelector("#player2");
var turnTextPlayer1 = document.querySelector(".player-section1-turn");
var turnTextPlayer2 = document.querySelector(".player-section2-turn");
var background = document.querySelector("body");

// Event Listeners
tictactoeBoard.addEventListener('click', getEvent);

//Global Variables
var tictactoe = new Game();
this.tictactoe.addPlayer("assets/snek.gif", "X");
this.tictactoe.addPlayer("assets/poop.gif", "O");

//Data Functions
function getEvent(event) {
  var choice = 0;
  for (var i = 0; i < tictactoeBoard.children.length; i++) {
    if (event.target === tictactoeBoard.children[i] && tictactoe.board[i] === null) {
      choice = i;
    }
  }
  if (tictactoe.board[choice] === null) {
    updateBoard(event.target);
    playGame(choice);
  }
}

function playGame(playerChoice) {
  if (!tictactoe.gameEnd) {
    var indices = tictactoe.takeTurn(playerChoice);
    checkIfGameOver();
  }
}

function checkIfGameOver() {
  if (tictactoe.gameEnd) {
    resultAnimation();
    var winTimeout = setTimeout(winResult, 1000);
    var endGameTimeout = setTimeout(resetBoard, 3000);
  }
}

//Dom Functions

function resultAnimation() {
  if (tictactoe.gameResult !== `It was a draw! Too Bad...`) {
    background.classList.add("background-victory");
    background.classList.remove("background");
  }
}

function updateBoard(quadrant) {
  quadrant.innerHTML = `<img width= 70% src=${tictactoe.players[tictactoe.playerTurn].token}></img>`;
  if (turnTextPlayer1.innerText === "Player 1's Turn" && tictactoe.playerTurn === 0) {
    turnTextPlayer1.innerText = "Player 1";
    turnTextPlayer2.innerText = "Player 2's Turn";
  } else if(tictactoe.playerTurn === 1) {
    turnTextPlayer1.innerText = "Player 1's Turn";
    turnTextPlayer2.innerText = "Player 2";
  }
}

function winResult() {
  toggleMainView();
  winResultText.innerText = tictactoe.gameResult;
  player1WinsText.innerText = `Wins ${tictactoe.players[0].wins}`;
  player2WinsText.innerText = `Wins ${tictactoe.players[1].wins}`;
}

function resetBoard() {
  tictactoe.resetGame()
  background.classList.add("background");
  toggleMainView();
  for (var i = 0; i < tictactoeBoard.children.length; i++) {
    tictactoeBoard.children[i].innerHTML = '';
  }
  background.classList.remove("background-victory");
}

function toggleMainView() {
  tictactoeBoard.classList.toggle("hidden");
  winResultText.classList.toggle("hidden");
}
