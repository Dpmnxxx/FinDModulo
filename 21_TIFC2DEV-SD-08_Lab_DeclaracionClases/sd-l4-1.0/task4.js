export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = Number(level);
  }

  // Método que muestra el nivel actual del jugador.
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  // Método que incrementa el nivel del jugador en uno.
  levelUp() {
    this.level++;
  }
}


const player = new Player("Grog", process.argv[2]);

player.info();
player.levelUp();
player.info();
