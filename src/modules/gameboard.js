export default class GameBoard {
    constructor() {
        this.board = Array(10)
            .fill(null)
            .map(() => Array(10).fill(null));
    }

    placeShip(ship, x, y, direction) {
        if (direction === "horizontal" && y + ship.getLength() > 10) {
            throw new Error("Ship is out of bounds");
        } else if (direction === "vertical" && x + ship.getLength() > 10) {
            throw new Error("Ship is out of bounds");
        }

        if (direction === "horizontal") {
            for (let i = 0; i < ship.getLength(); i++) {
                this.board[x][y + i] = ship;
            }
        } else if (direction === "vertical") {
            for (let i = 0; i < ship.getLength(); i++) {
                this.board[x + i][y] = ship;
            }
        }
    }

    receiveAttack(x, y) {
        if (x < 0 || x > 9 || y < 0 || y > 9 || this.board[x][y] === "miss") {
            return false;
        }
        if (this.board[x][y] === null) {
            this.board[x][y] = "miss";
            return true;
        } else if (this.board[x][y] !== "hit") {
            this.board[x][y].hit();
            this.board[x][y] = "hit";
            return true;
        }
        else {
            return false;
        }
    }

    allSunk() {
        return this.board
            .flat()
            .filter((ship) => ship !== null)
            .every((ship) => ship.isSunk());
    }
}
