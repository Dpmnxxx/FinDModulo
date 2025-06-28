export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level;
    }  
  }

const p1 = new Player("Yo", 100);
console.log(p1.name , p1.level);