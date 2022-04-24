const player = require('./player.js');
class Game {
  constructor() {
    this.players = [];
    this.gameBoard = [[0,0,0],[0,0,0],[0,0,0]];
    this.win = false;
  }

  initializeGame(gameBoard,player1,player2) {
    this.gameBoard = [[0,0,0],[0,0,0],[0,0,0]];
    var player1 = new Player(player1.id, player1.icon);
    var player2 = new Player(player2.id, player2.icon);
    this.players.push(player1);
    this.players.push(player2);
  }
  checkForWin() {
    }
    playGame() {
      while (this.win === false) {
        player1.taketurn();
        this.checkForWin();
        player2.taketurn();
        this.checkForWin();
      }
      winner(winner);
    }
    winner() {
      
    }
}

module.exports = Game;
