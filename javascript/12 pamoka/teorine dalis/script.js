const numbers = [12, 8, -92, 0, 0];

// 1 prasisukimas: a=12, b=8, rezultatas 4, todel nesukeis vietu tarp a ir b
// 2 prasisukimas a=8, b=-92 resultatas -84, pasislinks skaicius i kaire
console.log(numbers.sort((a, b) => {
    return a - b; // surikiuos is mazesnio i didziaja
}));

console.log(numbers.sort((a, b) => {
    return b - a; // surikiuos is didesnes i mazesne
}));

console.log(numbers.sort((a, b) =>  a - b)); // trumpesne versija

const words = ["labas", "adata", "zebras"];

console.log(words.sort((a, b) => a.localeCompare(b))); // palygins pagal abecele stringus, kiekvienos raides palygins skaitine reiksme

console.log(words.sort((a, b) => -a.localeCompare(b))); // arba b.localeCompare(a) rusiuos priesingai nuo abeceles tvarkos

//reikia issirtinti arejus pagal antra arejuje esanti elementa
const arrayOfArrays = [
    [1, 6],
    [2, 9],
    [-8, 7]
]

console.log(arrayOfArrays.sort((a, b) => a[1] - b[1]));


const numbers2 = [12, 8, -92, 0, 0, 8, 2];

let sum = 0;

for (let index = 0; index < numbers2.length; index++) {
    sum += numbers2[index]
}

console.log(sum); // for ciklas kuris sudes visus skaicius esancius arejuje (taip veikia reduce())


// 1 ratas - accumulated pirmoji reiksme yra 12 (pirmoji reiksme), current = 8. Juos sudeda, gaunasi 20
// 2 ratas - accumulated = 20, currrent = -92
const sum1 = numbers2.reduce((accumulated, current) => {
    return accumulated + current // funkcija returninam, nes gauti duomenys turi nukeliauti kaip nauja accumulated funkcija
})

console.log(sum1);

const wordsCombined = words.reduce((acc, cur) => {
    return acc + cur; // sudes visus stringus i viena is arejaus
})

console.log(wordsCombined);

