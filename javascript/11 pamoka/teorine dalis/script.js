// console.log("This is before timeout");

// setTimeout(() => { // ivykdys funkcija po kazkokio paskirto laiko
//     console.log("This is a callback function");
// }, 2000) // skaiciuojama milisekundemis, tai iskvies funkcija po 2 sekundziu

// console.log("This is after timeout");

// function logSomething() {
//     console.log("cia yra paprasta funkcija");
// }

// setTimeout(logSomething, 2000) // tokiu atveju nededam skliausteliu, nes duodame varda funkcijos, kuria tures iskviesti.

// setInterval(() => console.log("praejo dar viena sekunde"), 1000) // setInterval padaro kad kas kiek laiko ta pati dalyka kartos

const numbers = [1, 2, 3, 5];

// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index] * 2);
// }

// numbers.forEach((num) => { // siuo atveju funkcija priima "num" argumenta, num tik pavadinimas, funkcija visa laika ims kiekviena elementa is duoto arejaus // vykdys funkcija tike kartu, kiek arejuje yra elementu
//     console.log("vidus for each callbacko " + num);
// })

// function myForEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i])
//     }
// } // veikia analogiskai kaip forEach

// myForEach(numbers, (num) => {
//     console.log("vidus for each callbacko " + num);
// }) // veikia analogiskai kaip forEach


// const strings = ["labas", "krabas", "bananas"];

// for (let i = 0; i < strings.length; i++) {
//     let newString = strings[i][0].toUpperCase(); // i stringo pasiims i'taji arejaus elementa ir paims pacia pirmaja raide, ir parasys didziaja
//     newString += strings[i].slice(1, strings[i].length);
//     console.log(newString);
// }

// strings.forEach((str) => { // priims str (skirtinga stringa esanti arejuje)
//     let newString = str[0].toUpperCase();
//     newString += strings[i].slice(1, str.length);
//     console.log(newString);
// })

// 1 zingsnis - num = 1 (pirmas arejaus elementas), return 1 * 2, doubleNumbersArray = [2]
// 2 zingsnis - num = 2 (antras arejaus elementas), return 2 * 2, doubleNumbersArray = [2, 4]
const doubleNumbersArray = numbers.map((num) => num * 2)

console.log(doubleNumbersArray);

// map atitikmuo naudojant for

const doubleNumbersArray2 = [];
for (let i = 0; i < numbers.length; i++) {
    doubleNumbersArray2.push(numbers[i] * 2);
}

console.log(doubleNumbersArray2);



// filter() atitikmuo naudojant for
const strings2 = ["lal", "w", "fsefseffdsf", "dwefdawqd"];

const shortStrings = [];

for (let index = 0; index < strings2.length; index++) {
    if (strings2[index].length < 5) {
        shortStrings.push(strings2[index])
    }
}

console.log(shortStrings);

const shortStrings2 = strings2.filter((str) => {
    if (str.length < 5) {
        return true; // jeigu salyga tenkinama, tuomet filter funkcija arejaus elementa ides i kintamaji
    } else {
        return false; // elementa praleis ir jo nedes i rezultatu areju
    }
})

console.log(shortStrings2);

// galima ir sutrumpinti
const shortStrings3 = strings2.filter((str) => str.length < 5)

console.log(shortStrings3);

// pakelti visus kvadratu ir gauti nauja arr su tik tais skaiciai kurie yra mazesni nei 20
const numbers3 = [2, 8, 9, 6];

//                        [4 64 81 36].filter(4 < 20 = true, bus pridetas i rezultata arejaus; 64 < 20 = false, jo nedes)
const res = numbers3.map((x) => x * x).filter((x) => x < 20); // skaicius is arejaus pakels kvadratu ir patalpins i nauja areju. // antram etape prafiltruoja gautus arejaus rezultatus ir palieka tik tuos, kurie yra maziau nei 20/

console.log(res);

// forEach - naudojam kai NEreikia gauti naujo arr rezultato
// map - kai reikia gauti nauja arr su apdirbtais elementais
// filter - kai reikia gauti nauja arr su tik kai kuriais elementais