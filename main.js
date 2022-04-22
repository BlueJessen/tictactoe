
//Query Selectors
var tictactoeBoard = document.querySelector("main");
// Event Listeners
tictactoeBoard.addEventListener('click', getEvent);

//Global Variables
var tictactoe = new Game();

this.tictactoe.addPlayer(1,"X");
this.tictactoe.addPlayer(2,"0");
this.tictactoe.players[0].choice = '0011010212';

//Data Functions
function getEvent(event) {
  updateBoard(event.target);
  playGame(event.target.id);
}

function playGame(choice) {
if( tictactoe.gameEnd === false) {
    tictactoe.takeTurn(tictactoe.playerTurn,choice);
 }
 tictactoe.resetGame();
}

//get id of quedrant
//update quadrant display
//update player choices
//checkWinConditions

//Dom Functions
function updateBoard(quadrant) {
quadrant.innerHTML = `<img src= "assets/snek.svg"></img>`;
}
