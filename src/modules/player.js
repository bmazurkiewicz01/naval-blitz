import GameBoard from "./gameboard";
import BattleShip from "./battleship";

export default class Player {
    constructor(name="Unnamed", type="human") {
        this.name = name;
        this.type = type;
        this.gameboard = new GameBoard();
        this.ships = {
            carrier: {
                ship: new BattleShip(5),
                placed: false

            },
            battleship: {
                ship: new BattleShip(4),
                placed: false
            },
            cruiser: {
                ship: new BattleShip(3),
                placed: false
            },
            submarine: {
                ship: new BattleShip(3),
                placed: false
            }, 
            destroyer: {
                ship: new BattleShip(2),
                placed: false
            }
        };
    }

    placeShip(shipName, x, y, direction) {
        if (!this.ships[shipName]) {
            throw new Error("Invalid ship name");
        }

        try {
            this.gameboard.placeShip(this.ships[shipName].ship, x, y, direction);
            this.ships[shipName].placed = true;
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
                    placed = this.placeShip(ship, x, y, direction);;
                } catch (e) {
                    placed = false;
                }
            }
        }
    }

    areShipsPlaced() {
        for (let ship in this.ships) {
            if (!this.ships[ship].placed) {
                return false;
            }
        }
        return true;
    }

    resetShips() {
        for (let ship in this.ships) {
            this.ships[ship].placed = false;
        }
    }
}