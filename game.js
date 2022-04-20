const player = require('./player.js');
class Game {
  constructor() {

  }
  initializeBoard(board) {
    board = [[0,0,0],[0,0,0],[0,0,0]];
  }
  checkWinCondition(board) {
  //if all of the first array second or third array
  //is the same img then the player with that icon winds
  //if any of the corresponding index on each of the arrays
  //has the same image then that player wins.
  //if an index is consectuive 123 or 321 in the 3 arrays have same image then
  // the player with that icon wins. 
  }
}

module.exports = Game;
