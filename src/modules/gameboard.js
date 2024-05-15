export default class GameBoard {
    constructor() {
        this.board = Array(10).fill(null).map(() => Array(10).fill(null));
    }

    placeShip(ship, x, y, direction) {
        if (direction === 'horizontal') {
            for (let i = 0; i < ship.getLength(); i++) {
                this.board[x][y + i] = ship;
            }
        } else if (direction === 'vertical') {
            for (let i = 0; i < ship.getLength(); i++) {
                this.board[x + i][y] = ship;
            }
        }
    }

    receiveAttack(x, y) {
        if (this.board[x][y] === null) {
            this.board[x][y] = 'miss';
        } else {
            this.board[x][y].hit();
        }
    }

    allSunk() {
        return this.board.flat().filter(ship => ship !== null).every(ship => ship.isSunk());
    }
}