
class Game {
  constructor() {
    this.players = [];
    this.playerTurn = 1;
    this.gameEnd = false;
    this.winConditions = ['00','10','20',
                          '01','11','21',
                          '02','12','22',
                          '00','01','02',
                          '10','11','12',
                          '20','21','22',
                          '00','11','22',
                          '22','11','00'];
  }

  turnSwitch(){
    if (this.playerTurn === 1){
      this.playerTurn = 2;
    }else if(this.playerTurn === 2){
      this.playerTurn = 1;
    }
  }

  addPlayer(id, icon) {
    var player = new Player(id,icon);
    this.players.push(player);
  }

  takeTurn(id, choice) {
    for (var i = 0; i < this.players.length; i++) {
        if (id === this.players[i].id) {
          this.players[i].choices += `${choice}`;
          this.checkWinCondition(i);
     }
   }
   this.turnSwitch();
  }

  checkWinCondition(index) {
      var winCheck = 0;
      //iterates through larger winConditions array
      for (var i = 0; i < this.winConditions.length; i++) {
          if(this.players[index].choice.includes(this.winConditions[i])) {
            winCheck++;
          }else{
            winCheck--;
          }
            this.winAction(winCheck, index);
            }
  }

   winAction(score, index) {
     if (score === 3) {
     this.gameEnd = true;
         this.players[index].increaseWins();
         console.log(`Player ${this.players[index].id} Wins!`);
         this.resetGame();
       }
       // this.checkForCatsGame();
}

  resetGame() {
    for(var i = 0; i < this.players.length; i++) {
      this.players[i].choice = '';
      this.gameEnd = false;
    }
  }

}
