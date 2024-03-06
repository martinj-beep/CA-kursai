// alert("my argument") // alert irgi yra funkcija

// function name(argument) {
//     alert(argument)
// }

// name("Martynas")


// function generateRandomNumber() {
//     return Math.floor(Math.random() * 5) + 1;
//   }
//   generateRandomNumber();

// function sumOfWords(name, surname) {
//     return name.length + surname.length
// }

// console.log(sumOfWords("Martynas", "Jakutis"));

// let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// function converter(params) {
//     return alphabet[params]
// }

// console.log(converter(6));

// Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti sum, sub, div, multi (matematinės reikšmės – sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9 ir t.t.).

// Hint: Reikės funkcijoje naudoti if...else arba switch.
// Operator gali būti sum, sub, div, multi (matematinės reikšmės – sudėti, atimti, padalinti, padauginti)

// function myFunction(n1, n2, operator) {
//     if (typeof n1 === "number" && typeof n2 === "number" && typeof operator === "string") {
//         if (operator === "sum") {
//             return n1 + n2
//         } else if (operator === "sub") {
//             return n1 - n2
//         } else if (operator === "div") {
//             return n1 / n2
//         } else if (operator === "multi") {
//             return n1 * n2
//         } 
//     } else {
//         alert("BLOGOS REIKSMES")
//     }
// }

// console.log(myFunction(13, 21, "div"));


// Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita – gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).


function generateRandomNumber() {
    return Math.floor(Math.random() * 10 + 1);
  }
  
function squareNum(number) {
    return Math.pow(number, 2);
}
  
squareNum(generateRandomNumber());