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
    test("Try to place ship outside of board", () => {
        const gameboard = new GameBoard();
        const ship = { getLength: () => 3 };
        expect(() => {
            gameboard.placeShip(ship, 0, 8, "horizontal");
        }).toThrow("Ship is out of bounds");
    });
    test("GameBoard receiveAttack method records a miss", () => {
        const gameboard = new GameBoard();
        expect(gameboard.receiveAttack(0, 0)).toEqual(true);
        expect(gameboard.board[0][0]).toEqual("miss");
    });
    test("GameBoard receiveAttack method records a hit", () => {
        const gameboard = new GameBoard();
        const ship = { hit: jest.fn() };
        gameboard.board[0][0] = ship;
        expect(gameboard.receiveAttack(0, 0)).toEqual(true);
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
    test("Try to receive attack out of bounds", () => {
        const gameboard = new GameBoard();
        expect(gameboard.receiveAttack(-1, 0)).toEqual(false);
    });
    test("Try to hit a cell that has already been hit", () => {
        const gameboard = new GameBoard();
        gameboard.receiveAttack(0, 0);
        expect(gameboard.receiveAttack(0, 0)).toEqual(false);
    });
    test("Try to hit a cell that has a sunk ship", () => {
        const gameboard = new GameBoard();
        const ship = { hit: jest.fn(), getLength: () => 1  };
        gameboard.board[0][0] = ship;
        gameboard.receiveAttack(0, 0);
        expect(gameboard.receiveAttack(0, 0)).toEqual(false);
    });
});