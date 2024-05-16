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

        try {
            this.gameboard.placeShip(this.ships[shipName], x, y, direction);
            return true;
        }
        catch (e) {
            return false;
        }

    }

    placeRandomShips() {
        for (let ship in this.ships) {
            let placed = false;
            while (!placed) {
                let x = Math.floor(Math.random() * 10);
                let y = Math.floor(Math.random() * 10);
                let direction = Math.random() < 0.5 ? "horizontal" : "vertical";
                try {
                    placed = this.placeShip(ship, x, y, direction);
                } catch (e) {
                    placed = false;
                }
            }
        }
    }
}