const player = require('./player.js');
class Game {
  constructor() {

  }
  initializeBoard(board) {
    board = [[0,0,0],[0,0,0],[0,0,0]];
  }
  checkWinCondition(board) {
  var player1Check = '';
  var player2Check = '';
  for (var i = 0; i < board.length; i++) {
      this.checkWinCondition(board[i]);
      if(board[i] === player1.icon) {
        player1Check += board[i];
      }else if (board[i] === player2.icon) {
        player2Check += board[i];
      }
  }
  }
}

module.exports = Game;
