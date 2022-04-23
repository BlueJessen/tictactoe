
class Game {
  constructor() {
    this.players = [];
    this.playerTurn = 0;
    this.gameEnd = false;
    this.gameResult = '';
    this.gameBoard = [0,0,0,0,0,0,0,0,0];
    this.winConditions = {combo1:['A','B','C'],
                          combo2:['D','E','F'],
                          combo3:['G','H','I'],
                          combo4:['A','D','G'],
                          combo5:['B','E','H'],
                          combo6:['C','F','I'],
                          combo7:['A','E','I'],
                          combo8:['G','E','C'];
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
          this.checkWinCondition(index);
          this.turnSwitch();
  }

  checkWinCondition(index) {
        if(this.players[index].choice.includes(this.combo1.value){
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
    for (var i = 0; i < this.players.length; i++) {
      this.players[i].choice = '';
      this.gameEnd = false;
    }
  }

  checkForCatsGame() {
    if (this.players[0].choice.length === 5 || this.players[1].choice.length === 5) {
      this.gameEnd = true;
      this.gameResult = `It was a draw! Too Bad...`;
    }
  }

}
