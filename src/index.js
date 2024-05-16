import "./style.css";
import UI from "./modules/ui";
import Player from "./modules/player";

const player = new Player();
const enemy = new Player("Enemy", "computer");

const ui = new UI();
ui.renderGrids();

const playerGridHandler = (e) => {
    const cellIndex = ui.playerGridCells.indexOf(e.target);
    const x = Math.floor(cellIndex / 10);
    const y = cellIndex % 10;
    console.log("Player grid", {x, y});
}

const enemyGridHandler = (e) => {
    const cellIndex = ui.enemyGridCells.indexOf(e.target);
    const x = Math.floor(cellIndex / 10);
    const y = cellIndex % 10;
    console.log("Enemy grid", {x, y});
    console.log(enemy.gameboard.receiveAttack(x, y));
    ui.refreshGrids(player.gameboard, enemy.gameboard);
}

ui.createPlayerGridHandler(playerGridHandler);
ui.createEnemyGridHandler(enemyGridHandler);

player.placeRandomShips();
enemy.placeRandomShips();

ui.refreshGrids(player.gameboard, enemy.gameboard);

