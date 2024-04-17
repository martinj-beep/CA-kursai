import { newGameTiles } from "./newGameTiles.js";
import { newTileGenerator } from "./newTileGenerator.js";

const board;

console.log(newGameTiles());
console.log(newTileGenerator());

window.onload = function setGame() {
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
            updateTile(title, num);
        }
        
    }
}

function updateTile(title, num) {
    
    // 14;40 video
}