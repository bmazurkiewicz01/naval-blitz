import UI from "./ui";
import AI from "./ai";
import Player from "./player";

export default class GameManager {
    constructor(playerName="Unnamed", enemyName="Enemy") {
        this.player = new Player(playerName);
        this.enemy = new Player(enemyName, "computer");
        this.ui = new UI(this.player);
        this.ai = new AI(this.enemy, this.ui, this.player);
        this.currentPlayer = null;
        this.isGameStarted = false;
    }

    initializeGame() {
        this.ui.renderGrids();
        if (this.enemy.type === "computer") {
            this.ui.createPlayerGridHandler((e) => {e.preventDefault();});
        }
        else {
            this.ui.createPlayerGridHandler(this.#playerGridHandler.bind(this));
        }
        this.ui.createEnemyGridHandler(this.#enemyGridHandler.bind(this));
    
        this.ui.initializeSetupButtons(this.#startGame.bind(this), this.#resetGame.bind(this));
        this.player.placeRandomShips();
        this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
        this.ui.refreshNames(this.player.name, this.enemy.name);
        this.ui.enableShipDragging();
    }

    #checkWinner() {
        if (this.player.gameboard.allSunk()) {
            this.ui.printMessage("You lost! Game over.", false);
            return true;
        }
        else if (this.enemy.gameboard.allSunk()) {
            this.ui.printMessage("You won! Game over.", false);
            return true;
        }
        return false;
    }

    #enemyMakeRandomMove() {
        if (this.isGameStarted && this.currentPlayer === this.enemy) {
            let x, y;
            do {
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
            } while (this.player.gameboard.board[x][y] === "hit" || this.player.gameboard.board[x][y] === "miss");
            this.player.gameboard.receiveAttack(x, y);
            this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
            this.currentPlayer = this.player;
            this.ui.printMessage("Your turn.");
        }
    }

    #playerGridHandler(e) {
        if (this.isGameStarted && this.currentPlayer === this.enemy) {
            const cellIndex = this.ui.playerGridCells.indexOf(e.target);
            const x = Math.floor(cellIndex / 10);
            const y = cellIndex % 10;
            this.player.gameboard.receiveAttack(x, y);
            this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
            if (this.#checkWinner()) {
                return;
            }
            this.currentPlayer = this.player;
            this.ui.printMessage("Your turn.");
        }
    }

    #enemyGridHandler(e) {
        if (this.isGameStarted && this.currentPlayer === this.player) {
            const cellIndex = this.ui.enemyGridCells.indexOf(e.target);
            const x = Math.floor(cellIndex / 10);
            const y = cellIndex % 10;
            if(this.enemy.gameboard.receiveAttack(x, y)) {
                this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
                this.currentPlayer = this.enemy;
                if (this.#checkWinner()) {
                    return;
                }
                this.ui.printMessage("Enemy's turn.");
                this.ai.makeSmartMove();
                this.currentPlayer = this.player;
                // setTimeout(this.#enemyMakeRandomMove.bind(this), 1000 + Math.floor(Math.random() * 1500));
            }
            else {
                this.ui.printMessage("Invalid move. Try again.", true);
            }
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
        this.ui.disableShipDragging();
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