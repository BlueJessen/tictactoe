
class Game {
  constructor() {
    this.players = [];
    this.win = false;
    this.winConditions = [['00','10','20'],
                          ['01','11','21'],
                          ['02','12','22'],
                          ['00','01','02'],
                          ['10','11','12'],
                          ['20','21','22'],
                          ['00','11','22'],
                          ['22','11','00']];
  }


  addPlayer(id, icon) {
    var player = new Player(id,icon);
    this.players.push(player);
  }

  takeTurn(id, choice) {
    for (var i = 0; i < this.players.length; i++) {
        if (id === this.players[i].id) {
          this.players[i].choices += `${choice[0]}${choice[1]}`;
     }
   }
    this.checkWinCondition();
  }

  checkWinCondition() {
    var winCheck = 0;
    for(var k = 0; k < this.players.length; k++) {
      for (var i = 0; i < this.winConditions.length; i++) {
        for(var j = 0; j < this.winConditions[i].length; j++ ) {
          if(this.players[k].choice.includes(this.winConditions[i][j])) {
            winCheck++;
            }
          if(winCheck === 3){
            this.winAction(this.players[k].id);
            winCheck = 0;
            }
          }
        }
      }
  }

   winAction(id) {
     this.win = true;
     for(var i = 0; i < this.players.length; i++){
       if(id === this.players[i].id) {
         this.players[i].increaseWins();
         console.log(`Player ${this.player[i].id} Wins!`);
       }
     }
}

  resetGame() {
    for(var i = 0; i < this.players.length; i++) {
      this.players[i].choices = '';
      this.win = false;
    }
  }

}
