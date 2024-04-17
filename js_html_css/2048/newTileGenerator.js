export function newTileGenerator() {
    // Generate two random numbers between 0 and 1
    const randomNumber = Math.random();

    // Set the default tile values to 2
    let tileValue = 2;

    // If the random number is less than 0.1 (10% chance), set tile value to 4
    if (randomNumber < 0.1) {
        tileValue = 4;
    }

    return tileValue;
}