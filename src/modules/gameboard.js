import Battleship from "./battleship";

export default class GameBoard {
    constructor(board=null) {
        this.board = board === null ? Array(10)
        .fill(null)
        .map(() => Array(10).fill(null)) : board;
    }

    placeShip(ship, x, y, direction) {
        if (direction === "horizontal" && y + ship.getLength() > 10) {
            throw new Error("Ship is out of bounds");
        } else if (direction === "vertical" && x + ship.getLength() > 10) {
            throw new Error("Ship is out of bounds");
        }

        if (!this.#checkIfCellIsNotOccupied(x, y, ship.getLength(), direction)) {
            throw new Error("Cell is occupied");
        }

        if (!this.#checkIfShipIsNotAdjacent(x, y, ship.getLength(), direction)) {
            throw new Error("Ships are adjacent");
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

    checkIfShipCanBePlaced(ship, x, y, direction) {
        if (ship === null) {
            return false;
        }

        if (direction === "horizontal" && y + ship.getLength() > 10) {
            return false;
        } else if (direction === "vertical" && x + ship.getLength() > 10) {
            return false;
        }

        if (!this.#checkIfCellIsNotOccupied(x, y, ship.getLength(), direction)) {
            return false;
        }

        if (!this.#checkIfShipIsNotAdjacent(x, y, ship.getLength(), direction)) {
            return false;
        }

        return true;
    }

    removeShip(ship) {
        if (ship === null) {
            return;
        }
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.board[i][j] !== null && this.board[i][j].name == ship.name) {
                    this.board[i][j] = null;
                }
            }
        }
    }

    getShipByName(shipName) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.board[i][j] !== null && this.board[i][j].name == shipName) {
                    return this.board[i][j];
                }
            }
        }
        return null;
    }

    deepCopyBoard(board) {
        const newBoard = Array(10).fill(null).map(() => Array(10).fill(null));
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = board[i][j];
                if (cell instanceof Battleship) {
                    newBoard[i][j] = new Battleship(cell.getLength(), cell.name, cell.getHits(), cell.isSunk(), cell.direction);
                } else {
                    newBoard[i][j] = cell;
                }
            }
        }
        return newBoard;
    }

    #checkIfCellIsNotOccupied(x, y, length, direction) {
        if (direction === "horizontal") {
            for (let i = 0; i < length; i++) {
                if (this.board[x][y + i] !== null) {
                    return false; 
                }
            }
        } else if (direction === "vertical") {
            for (let i = 0; i < length; i++) {
                if (this.board[x + i][y] !== null) {
                    return false; 
                }
            }
        }
        return true; 
    }
    

    #checkIfShipIsNotAdjacent(x, y, length, direction) {
        const boardSize = 10;
    
        let checkRangeX, checkRangeY;
        if (direction === "horizontal") {
            checkRangeX = [Math.max(0, x - 1), Math.min(boardSize - 1, x + 1)];
            checkRangeY = [Math.max(0, y - 1), Math.min(boardSize - length, y + length)];
        } else if (direction === "vertical") {
            checkRangeX = [Math.max(0, x - 1), Math.min(boardSize - length, x + length)];
            checkRangeY = [Math.max(0, y - 1), Math.min(boardSize - 1, y + 1)];
        }
    
        for (let i = checkRangeX[0]; i <= checkRangeX[1]; i++) {
            for (let j = checkRangeY[0]; j <= checkRangeY[1]; j++) {
                if (i === x && j === y) {
                    continue;
                }
                if (i < 0 || i >= boardSize || j < 0 || j >= boardSize) {
                    continue;
                }
                if (this.board[i][j] !== null) {
                    return false; 
                }
            }
        }
        return true; 
    }
    

    receiveAttack(x, y) {
        if (x < 0 || x > 9 || y < 0 || y > 9 || this.board[x][y] === "miss") {
            return false;
        }
        if (this.board[x][y] === null) {
            this.board[x][y] = "miss";
            return this.board[x][y];
        } else if (this.board[x][y] !== "hit") {
            this.board[x][y].hit();
            this.board[x][y] = "hit";
            return this.board[x][y];
        }
        else {
            return false;
        }
    }

    allSunk() {
        return this.board
            .flat()
            .filter((ship) => ship !== null && ship !== "miss" && ship !== "hit")
            .every((ship) => ship.isSunk());
    }

    resetBoard() {
        this.board = Array(10)
            .fill(null)
            .map(() => Array(10).fill(null));
    }
}
