import { newGameTiles } from "./newGameTiles.js";
import { newTileGenerator } from "./newTileGenerator.js";
import { updateTile } from "./updateTile.js";

// 17 minute

let board;
let score = 0;
let rows = 4;
let columns = 4;

window.onload = function() {
    setGame();
}

function setGame() {
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
        let tile = document.createElement("div")
        tile.id = r.toString() + "-" + c.toString();
        let num = board[r][c];
        updateTile(tile, num);
        document.getElementById("board").append(tile);
    }
        
}
}

