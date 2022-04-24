class Player {
  constructor(token, innerToken){
    this.token = token;
    this.innerToken = innerToken;
    this.wins = 0;
  }

  increaseWins(){
    this.wins++;
  }
}
