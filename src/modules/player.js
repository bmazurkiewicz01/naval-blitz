import GameBoard from "./gameboard";
import BattleShip from "./battleship";

export default class Player {
    constructor(name="Unnamed", type="human") {
        this.name = name;
        this.type = type;
        this.gameboard = new GameBoard();
        this.ships = {
            carrier: new BattleShip(5),
            battleship: new BattleShip(4),
            cruiser: new BattleShip(3),
            submarine: new BattleShip(3),
            destroyer: new BattleShip(2)
        };
    }

    placeShip(shipName, x, y, direction) {
        if (!this.ships[shipName]) {
            throw new Error("Invalid ship name");
        }

        return this.gameboard.placeShip(this.ships[shipName], x, y, direction);
    }
}