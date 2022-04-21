const Player = require('./player');
class Game {
  constructor() {
    this.players = [];
    this.gameBoard = [[0,0,0],[0,0,0],[0,0,0]];
    this.win = false;
    this.winConditions = ['001020','011121','021222','000102','101112','202122','001122','221100'];
  }

  addPlayer(player, icon) {
    var player = new Player(player,icon);
    this.players.push(player);
  }

  takeTurn(player, choice) {
    if (player === this.players[0].id ) {
      this.gameBoard[choice[0]][choice[1]] = this.players[0].token;
    }else if (player === this.players[1].id) {
      this.gameBoard[choice[0]][choice[1]] = this.players[1].token;
    }
    // this.checkWinCondition();
  }
//00,11,22 or 22,11,00  (diagonal)
//00,10,20 or 01, 11, 21 or 02, 12, 22 (Horizontal)
//00,01,02 or 10,11,12 or 20,21,22 (Vertical)
  checkWinCondition() {
    for(var k = 0; k < this.players.length; k++) {
      var choices = '';
      for (var i = 0; i < this.gameBoard.length; i++) {
        for(var j = 0; j < this.gameBoard[i].length; j++ ) {
          if(this.gameBoard[i][j] === this.players[k].token) {
            choices += `${i}${j}`;
          }
      }
    }
    this.testChoice(k,choices);
  }
}

testChoice (index,choices) {
  for (var i = 0; i < this.winConditions.length; i++) {
    console.log(choices, this.winConditions[i]);
    if(choices === this.winConditions[i]){
        this.win = true;
        console.log(`Player ${this.players[index].id} WINNER!`);
    }
  }
}

}



module.exports = Game;
