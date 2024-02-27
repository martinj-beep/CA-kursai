const vienas = 10;
const du = 5;
console.log(vienas + du);

let year = 2023;
year -= 25;
console.log(year);

let name = "Martynas";
name += "Jakutis";
console.log(name);

let celc = 10;
let faren = celc * 33.8;
console.log(faren);

let balance = 999.99;
balance += balance * 0.09;
balance *= 2;
balance -= 50;

console.log(balance.toFixed(2)); // .toFixed suapvalins iki x skaiciu po kabl

const text1 = "Labas";
const text2 = "labas";
const result = text1 === text2;
console.log(result);

const number = 10;
const text = "10";

console.log(number === text);
console.log(number == text);
console.log(number != text);

const num1 = 20;
const num2 = 5;
const result3 = num1 % num2;
// console.log(result3);
console.log("dalinasi be trupmenos: " + (result3 == 0));  //palygina ar abudu skaiciai daliasi be trupmenos