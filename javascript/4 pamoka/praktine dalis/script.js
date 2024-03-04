const array1 = [2, 3, 4];
array1.unshift(1);
console.log(array1);

// Parašykite kodą, kuris suskaičiuoja ir išveda į console, kiek yra skirtingų elementų masyve.
// const arr = [1, 2, 2, 3, 3, 3, 4];

// const uniqueElements = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!uniqueElements.includes(arr[i])) {
//         uniqueElements.push(arr[i]);
//     }
// }

// console.log(uniqueElements.length);

const arr3 = [-3, 1, -2, 4, -5, 6];

const positivesArr3 = [];

for (let index = 0; index < arr3.length; index++) {
    if (arr3[index] > 0) {
        positivesArr3.push(arr3[index])
    }
}

console.log(positivesArr3);



// Raskite ar nurodytas elementas pasikartoja masyve. Kodas išveda true, jei elementas pasikartoja, ir false priešingu atveju.

const arr = [1, 2, 3, 4, 3, 5];
const element = 3;

const doesRepeat = arr.indexOf(element) !== arr.lastIndexOf(element);

console.log(doesRepeat);




// Pakeiskite kiekvieną masyvo skaičių: jei skaičius yra lyginis, jį padalinkite iš dviejų; jei nelyginis, padauginkite iš trijų. Išveskite transformuotą masyvą į console.

const last = [1, 2, 3, 4, 5]

const lastResult = [];

for (let index = 0; index < last.length; index++) {
    if (last[index] % 2 === 0) {
        let divided = last[index] / 2;
        lastResult.push(divided)
    } else if (last[index] % 2 > 0) {
        let multiply = last[index] * 3;
        lastResult.push(multiply)
    }
}

console.log(lastResult);  // cia galima ir tsg if else taikyti, pvz.:
//const arr = [1, 2, 3, 4, 5]

// const transformed = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         transformed.push(arr[i] / 2);
//     } else {
//         transformed.push(arr[i] * 3);
//     }
// }

// console.log(transformed);