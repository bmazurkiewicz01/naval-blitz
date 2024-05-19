export default class Battleship {
    constructor(length, name="unnamed", hits=0, sunk=false, direction="horizontal") {
        this.length = length;
        this.hits = hits;
        this.name = name;
        this.sunk = sunk;
        this.direction = direction;
    }

    hit() {
        this.hits++;
        if (this.hits === this.length) {
            this.sunk = true;
        }
    }

    isSunk() {
        return this.sunk;
    }

    getLength() {
        return this.length;
    }

    getHits() {
        return this.hits;
    }

    setDirection(direction) {
        this.direction = direction;
    }
};