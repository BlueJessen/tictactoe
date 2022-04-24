class Player {
  constructor(id, token){
    this.id = id;
    this.token = token;
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
