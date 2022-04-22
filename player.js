class Player {
  constructor(id, token){
    this.id = id;
    this.token = token;
    this.choice ='';
    this.wins = 0;
  }

  increaseWins(){
    this.wins++;
  }
}
