class Game {
  constructor() {
    this.players = [];
    this.playerTurn = 0;
    this.gameEnd = false;
    this.gameResult = '';
    this.board = [null, null, null, null, null, null, null, null, null];
    this.winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ];
  }

  turnSwitch() {
    if (this.playerTurn === 0) {
      this.playerTurn = 1;
    } else if (this.playerTurn === 1) {
      this.playerTurn = 0;
    }
  }

  addPlayer(icon, innerToken) {
    var player = new Player(icon, innerToken);
    this.players.push(player);
  }

  takeTurn(playerChoice) {
    this.board[playerChoice] = this.players[this.playerTurn].innerToken;
    this.checkWinCondition();
    this.turnSwitch();
  }

  checkWinCondition() {
    for (var i = 0; i < this.winConditions.length; i++) {
      var indices = this.winConditions[i];
      
      var checkSet = new Set([this.board[indices[0]], this.board[indices[1]], this.board[indices[2]]]);
      if (checkSet.size === 1 && (checkSet.has("X") || checkSet.has("O"))) {
          this.winAction(this.board[indices[0]]);
      }
    }
      this.checkForCatsGame();
  }

  winAction(innerToken) {
    console.log("51", this.gameEnd);
    this.gameEnd = true;
    if (innerToken === "X") {
      this.players[0].increaseWins();
      this.gameResult = `Player 1 Wins!`;
    }
    if (innerToken === "O") {
      this.players[1].increaseWins();
      this.gameResult = `Player 2 Wins!`;
    }
  }


  resetGame() {
    for (var i = 0; i < this.players.length; i++) {
      this.players[i].choice = '';
      this.gameEnd = false;
    }
    this.board = [null, null, null, null, null, null, null, null, null];
  }

  checkForCatsGame() {
    if (!this.board.includes(null)) {
      this.gameEnd = true;
      this.gameResult = `It was a draw! Too Bad...`;
    }
  }
}
