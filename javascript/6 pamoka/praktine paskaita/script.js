// Parašykite JavaScript ciklą, kuris atspausdina skaičius nuo 1 iki 5.

// for (let index = 1; index <= 5; index++) {
//     console.log(index);
// }



// Sukurkite JavaScript programą, kuri suskaičiuoja sumą nuo 1 iki 5 naudojant while ciklą.

// let sum = 0;
// let i = 1;

// while (i <= 5) {
//     sum += i
//     i++
// }

// console.log(sum);




// Parašykite JavaScript for ciklą, kuris atspausdina visus lyginius skaičius nuo 2 iki 10.

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10]
// let even = [];

// for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index] % 2 == 0) {
//         even += numbers[index]
//     }
// }

// console.log(even);



// for (let index = 2; index <= 10; index++) {
//     if (index % 2 == 0) {
//         console.log(index);
//     }
// }


// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
//} // paprastesnis budas

// Parašykite JavaScript ciklą, kuris atspausdina skaičius nuo 10 iki 1 atbuline tvarka.

// for (let index = 10; index >= 1; index--) {
//     console.log(index);
// }





// Sukurkite JavaScript programą, kuri naudojant while ciklą suskaičiuoja, kiek yra skaičių (nuo 1 iki 20), kurie dalijasi iš 3.

// let i = 1;

// while (i <= 20) {
//     if (i % 3 == 0) {
//         console.log(i);
//     }
//     i++
// }    // mano


// let count = 0;
// let i = 1;
// while (i <= 20) {
//     if (i % 3 === 0) {
//         count++;
//     }
//     i++;
// }
// console.log(count);    // ca darytas




// Parašykite JavaScript programą, kuri randa didžiausią skaičių iš masyvo naudojant for ciklą.    SUNKUS

// const arr = [1, 5, 6, 87, 5, 17];
// let max = arr[0];

// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > max) {
//         max = arr[index]
//     }
// }
// console.log(max);
// nepavyko, programa randa didziausia skaiciu, kuris didesnis tik salia jo esanciam elementui arejuje

// const numbers = [3, 7, 2, 8, 5];
// let max = numbers[0]; // 3 
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) { // jeigu paimtas skaicius bus didesnis uz turima max reiksme, ta arejaus reiksme pakeis esama max reiksme
//         max = numbers[i];
//     }
// }
// console.log(max);


// Sukurkite JavaScript funkciją, kuri išspausdina visus skaičiaus 15 daliklius.

// for (let index = 0; index < 16; index++) {
//     if (15 % index == 0) {
//         console.log(index);
//     }
// }



// Sukurkite JavaScript programą, kuri naudojant for ciklą išfiltruoja ir atspausdina visus nelyginius skaičius iš masyvo [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Nelyginius skaičius saugokite naujame masyve oddNumbers

// const nmbr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let oddNumbers = [];

// for (let index = 0; index < nmbr.length; index++) {
//     if (nmbr[index] % 2 > 0) {
//         console.log(nmbr[index]);
//         oddNumbers += nmbr[index]
//     }
// }

// console.log(oddNumbers);




// SUDETINGAS  Parašykite JavaScript ciklą, kuris atspausdina visus pirminius skaičius nuo 1 iki 20.

// Pirminis skaičius – bet kuris natūralusis skaičius, didesnis nei 1, kuris dalinasi tik iš savęs ir vieneto. 

// PASIBAIGT

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// for (let index = 1; index < 21; index++) {
//     if (index % 1 == 0) {
//         if (condition) {
//             console.log(index);
//         }
//     }
// }

// Parašykite JavaScript programą, kuri naudojant for ciklą atspausdina pirmus dešimt Fibonačio sekos skaičius.

// Here's the sequence breakdown:

//     The first two numbers in the Fibonacci sequence are 0 and 1.
//     Each subsequent number is the sum of the two preceding numbers.
//     So, the third number is 0 + 1 = 1, the fourth number is 1 + 1 = 2, the fifth number is 1 + 2 = 3, and so on.

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

let n1 = 0;
let n2 = 1;
let nextTerm;
for (let i = 1; i <= 10; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    console.log(nextTerm);
}