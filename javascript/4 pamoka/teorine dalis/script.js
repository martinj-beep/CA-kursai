const fruits = ["Apple", "Orange", "Pear"];

console.log(fruits[0]); // ismes apple

const amountOfFruit = fruits.length;

fruits[1] = "Banana"; // pakeis 1 arejaus reiksme

// Splice - koreguos originala
fruits.splice(2, 1, "kazkas kito")

console.log(amountOfFruit); // grazina kiek yra elementu arejuje, skaiciuoja juos nuo vieno
console.log(fruits[amountOfFruit - 1]); // is pasiimto arejaus paskutinio skaiciaus naturalaus skaiciaus, nuims 1, ir taip is esmes vel pereisim prie skaiciavimo, kuriame 0 = 1 ir skaiciuojama nuo 0. tokia formule, visada bus paimamas paskutinis elementas esantis arejuje.


const cars = ["Audi", "BMW", "Volvo", "Citroen"];

// Slice padaro elementu kopija ir nekeis originalo
const smallerArray = cars.slice(1,3);

// Concat nekeicia originalo
const additionalCars = smallerArray.concat("kazkas papildomai prideto", 1, 2, true)
// Galima prideti stringa, skaiciu, booleana ir daugiau

console.log(smallerArray);
console.log(additionalCars);

// console.log(smallerArray);
// console.log(cars);


const arr1 = [1, 2, 5, 78, 54, 14];

arr1.push(656565); // prie originalo arejaus pabaigos prides naujausia reiksme

arr1.unshift("reiksme pradzioje")

console.log(arr1);

const arr2 = [1, 45, 57, 8787, 14];

// arr2.pop(); // isims pacia paskutine reiksme
const lastNumberOfArray = arr2.pop(); // isims pacia paskutine reiksme ir ja issaugos

// is originalo paims pirmaji elementa
const firstNumberOfArray = arr2.shift();

console.log(firstNumberOfArray);
console.log(lastNumberOfArray);
console.log(arr2);

console.log("------------------------------");

const myArray = [1, 2, 3, 4, 5, 6];

myArray[2] = "Nauja reiksme";

const myArray2 = myArray; // myArray2 yra pointeris - jis nuves iki kintamojo i kuri nurodyta jo reiksme

myArray2[0] = "kazkas Kito" // pakeis arejaus elementa PIRMAJAME arejuje, nes i ji nukreiptas pointerio adresa.

console.log(...myArray); // ... pries kintamaji isconsolins kintamojo elementus kaip atskirus elementus o ne areju. Spread operatorius

const myArrayCopy = [...myArray]; // padars kopija, naujas budas
const myArrayCopy2 = JSON.parse(JSON.stringify(myArray)); //padarys kopija, senas budas
console.log(myArrayCopy2);
myArrayCopy[2] = "vel kazkas naujo"
console.log(myArrayCopy); // taip susikurs kopija arejaus
console.log(myArray);

console.log("---------------------------------------");

// isconsolinti kiekviena reiksme atskirai is musu arejaus

const testArray1 = [true, "asasasas", 454, [1, 5]];

for (let index = 0; index < testArray1.length; index++) {
    console.log(testArray1[index]); // isconsolins nuo pirmojo elemento (0 elemento arejuje) po viena, iki kol pasieks length skaiciu
}

// suraskime visu array elementu suma

const testArray2 = [1, 5, -5, 22];

let sum = 0;

for (let index = 0; index < testArray2.length; index++) {
    sum += testArray2[index]; // prie kintamojo vis prides nauja reiksme is arejaus testArray2. KINTAMAJI KURIAME SUMUOSIME TURIME KURTI UZ FOR RIBU
}

console.log(sum);



// isfiltruoti neigiama reiksmes is array (originalo nepakeisti)

const testArray3 = [5, -5, 7, 0];

const positiveArray = [];

for (let index = 0; index < testArray3.length; index++) {
    //testArray3[index] >= 0. pirmo rato metu tikrins ar 5 >=0, antro rato metu -5 >=0, trecio 7>=0 ir tt
    if (testArray3[index] >= 0) { // paims teigiamas reiksmes is tikrinamo arejaus skaiciaus
        positiveArray.push(testArray3[index]) // kuomet ifo reiksme true, prie kintamojo arejaus galo prisides reiksme, kuri buvo tikrinta
    }
}

console.log(positiveArray);

// reverse an array

const testArray4 = [1, 2, 3];

const reversed = []; // norimas rezultatas : [3, 2, 1]

for (let index = testArray4.length - 1; index >= 0; index--) {
    console.log(index);
    reversed.push(testArray4[index])
}

console.log(reversed);
// sunkesnis variantas

const reversed2 = testArray4.reverse();

console.log(reversed2);