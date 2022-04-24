class Player {
  constructor(token, innerToken){
    this.token = token;
    this.innerToken = innerToken;
    this.choice ='';
    this.wins = 0;
  }

  addChoice(quad) {
    this.choice += quad;
  }

  increaseWins(){
    this.wins++;
  }
}
