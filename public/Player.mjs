class Player {
  constructor({x, y, score, id}) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id;
    this.speed = 5;
    this.score = score;
    this.id = id;
    this.movementDirection = {};
    this.isMain = main;
  }

  movePlayer(dir, speed) {
    switch(dir){
      case "UP":
        this.y -= 1;
      case "DOWN":
        this.y += 1;
      case "LEFT":
        this.x -= 1;
      case "RIGHT":
        this.x += 1;
    }
  }

  collision(item) {
    
  }

  calculateRank(arr) {

  }
}

export default Player;
