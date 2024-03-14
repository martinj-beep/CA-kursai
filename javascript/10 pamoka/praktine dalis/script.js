// const convertToUpperCase = (string) => {
//     string.toUpperCase();
// }

// const extractSubstring = (text2) => text2.substring(2, 7);

// // Sukurkite funkciją capitalizeFirstLetter, kuri pavertimas pirmąją kiekvieno žodžio raidę tekste į didžiąją.

// // Rezultatas:
// // console.log(capitalizeFirstLetter("labas rytas, pasauli!")); // "Labas Rytas, Pasauli!"

// const captializeFirstLetter = (text3) => text3.


// Parašykite funkciją censorCurseWords, kuri tekste pakeičia nurodytus nepadorius žodžius į "****". Sprendimas turi nenaudoti reguliariųjų išraiškų (angl. Regular expression).

// Rezultatas ir funkcijos kvietimas turėtų atrodyti taip:
// console.log(censorCurseWords("This is a badword and another badword.", ["badword"])); // "This is a **** and another ****."

// 


// Sukurkite kintamąjį milkPrice. Su JS patikrinkite ir išveskite vartotojui alert() ar jam reikės pasiimti smulkių centų, ar nereikės (t.y. ar skaičius sveikas ar ne). 

const milkPrice = (n) => {
    if (Number.isInteger(n)) {
        alert("smulkiu nereikia, " + n.toFixed(2));
    } else {
        alert("smulkiu reikia, " + n.toFixed(2));
    }
}

milkPrice(3.1456);



// Sukurkite funkciją findMax, kuri grąžina didžiausią skaičių iš pateiktų argumentų naudojant Math.max().

// Čia reikės pagalvoti, kaip perduoti arugmentus į findMax funkciją, o vėliau į Math.max(). Čia gali prireikti JavaScript spread operatoriaus.

const findMax = (...numbers) => Math.max(...numbers);

console.log(findMax("1, 3, 5"));