import GameBoard from "../src/modules/gameboard";

describe("GameBoard", () => {
    test("GameBoard is a class", () => {
        expect(typeof GameBoard.prototype.constructor).toEqual("function");
    });
    test("GameBoard has a board property", () => {
        const gameboard = new GameBoard();
        expect(gameboard.board).toEqual(Array(10).fill(null).map(() => Array(10).fill(null)));
    });
    test("GameBoard placeShip method places ship horizontally", () => {
        const gameboard = new GameBoard();
        const ship = { getLength: () => 3 };
        gameboard.placeShip(ship, 0, 0, "horizontal");
        expect(gameboard.board[0][0]).toEqual(ship);
        expect(gameboard.board[0][1]).toEqual(ship);
        expect(gameboard.board[0][2]).toEqual(ship);
    });
    test("GameBoard placeShip method places ship vertically", () => {
        const gameboard = new GameBoard();
        const ship = { getLength: () => 3 };
        gameboard.placeShip(ship, 0, 0, "vertical");
        expect(gameboard.board[0][0]).toEqual(ship);
        expect(gameboard.board[1][0]).toEqual(ship);
        expect(gameboard.board[2][0]).toEqual(ship);
    });
    test("GameBoard receiveAttack method records a miss", () => {
        const gameboard = new GameBoard();
        gameboard.receiveAttack(0, 0);
        expect(gameboard.board[0][0]).toEqual("miss");
    });
    test("GameBoard receiveAttack method records a hit", () => {
        const gameboard = new GameBoard();
        const ship = { hit: jest.fn() };
        gameboard.board[0][0] = ship;
        gameboard.receiveAttack(0, 0);
        expect(ship.hit).toHaveBeenCalled();
    });
    test("GameBoard allSunk method returns false if not all ships are sunk", () => {
        const gameboard = new GameBoard();
        const ship = { isSunk: () => false };
        gameboard.board[0][0] = ship;
        expect(gameboard.allSunk()).toEqual(false);
    });
    test("GameBoard allSunk method returns true if all ships are sunk", () => {
        const gameboard = new GameBoard();
        const ship = { isSunk: () => true };
        gameboard.board[0][0] = ship;
        expect(gameboard.allSunk()).toEqual(true);
    });
});