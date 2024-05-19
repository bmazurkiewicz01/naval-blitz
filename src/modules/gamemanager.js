import UI from "./ui";
import Player from "./player";

export default class GameManager {
    constructor(playerName="Unnamed", enemyName="Enemy") {
        this.player = new Player(playerName);
        this.enemy = new Player(enemyName, "computer");
        this.ui = new UI(this.player);
        this.currentPlayer = null;
        this.isGameStarted = false;
    }

    initializeGame() {
        this.ui.renderGrids();
        this.ui.createPlayerGridHandler(this.#playerGridHandler.bind(this));
        this.ui.createEnemyGridHandler(this.#enemyGridHandler.bind(this));
        this.ui.initializeSetupButtons(this.#startGame.bind(this), this.#resetGame.bind(this));
        this.player.placeRandomShips();
        this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
        this.ui.refreshNames(this.player.name, this.enemy.name);
        this.ui.enableShipDragging();
    }

    #playerGridHandler(e) {
        if (this.isGameStarted && this.currentPlayer === this.enemy) {
            const cellIndex = this.ui.playerGridCells.indexOf(e.target);
            const x = Math.floor(cellIndex / 10);
            const y = cellIndex % 10;
            console.log(this.player.gameboard.receiveAttack(x, y));
            this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
            this.currentPlayer = this.player;
            this.ui.printMessage("Your turn.");
        }
    }

    #enemyGridHandler(e) {
        if (this.isGameStarted && this.currentPlayer === this.player) {
            const cellIndex = this.ui.enemyGridCells.indexOf(e.target);
            const x = Math.floor(cellIndex / 10);
            const y = cellIndex % 10;
            console.log(this.enemy.gameboard.receiveAttack(x, y));
            this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
            this.currentPlayer = this.enemy;
            this.ui.printMessage("Enemy's turn.");
        }
    }

    #startGame() {
        if (this.isGameStarted) {
            this.ui.printMessage("Game already started", true);
            return;
        }
        else if (!this.player.areShipsPlaced()) {
            this.ui.printMessage("Not all ships are placed.", true);
            return;
        }
        
        this.isGameStarted = true;
        this.currentPlayer = this.player;
        this.enemy.placeRandomShips();
        this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
        this.ui.toggleStartButton(false);
        this.ui.printMessage("Game started! Your turn.");
    }

    #resetGame() {
        if (this.isGameStarted) {
            this.ui.toggleStartButton(true);
        }

        this.isGameStarted = false;
        this.currentPlayer = null;
        this.player.gameboard.resetBoard();
        this.enemy.gameboard.resetBoard();
        this.player.resetShips();
        this.enemy.resetShips();
        this.ui.printMessage("Game was restarted. Please place your ships...");
        this.ui.refreshNames(this.player.name, this.enemy.name);
        this.player.placeRandomShips();
        this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
        this.ui.enableShipDragging();
    }
}