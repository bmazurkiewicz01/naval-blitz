import Player from "../src/modules/player";

describe("Player", () => {
    test("Player is a class", () => {
        expect(typeof Player.prototype.constructor).toEqual("function");
    });
    test("Player has a gameboard property", () => {
        const player = new Player();
        expect(player.gameboard).toBeDefined();
    });
    test("Player has a ships property", () => {
        const player = new Player();
        expect(player.ships).toBeDefined();
    });
    test("Player placeShip method calls gameboard placeShip method with correct arguments", () => {
        const player = new Player();
        const placeShipMock = jest.fn().mockReturnValue(true);
        player.gameboard = { placeShip: placeShipMock};

        expect(player.placeShip("carrier", 0, 0, "horizontal")).toEqual(true);
        expect(placeShipMock).toHaveBeenCalledTimes(1);
        expect(placeShipMock).toHaveBeenCalledWith(player.ships.carrier, 0, 0, "horizontal");
    });
    test("Player placeShip method calls gameboard placeShip method with correct arguments, but the ship cannot be placed", () => {
        const player = new Player();
        const placeShipMock = jest.fn().mockReturnValue(false);
        player.gameboard = { placeShip: placeShipMock};

        expect(player.placeShip("carrier", 0, 0, "horizontal")).toEqual(false);
        expect(placeShipMock).toHaveBeenCalledTimes(1);
        expect(placeShipMock).toHaveBeenCalledWith(player.ships.carrier, 0, 0, "horizontal");
    });
    test("Player placeShip method called with invalid ship name", () => {
        const player = new Player();
        expect(() => {
            player.placeShip("invalid", 0, 0, "horizontal");
        }).toThrow("Invalid ship name");
    });
});