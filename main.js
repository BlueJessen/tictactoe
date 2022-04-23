
//Query Selectors
var tictactoeBoard = document.querySelector("main");
var winResultText = document.querySelector(".event-text")
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
    // tictactoe.resetGame();
    // resetBoard();
  }
}

//Dom Functions
function updateBoard(quadrant, index) {
quadrant.innerHTML = `<img width= 70% src=${tictactoe.players[index].token}></img>`;
}

function winResult() {
  toggleMainView();
  winResultText.innerText = tictactoe.gameResult;
}

function resetBoard() {
  toggleMainView();
}

function toggleMainView() {
  tictactoeBoard.classList.toggle("hidden");
  winResultText.classList.toggle("hidden");
}
