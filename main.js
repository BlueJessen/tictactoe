
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

this.tictactoe.addPlayer(1,"assets/snek.svg");
this.tictactoe.addPlayer(2,"assets/mushroom.svg");

//Data Functions
function getEvent(event) {
  console.log(event.target.id);
if (!tictactoe.players[1].choice.includes(event.target.id) && !tictactoe.players[0].choice.includes(event.target.id)){
    updateBoard(event.target, tictactoe.playerTurn);
    playGame(event.target.id);
  }
}


function playGame(quad) {
  if (!tictactoe.gameEnd) {
    tictactoe.takeTurn(tictactoe.playerTurn, quad);
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
function updateBoard(quadrant, index) {
if (turnTextPlayer1.innerText === "Player 1's Turn"){
  turnTextPlayer1.innerText = "Player 1";
  turnTextPlayer2.innerText = "Player 2's Turn";
}else {
  turnTextPlayer1.innerText = "Player 1's Turn";
  turnTextPlayer2.innerText = "Player 2";
}
quadrant.innerHTML = `<img width= 70% src=${tictactoe.players[index].token}></img>`;
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
