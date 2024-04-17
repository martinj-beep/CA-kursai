export function newGameTiles() {
    // Generate two random numbers between 0 and 1
    const randomNumber1 = Math.random();
    const randomNumber2 = Math.random();

    // Set the default tile values to 2
    let tileValue1 = 2;
    let tileValue2 = 2;

    // If the random number is less than 0.1 (10% chance), set tile value to 4
    if (randomNumber1 < 0.1) {
        tileValue1 = 4;
    }

    if (randomNumber2 < 0.1) {
        tileValue2 = 4;
    }

    return [tileValue1, tileValue2];

}
