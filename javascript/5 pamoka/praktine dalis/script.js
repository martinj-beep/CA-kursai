// let age = 25;
// console.log(2023 - age);

// const name = "martynas";
// const count = 10;

// for (let i = 0; i < count; i++) {
//     console.log(`${i}. ${name}`);
// }

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }
// let i = 0;
// const name = "martynas"

// while (i < 3) {
//     i++;
//     console.log(name);
// }


// Sukurkite kintamąjį let combo = ''. Kiekvieną kartą paleidus ciklą į combo prisirašo jūsų vardas (t.y. while ciklo viduje darytų combo += "Petras" ). Sukurkite programą, kur bus kintamasis let times = 5, kuris nurodys kiek kartų į combo kintamąjį turėtų būti pridėtas jūsų vardas. Jei times skaičius 0 arba mažiau – vis tiek bent vieną kartą įvyks ciklas ir jūsų vardą įrašys į combo.

let combo = "";
let times = 4;
let name = "Martynas";

do {
    combo += name;
    times--;
} while (times > 0);

console.log(combo);