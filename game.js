
class Game {
  constructor() {
    this.players = [];
    this.playerTurn = 0;
    this.gameEnd = false;
    this.winConditions = ['A','B','C',
                          'D','E','F',
                          'G','H','I',
                          'A','D','G',
                          'B','E','H',
                          'C','F','I',
                          'A','E','I',
                          'G','E','C'];
  }

  turnSwitch() {
    if (this.playerTurn){
      this.playerTurn = 1;
    }else if(this.playerTurn === 1){
      this.playerTurn = 0;
    }
  }

  addPlayer(id, icon) {
    var player = new Player(id,icon);
    this.players.push(player);
  }

  takeTurn(index, quad) {
          this.players[index].choice += `${quad}`;
          this.checkWinCondition(index);
          this.turnSwitch();
  }

  checkWinCondition(index) {
      var winCheck = 0;
      //iterates through larger winConditions array
      for (var i = 0; i < this.winConditions.length; i++) {
          if (this.players[index].choice.includes(this.winConditions[i])) {
            winCheck++;
          }else{
            winCheck = 0;
          }
          this.winAction(winCheck, index);
          }
            this.checkForCatsGame();
  }

   winAction(score, index) {
     if (score === 3 ) {
     this.gameEnd = true;
         this.players[index].increaseWins();
         console.log(`Player ${this.players[index].id} Wins!`);
         console.log("57",this.players[index].choice);
         this.resetGame();
       }
       this.checkForCatsGame();
}

  resetGame() {
    for (var i = 0; i < this.players.length; i++) {
      this.players[i].choice = '';
      this.gameEnd = false;
    }
  }

  checkForCatsGame() {
    if (this.players[0].choice.length === 5 || this.players[1].choice.length === 5) {
      this.gameEnd = true;
      this.resetGame();
    }
  }

}
