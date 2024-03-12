// Parašykite funkciją convertMStoKMH, kuri konvertuoja greitį iš metrų per sekundę į kilometrus per valandą.

// Rezultatas
// console.log(convertMStoKMH(10)); // 36

// const convertMStoKMH = (speed) => speed * 3.6;

// console.log(convertMStoKMH(120));


// Parašykite funkciją compareNumber, kuri palygina du skaičius ir grąžina didesnįjį iš jų. Jei skaičiai yra lygūs, funkcija turėtų grąžinti "lygūs". Įsitikinkite, kad abu argumentai yra skaičiai; jei ne, grąžinkite klaidos pranešimą.

// Rezultatas
// console.log(compareNumber(4, 7)); // 7
// console.log(compareNumber(5, 5)); // "equal"
// console.log(compareNumber("5", 5)); // "Error: most arguments must be numbers"

// const compareNumber = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return "Error: most arguments must be numbers";
//     }
//     if (a === b) {
//         return "equal";
//     }
//     return a > b ? a : b;
// };

// console.log(compareNumber(14, 15));


// Parašykite funkciją isLeapYear, kuri priima year ir pasako ar metai yra keliamieji. Funkcija turi grąžinti true, jei metai keliamieji, ir false priešingu atveju.

// Rezultatas
// console.log(arKeliamieji(2020)); // true
// console.log(arKeliamieji(2021)); // false

// const isLeapYear = (num) => {
//     if (typeof num === "number") {
//         if (num % 4 === 0) {
//             return true
//         } else {
//             return false
//         }
//     } else {
//         return "iveskite skaiciu"
//     }
// }

// console.log(isLeapYear());


// Parašykite funkciją findMaxInArray, kuri ras ir grąžins didžiausią elementą masyve. Galime daryti prielaidą, kad visi array elementai yra skaičiai.

// Rezultatas
// console.log(findMaxInArray([1, 3, 2, 5, 4])); // 5
// console.log(findMaxInArray([-1, -3, -2, -5, -4])); // -1


// const findMaxInArray = (arr) => {
//     let max = arr[0]; // susikuriam kintamaji, kurio verte bus pats pirmas elementas duotame arejuje, nuo kurio bus pradedama lyginti kitus arejaus elementus
//     for (let i = 1; i < arr.length; i++) { // bus pradeti lyginti pirmieji arejaus elementai
//         if (arr[i] > max) { // jeigu arejaus elementas bus didesnes vertes nei esamas arejaus elementas kintamajame "max", jo verte (arejaus skaicius) bus pakeistas tuo arejaus elementu, kuris bus didesnis uz esama max
//             max = arr[i];
//         }
//     }
//     return max;
// };



// Parašykite funkciją sumArray, kuri suskaičiuoja ir grąžina visų elementų sumą masyve. Kaip ir užduotyje prieš tai, galime daryti prielaidą, kad visi array elementai yra skaičiai.

// Rezultatas
// console.log(sumArray([1, 2, 3, 4, 5])); // 15

// const sumArray = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum
// }

// console.log(sumArray([1, 5, 78, 4]));



// Sukurkite funkciją arMasyvaiLygūs, kuri palygina du masyvus ir grąžina true, jei jie yra identiški, kitu atveju - false.

// Rezultatas
// console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
// console.log(areArraysEqual([1, 2, 3], [1, 2, 4])); // false

// const arMasyvaiLygūs = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     for (let index = 0; index < arr1.length; index++) {
//         if (arr1[index] !== arr2[index]) {
//             return false
//         } 
//         } 
//         return true 
// }

// console.log(arMasyvaiLygūs([1, 2, 3], [1, 2, 3]));



// Sukurkite funkciją reverseString, kuri apverčia eilutę be jokių išorinių funkcijų ar metodų.

// Rezultatas
// console.log(reverseString("Labas")); // "sabaL"

// const reverseString = (string) => {
//     let reversed = "";
//     for (let index = string.length -1; index >= 0; index--) {
//         reversed += string[index]
//     }
//     return reversed
// }

// console.log(reverseString("big"));


// Parašykite funkciją arPalindromas, kuri tikrina, ar žodis yra palindromas. Funkcija turi grąžinti true, jei žodis yra palindromas, priešingu ateju  - false.

// Rezultatas
// console.log(isPalindrome("savas")); // true
// console.log(isPalindrome("svetimas")); // false

 

// Hint: Palindromas - (gr. palindromos - bėgantis atgal, grįžtantis): 1. žodis, eilėraštis arba frazė, skaitomi iš kairės į dešinę ir iš dešinės į kairę, išlaikantys tą pačią prasmę, pvz., lietuvių k. žodis savas.

const arPalindromas = (str) => {
    
}