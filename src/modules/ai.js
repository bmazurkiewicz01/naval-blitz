import Battleship from "./battleship";
export default class AI {
    constructor(enemy, ui, player) {
        this.enemy = enemy;
        this.ui = ui;
        this.player = player;
        this.pendingAttacks = [];
        this.duringMove = false;
    }

    makeSmartMove() {
        let x, y;
        if (this.pendingAttacks.length > 0) {
            const [lastHitX, lastHitY] = this.pendingAttacks[0];
            const directions = [
                [lastHitX - 1, lastHitY], 
                [lastHitX + 1, lastHitY], 
                [lastHitX, lastHitY - 1], 
                [lastHitX, lastHitY + 1]  
            ];

            for (let [adjX, adjY] of directions) {
                if (this.#isValidAttack(adjX, adjY)) {
                    x = adjX;
                    y = adjY;
                    break;
                }
            }

            if (x === undefined || y === undefined) {
                this.pendingAttacks.shift(); 
                this.makeSmartMove(); 
                return;
            }
        } else {
            do {
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
            } while (this.player.gameboard.board[x][y] === "hit" || this.player.gameboard.board[x][y] === "miss");
        }

        let shipName = null;
        if (this.player.gameboard.board[x][y] instanceof Battleship) {
            shipName = this.player.gameboard.board[x][y].name;
        }

        const hitSuccessful = this.player.gameboard.receiveAttack(x, y);
        if (hitSuccessful === "hit") {
            this.pendingAttacks.push([x, y]);
        }

        this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);

        if (shipName !== null) {
            if (this.player.ships[shipName].ship.isSunk()) {
                this.ui.markSunkShip(this.player.ships[shipName].ship, true);
            }
        }

        this.ui.printMessage("Your turn.");
        this.duringMove = false;
    }

    makeRandomMove() {
        let x, y;
        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        } while (this.player.gameboard.board[x][y] === "hit" || this.player.gameboard.board[x][y] === "miss");

        this.player.gameboard.receiveAttack(x, y);
        this.ui.refreshGrids(this.player.gameboard, this.enemy.gameboard);
        this.ui.printMessage("Your turn.");
    }

    #isValidAttack(x, y) {
        return x >= 0 && x < 10 && y >= 0 && y < 10 && this.player.gameboard.board[x][y] !== "hit" && this.player.gameboard.board[x][y] !== "miss";
    }
}
