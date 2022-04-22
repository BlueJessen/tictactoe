
//Query Selectors
var tictactoeBoard = document.querySelector("main");
// Event Listeners
tictactoeBoard.addEventListener('click', getEvent);

//Global Variables
var tictactoe = new Game();

this.tictactoe.addPlayer(1,"assets/snek.svg");
this.tictactoe.addPlayer(2,"assets/mushroom.svg");

//Data Functions
function getEvent(event) {
  updateBoard(event.target, tictactoe.playerTurn);
  playGame(event.target.id);
}

function playGame(quad) {
  if (!tictactoe.gameEnd) {
  console.log(tictactoe.playerTurn);
    tictactoe.takeTurn(tictactoe.playerTurn, quad);
 }
}

//Dom Functions
function updateBoard(quadrant, index) {
quadrant.innerHTML = `<img src=${tictactoe.players[index].token}></img>`;
}
