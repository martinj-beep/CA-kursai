export function updateTile(tile, num) {
    tile.innerText = "";
    tile.classList.value = ""; // isvalys plyteles klases reiksme
    tile.classList.add("tile");
    if (num > 0) {
        tile.innerText = num;
        if (num <= 4096) { // if the class number is lower or equal to 4096, then this if will add a specific class number to the class code
            tile.classList.add("x" + num.toString());
        } else { // if all if's do not meet the conditions, then the class of 8192 will be added, meaning that tiles with higher values from 8192 will have the same style applied to them
            tile.classList.add("x8192")
        }
    }
}