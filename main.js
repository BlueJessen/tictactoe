const Game = require('./game');

//Query Selectors

// Event Listeners

//Global Variables

//Data Functions
//Dom Functions

var tictactoe = new Game();

tictactoe.addPlayer(1,"X");
tictactoe.addPlayer(2,"0");


console.log(tictactoe.gameBoard);
console.log(tictactoe.checkWinCondition());

//So DOM interaction happens here, the essence of the user input comes here then transfers
//through game and players to calculate the rest of the information.
