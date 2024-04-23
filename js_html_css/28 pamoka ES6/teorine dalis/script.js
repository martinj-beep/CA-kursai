import { divideNumbers as pervadintaFunkcija, PI } from "../utility/mathFunctions.js" // importuos funkcija pagal jos pavadinima, nurodant is kur (nuo esamo failo, iki reikiamo failo) bus importuota
import defaultValueFromMathFunctions from "../utility/mathFunctions.js" // coa jai bus duodamas pavadinimas ir nurodomas kelias is kur paimtas

// import * as mathStuff from "../utility/mathFunctions.js" // taip bus importuojami visi eksportuojami objektaim viska sudes i viena objekta, kuriam bus duodamas pavadinimas
// console.log(mathStuff.default)

console.log(pervadintaFunkcija(2, 3));
console.log(PI);

function sayName(name = "Vardas") {
    console.log(`My name is ${name}`);
}

sayName("Martynas");

sayName(); // vietoje undefined bus naudojama numatytoji reiksme, aprasyta funkcijoje. SIuo atveju islogins "Vardas"

function addTwoNumbers(a, b) {
    return a + b;
}

const someString = `dvieju skaiciu suma yra: ${addTwoNumbers(1,2)}`;

console.log(someString); // islogins funkcijos atsakyma

const longString = `sefsefsefgdrgdrgfdgf
sefsefffffsfsefdfs
sefndkrjgndrg
drgdvbdn` // `` kabutes leidzia teksta kelti per kelias eilutes, islogins viska taip pat kaip parasyta

console.log(longString);

const someArr = [1, 4, 5];

const arr2 = [8, 7, ...someArr];

console.log(arr2); // isples viena areju ir ides jo rezultata i kita areju


function addAllNumbers(...args) {
    return args.reduce((prev, current) => prev + current);
    console.log(args);
}

console.log(addAllNumbers(2, 9, 7)); // iskonsolins areju, nes ...args sutrauks visus argumentus i viena areju



const obj1 = {
    name: "vardas",
    age: 23
}

const obj2 = {
    address: "adresas",
    ...obj1 // paims duomenis is pirmo objekto, isspreadins ji ir sudes i obj2
}

console.log(obj2);


const person = {
    name: "Antanas",
    lastName: "Pavardenis",
    age: 52
}

const { name : personsName, age : personsAge } = person; // po : einantis zodis, taip bus pervadintas sukurtas kintamasis // pasiims is person objekto name ir age keys 

console.log(personsName, personsAge); // bus sukurti kintamieji name ir age is objekto person


const arr3 = ["Labas", "ate", "awdawd", 8];

const [ x1, x2 ] = arr3 // pasiims pirmus du is eiles esancius elementus arejuje. Galima pasiimt kelis skirtingus, taciau issiloginti tik tuos kuriu reikia

console.log(x1, x2);


function multiplyTwoNumbers(x, y) { // paprasta fnkc.
    return x * y;
}

const multiplyTwoNumbersArrow = (x, y) => x * y; // arrow fnkc.
// abi fnkc identiskos

const someObj = {
    fn1: () => console.log(this), // naudojant this, arrow funkcija kreipsis i globalu objekta
    fn2: function () {
        console.log(this); // kreipsis i pati esanti objekta
    }
}

someObj.fn1(); // gausim undefined iskonsoline
someObj.fn2(); // gausim pari bojekta iskonsoline