
class Game {
  constructor() {
    this.players = [];
    this.playerTurn = 0;
    this.gameEnd = false;
    this.gameResult = '';
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
    if (this.playerTurn === 0){
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
          this.players[index].choice += quad;
          console.log("choice",this.players[index].choice);
          this.checkWinCondition(index);
          this.turnSwitch();
  }

  checkWinCondition(index) {
      var winCheck = 0;
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
         this.gameResult = `Player ${this.players[index].id} Wins!`;
       }
       this.checkForCatsGame();
     }

  resetGame() {
      console.log("checkWin",this.players[0].choice);
    for (var i = 0; i < this.players.length; i++) {
      this.players[i].choice = '';
      this.gameEnd = false;
    }
  }

  checkForCatsGame() {
      console.log("catsGame",this.players[0].choice);
    if (this.players[0].choice.length === 5 || this.players[1].choice.length === 5) {
      this.gameEnd = true;
      this.gameResult = `It was a draw! Too Bad...`;
    }
  }

}
