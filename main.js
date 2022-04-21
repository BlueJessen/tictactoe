
//Query Selectors
var tictactoeBoard = document.querySelector("main");
// Event Listeners
tictactoeBoard.addEventListener('click', getEvent);

//Global Variables
var tictactoe = new Game();

//Data Functions

function getEvent(event) {
  updateBoard(event.target);
  console.log(event.target);
}
//get id of quedrant
//update quadrant display
//update player choices
//checkWinConditions

//Dom Functions
function updateBoard(quadrant) {
quadrant.innerHTML = `<img src= "assets/snek.svg"></img>`;
}
