import GameBoard from "./gameboard";

export default class UI {
    constructor(player) {
        this.gameContainer = document.querySelector(".game-container");
        this.playerGrid = document.querySelector("#player-grid");
        this.enemyGrid = document.querySelector("#enemy-grid");
        this.playerGridCells = [];
        this.enemyGridCells = [];
        this.player = player;
        this.tempGameBoard = null;
    }

    createGrid(grid, cells) {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");
            cell.dataset.index = i;
            cell.setAttribute('draggable', false);
            grid.appendChild(cell);
            cells.push(cell);
        }
    }

    createPlayerGridHandler(callback) {
        this.playerGrid.addEventListener("click", callback);
    }

    createEnemyGridHandler(callback) {
        this.enemyGrid.addEventListener("click", callback);
    }

    renderGrids() {
        this.createGrid(this.playerGrid, this.playerGridCells);
        this.createGrid(this.enemyGrid, this.enemyGridCells);
    }

    getPlayerGridCell(x, y) {
        return this.playerGridCells[x * 10 + y];
    }

    getEnemyGridCell(x, y) {
        return this.enemyGridCells[x * 10 + y];
    }

    refreshGrids(playerGameBoard, enemyGameBoard=null, hideEnemyShips=true) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const playerCell = this.getPlayerGridCell(i, j);
                playerCell.classList.remove("ship", "hit", "miss");
                if (playerGameBoard.board[i][j] === "hit") {
                    playerCell.classList.add("hit");
                } else if (playerGameBoard.board[i][j] === "miss") {
                    playerCell.classList.add("miss");
                } else if (playerGameBoard.board[i][j] !== null) {
                    playerCell.classList.add("ship");
                    playerCell.dataset.length = playerGameBoard.board[i][j].length;
                    playerCell.dataset.direction = playerGameBoard.board[i][j].direction;
                    playerCell.dataset.name = playerGameBoard.board[i][j].name;
                }

                if (enemyGameBoard != null)
                {
                    const enemyCell = this.getEnemyGridCell(i, j);
                    enemyCell.classList.remove("ship", "hit", "miss");
                    if (enemyGameBoard.board[i][j] === "hit") {
                        enemyCell.classList.add("hit");
                    } else if (enemyGameBoard.board[i][j] === "miss") {
                        enemyCell.classList.add("miss");
                    } else if (enemyGameBoard.board[i][j] !== null && hideEnemyShips === false) {
                        enemyCell.classList.add("ship");
                    }
                }
            }
        }
    }

    initializeSetupButtons(startCallback, resetCallback) {
        const startButton = document.getElementById("start-button");
        const resetButton = document.getElementById("reset-button");

        startButton.addEventListener("click", startCallback);
        resetButton.addEventListener("click", resetCallback);
    }

    toggleStartButton(isVisible) {
        const startButton = document.getElementById("start-button");
        startButton.style.display = isVisible ? "block" : "none";
        startButton.style.opacity = isVisible ? 1 : 0;
    }

    printMessage(message, error) {
        const messageElement = document.querySelector(".message");
        messageElement.textContent = message;

        if (error) {
            messageElement.classList.add("error");
        } else {
            messageElement.classList.remove("error");
        }
    }

    refreshNames(playerName, enemyName) {
        const playerTitle = document.querySelector("#player-title");
        const enemyTitle = document.querySelector("#enemy-title");

        playerTitle.textContent = playerName;
        enemyTitle.textContent = enemyName;
    }

    eventDisabler(event) {
        event.preventDefault();
    }

    disableShipDragging() {
        this.playerGridCells.forEach(cell => {
            cell.setAttribute('draggable', false);
            cell.removeEventListener('dragstart', this.handleDragStart.bind(this));
            cell.removeEventListener('dragend', this.handleDragEnd.bind(this));
            cell.removeEventListener('dragover', this.handleDragOver.bind(this));
            cell.removeEventListener('drop', this.handleDrop.bind(this));

            cell.addEventListener('dragstart', this.eventDisabler);
            cell.addEventListener('dragend', this.eventDisabler);
            cell.addEventListener('dragover', this.eventDisabler);
            cell.addEventListener('drop', this.eventDisabler);
        });
    }

    enableShipDragging() {
        const ships = this.playerGrid.querySelectorAll('.ship');
        ships.forEach(ship => this.makeDraggable(ship));

        this.playerGridCells.forEach(cell => {
            cell.removeEventListener('dragstart', this.eventDisabler);
            cell.removeEventListener('dragend', this.eventDisabler);
            cell.removeEventListener('dragover', this.eventDisabler);
            cell.removeEventListener('drop', this.eventDisabler);
            cell.removeEventListener('dragover', this.handleDragOver.bind(this));
            cell.removeEventListener('drop', this.handleDrop.bind(this));

            cell.addEventListener('dragover', this.handleDragOver.bind(this));
            cell.addEventListener('drop', this.handleDrop.bind(this));
        });
    }

    enableSingleShipDragging(shipName) {
        const ships = this.playerGrid.querySelectorAll(`.ship[data-name="${shipName}"]`);
        ships.forEach(ship => this.makeDraggable(ship));
    }

    makeDraggable(ship) {
        ship.setAttribute('draggable', true);
        ship.removeEventListener('dragstart', this.eventDisabler);
        ship.removeEventListener('dragend', this.eventDisabler);
        ship.removeEventListener('dragstart', this.handleDragStart.bind(this));
        ship.removeEventListener('dragend', this.handleDragEnd.bind(this));
        ship.addEventListener('dragstart', this.handleDragStart.bind(this));
        ship.addEventListener('dragend', this.handleDragEnd.bind(this));
    }

    handleDragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.dataset.index);
        this.tempGameBoard = new GameBoard(this.player.gameboard.deepCopyBoard(this.player.gameboard.board));
        setTimeout(() => {
            event.target.classList.add('hide');
        }, 0);
    }

    handleDragEnd(event) {
        event.target.classList.remove('hide');
    }

    handleDragOver(event) {
        event.preventDefault();
    }

    handleDrop(event) {
        event.preventDefault();
        const shipId = event.dataTransfer.getData('text/plain');
        const ship = this.playerGrid.querySelector(`.ship[data-index="${shipId}"]`)
        const cellIndex = event.target.dataset.index;
        const x = Math.floor(cellIndex / 10);
        const y = cellIndex % 10;

        if (!ship || (x * 10 + y) == shipId) {
            return;
        }

        const shipDirection = ship.dataset.direction;
        const shipToBePlaced = this.tempGameBoard.getShipByName(ship.dataset.name);

        this.tempGameBoard.removeShip(shipToBePlaced);

        if (this.tempGameBoard.checkIfShipCanBePlaced(shipToBePlaced, x, y, shipDirection)) {
            try {
                this.player.removeShip(ship.dataset.name);
    
                if (this.player.placeShip(ship.dataset.name, x, y, shipDirection)) {
                    this.refreshGrids(this.player.gameboard);
                    this.printMessage("Ship placed correctly", false);
                    this.enableSingleShipDragging(ship.dataset.name);
                }
                else {
                    this.printMessage("Invalid placement. Please try again.", true);
    
                }
            } catch (error) {
                this.printMessage(error.message, true);
            }
        } else {
            this.printMessage("Invalid placement. Please try again", true);
        }

    }
}
