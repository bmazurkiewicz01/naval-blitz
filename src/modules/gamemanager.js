import UI from "./ui";
import Player from "./player";

export default class GameManager {
    constructor(playerName="Unnamed", enemyName="Enemy") {
        this.player = new Player(playerName);
        this.enemy = new Player(enemyName, "computer");
        this.ui = new UI();
        this.currentPlayer = this.player;
    }

    initializeGame() {
        this.ui.renderGrids();
        this.ui.createPlayerGridHandler(this.#playerGridHandler.bind(this));
        this.ui.createEnemyGridHandler(this.#enemyGridHandler.bind(this));
        this.player.placeRandomShips();
        this.enemy.placeRandomShips();
        this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
    }

    #playerGridHandler(e) {
        if (this.currentPlayer === this.player) {
            return;
        }
        else {
            const cellIndex = this.ui.playerGridCells.indexOf(e.target);
            const x = Math.floor(cellIndex / 10);
            const y = cellIndex % 10;
            console.log("Player grid", {x, y});
            console.log(this.player.gameboard.receiveAttack(x, y));
            this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);

            this.currentPlayer = this.player;
        }
    }

    #enemyGridHandler(e) {
        if (this.currentPlayer === this.enemy) {
            return;
        }
        else {
            const cellIndex = this.ui.enemyGridCells.indexOf(e.target);
            const x = Math.floor(cellIndex / 10);
            const y = cellIndex % 10;
            console.log("Enemy grid", {x, y});
            console.log(this.enemy.gameboard.receiveAttack(x, y));
            this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);

            this.currentPlayer = this.enemy;
        }
    }
}