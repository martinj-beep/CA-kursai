// (function () {
//     console.log("Cia yra anonimine funkcija");
// })() // self invokin function, labai retai naudojama


// const result = (function (num) {
//     return num * num
// })(5) // anonimine funkcija su argumentu 5, resultata issaugos const result

// console.log(result);

// // daznai naudojama sintakse, paprasta fnkc
// function add(num1, num2) {
//     return num1 + num2
// }

// // retai naudojama sintakse, anonimine fnkc
// const addFunction = function (num1, num2) {
//     return num1 + num2
// }

// // daznai naudojama, arrow funkcija, skaitosi kaip anonimine
// const addFunctionArrow = (num1, num2) => {
//     return num1 + num2
// }

// // Sutrumpinta arrow funkcija
// // esant tik vienai eilutej kuri turetu buti lauztiniuose skliaustuose, mes ju galim ir nerasyt, return tokiu atveju galima ir nerasyt
// const addFunctionArrowShorter = (num1, num2) => num1 + num2; 

// const res = addFunctionArrow(2, 6);
// console.log(res);

// console.log(addFunctionArrowShorter(10, 10));


// // esant tik vienam argumentui arrow funkcijoj, galima nedeti skliausteliu NEREKOMENDUOTINA
// const powerNumber = num => num * num;

// const calculateSquare = (num) => num * num;
// console.log(calculateSquare(6));



// Implement a function named removeFalsyValues that takes an array and removes all falsy values (e.g., false, null, 0, "", undefined, and NaN) from it.

// const testArray = [5, "asas" [2], NaN, false, true, 0, null, undefined];



// const removeFalsyValues = (arr) => {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// console.log(removeFalsyValues(testArray));



// const arr = [1, 2, 3];
// const arr2 = arr; // nesukurs kopijos, sukurs directiona i originalu areju, tik "adresa"


// const changeFirstArrValue = (someArr) => {
//     someArr[0] = 0; // kuomet reiksme keiciama naudojant funkcija, tuomet originalas irgi yra pakeiciamas
// }

// changeFirstArrValue(arr);

// console.log(arr);

// Implement a function named countVowels that takes a string parameter and returns the number of vowels (a, e, i, o, u) in the string.

const countVowels = (string) => {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        // pirmoji (0) reiksme bus L
        // antroji (1) reiksme bus A
        for (let j = 0; j < vowels.length; j++) { // sis ciklas apsisuks visus kartus kiekviename i ciklo zingsnyje
            // 1 ratas - l === a
            // 2 ratas - l === e
            // antrosios i reiksmes [i] irgi suks kelis ratus ir lygins su esamu arejumi
            if (string[i] === vowels[j]) { // palygins ar pirmuoju atveju, L raide bus lygi kazkuriam vowels[j] elementui
                count++; // suradus kad raide yra balse, prie count bus pridedama vienetas
            }
        }
    }

    return count;
}

const amountOfVowels = countVowels("labas a i o ");

console.log(amountOfVowels);