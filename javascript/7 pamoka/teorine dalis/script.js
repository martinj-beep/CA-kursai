// function sayHello() {
//     console.log("Hello from a function");
// } // sukuriama funkcija, kurios vardas sayHello, ja iskvietus ji isconsolelogins hello from a function

// sayHello() // taip isvkieciama funkcija


// function sayHello(name) {
//     console.log("Hello from a function, " + name);
// } 

// sayHello("Marius") // dudoamas argumentas funkcijai

// sayHello("Audrius") 


const person = "marius"

function sayHello(name) {
    console.log("Hello from a function, " + name);
} 

sayHello(person) 

function sum(number1, number2) { // priims du argumentus, pirma ir antra skaiciu
    if (typeof number1 === "number" && typeof number2 === "number") {
        console.log(number1, number2);
    const result = number1 + number2
    console.log(result); // parasius if, isitikinsime, kad abu irasyti skaiciai bus true, ir nemest loge neveikianciu atsakymu
    } else {
        console.log("pateikti argumentai negeri");
    }
}

sum(2, 5) // number1 ir number2
sum(7, -8)

sum(4) // neirasius antro skaiciaus, jis bus skaitomas kaip undefined

const manoFunkcija = function () { // anonimine funkcija, neturi vardo, taciau ja galima priskirti prie kintamojo
    console.log("Hello from anonimine funkcija");
}

manoFunkcija(); // isvkieciam parase kintamojo pavadinima su skliaustais

function doStuff(arg1) {
    arg1() // issikvies funkcija, kurios pavadinimas keisis irasius arg1
}

function sayBye(params) {
    console.log("goodbye");
}

doStuff(sayBye)


// function divide(num1, num2) {
//     return num1 / num2; // funkcija grazins dvieju kintamuju padalinima VIENA reiksme (negali buti kelios reiksmes). Grazins, bet ta grazinta reiksme reikia ideti i kintamaji
// }

// const divideResult = divide(5, 5); // kitanamasis, kuriame idedame returen reiksme, prie jos galima prideti kita suma, funkcija ar kitaip interactinti
// console.log(divideResult);


function divide(num1, num2) {
    return num1 / num2;
}

const divideResult = divide(5, 5); 
console.log(divideResult);


// function returnLargerNumber(num1, num2) { // palygins du skaicius, didesni islogins
//     if (num1 > num2) {
//         return num1; // nesustojo cia kodas, nes siuo atveju if salyga nera true.
//     } else { // po sito returno funkcija nustos veikti nes salyga nera true, todel veiks else dalis
//         return num2;
//     }
// }

// console.log(returnLargerNumber(1, 8));




function returnLargerNumber(num1, num2) { 
    if (num1 > num2) {
        return num1;
    } 
    if (num2 > num1) {
        return num2;
    }
    if (num2 === num1) {
        return "skaiciai yra lygus"
    }
}  // viskas kas ivyksta fknc viduje, ten ir liks, visi sukurti kintamieji ir tt

console.log(returnLargerNumber(1, 8)); 
console.log(returnLargerNumber(9, 8)); 
console.log(returnLargerNumber(8, 8)); 

// Create a function called isEven that takes a single number parameter and returns true if the number is even, otherwise false.

function isEvem(number) {
    if (number % 2) { // (kai number = 5)number % 2 kuomet grazina liekana, kas bus lygu 1, o 1 ife bus true. Viskas ife konvertuojasi i true, apart FALSY VALUES
        return false;
    } else {
        return true;
    }
}

console.log(isEvem(5));


// Write a function named truncateString that takes a string and a number as parameters. If the length of the string exceeds the specified number, truncate the string and append "..." to the end. Otherwise, return the original string.

function truncateString(string, maxLength) {
    if (string.length > maxLength) {
        let result = string.slice(0, maxLength); // slice nuims dali stringo pirmas imtinai, antras neimtinai
        // result = "Labas"
        result += "..."
        // result = "Labas..."
        return result;
        // galima dar labiau sutrumpinti
        // let result = string.slice(0, maxLength) + "..."
    } else {
        return string;   // kadangi stringas ilgesnis nei reikalingas kiekis charakteriu, teksto karpyti nereikia ir galima returninti originalu varianta
    }
}

console.log(truncateString("labas labas", 5));
console.log(truncateString("labas labas", 50));





// Create a function called findLongestWord that takes a string parameter consisting of words separated by spaces and returns the length of the longest word.

function findLongestWord(string) {
    const words = string.split(" "); // suskaldys stringa pagal kazkoki viena elementa, siuo atveju tarpa, ir visas stringas skirs skirtingais elementais sukurtame naujae arejuje

    let longestWord = words[0]; // duosime pacia pirma reiksme is arejaus, nuo kurio ir prades lygint

    for (let i = 1; i < words.length; i++) {
        if (longestWord.length < words[i].length) { // tikrins ar ilgiausio zodzio ilgumas buys ilgesnis uz tikrinamo zodzio ilguma
            longestWord = words[i] // jeigu tikriniamas zodis arejuje yra ilgesnis uz esama zodi, tai funkcija ivyks, ir longestWord reiksme bus perrasoma nauja reiksme
        }
    }
    return longestWord
}

console.log(findLongestWord("aswde ef sfsrfgdrgdrt awdaswed awda"));
