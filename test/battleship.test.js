import Battleship from '../src/modules/battleship';

describe('Battleship', () => {
    test('Battleship is a class', () => {
        expect(typeof Battleship.prototype.constructor).toEqual('function');
    });
    test('Battleship has default hits and sunk properties', () => {
        const battleship = new Battleship(4);
        expect(battleship.getHits()).toEqual(0);
        expect(battleship.isSunk()).toEqual(false);
    });
    test('Battleship length property is set', () => {
        const battleship = new Battleship(4);
        expect(battleship.getLength()).toEqual(4);
    });
    test('Battleship isSunk method returns true if hits equals length', () => {
        const battleship = new Battleship(4);
        battleship.hit();
        battleship.hit();
        battleship.hit();
        battleship.hit();
        expect(battleship.isSunk()).toEqual(true);
    });
    test('Battleship hit method increments hits', () => {
        const battleship = new Battleship(4);
        battleship.hit();
        expect(battleship.getHits()).toEqual(1);
    });
    test('Battleship has not enough hits to be sunk', () => {
        const battleship = new Battleship(3);
        battleship.hit();
        battleship.hit();
        expect(battleship.isSunk()).toEqual(false);
    });
});