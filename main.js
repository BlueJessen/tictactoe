
//Query Selectors
var tictactoeBoard = document.querySelector("main");
var winResultText = document.querySelector(".event-text")
var player1WinsText = document.querySelector("#player1");
var player2WinsText = document.querySelector("#player2");
var turnTextPlayer1 = document.querySelector(".player-section1-turn");
var turnTextPlayer2 = document.querySelector(".player-section2-turn");
// Event Listeners
tictactoeBoard.addEventListener('click', getEvent);

//Global Variables
var tictactoe = new Game();
this.tictactoe.addPlayer("assets/snek.svg", "X");
this.tictactoe.addPlayer("assets/mushroom.svg", "O");

//Data Functions
function getEvent(event) {
    updateBoard(event.target);
    var choice = 0;
    for( var i =0; i < tictactoeBoard.children.length; i++) {
      if (event.target === tictactoeBoard.children[i]) {
        choice = i;
      }
  }
  playGame(choice);
}

function playGame(playerChoice) {
  if (!tictactoe.gameEnd) {
    tictactoe.takeTurn(playerChoice);
    checkIfGameOver();
  }
}

function checkIfGameOver(){
  if(tictactoe.gameEnd) {
  winResult();
  var endGameTimeout = setTimeout(resetBoard, 3000);
  }
}

//Dom Functions
function updateBoard(quadrant) {
  quadrant.innerHTML = `<img width= 70% src=${tictactoe.players[tictactoe.playerTurn].token}></img>`;
if (turnTextPlayer1.innerText === "Player 1's Turn"){
  turnTextPlayer1.innerText = "Player 1";
  turnTextPlayer2.innerText = "Player 2's Turn";
} else {
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
  toggleMainView();
  for (var i = 0; i < tictactoeBoard.children.length; i++) {
    tictactoeBoard.children[i].innerHTML = '';
  }
}

function toggleMainView() {
  tictactoeBoard.classList.toggle("hidden");
  winResultText.classList.toggle("hidden");
}
