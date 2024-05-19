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
        const placeShipMock = jest.fn();
        player.gameboard = { placeShip: placeShipMock};

        expect(player.placeShip("carrier", 0, 0, "horizontal")).toEqual(true);
        expect(placeShipMock).toHaveBeenCalledTimes(1);
        expect(placeShipMock).toHaveBeenCalledWith(player.ships.carrier.ship, 0, 0, "horizontal");
    });
    test("Player placeShip method called with invalid ship name", () => {
        const player = new Player();
        expect(() => {
            player.placeShip("invalid", 0, 0, "horizontal");
        }).toThrow("Invalid ship name");
    });
});