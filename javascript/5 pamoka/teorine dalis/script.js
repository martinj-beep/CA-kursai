// 1. i = 0, 0 <5
// 2. i = 1, 1 <5
// 3. i = 2, 2 <5
// 4. i = 3, 3 <5
// 5. i = 4, 4 <5

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// for veiksmu seka:
// 1 sukurs i kintamaji
// 2 patikrins ar salyga yra true (i < 5)
// 3 jei salyga true, bus vykdomas blokas (KAS YRA RIESTINIUOSE SKLIAUSTUOSE)
// 4 paskutinis veiksmas tai bus pakeiciamas i kintamasis (i++)

// for (let i = 100; i >= 10; i -= 10) { // atims is i kaskart po 10
//     console.log(i);
// }

// let j = 0;

// while (j < 5) {
//     j++; // nurodom ka padarys su kodu    ---   galima deti ir po console logu - pirma prides vienu vienetu, todel pirmoji consolinta reiksme bus 1.
//     console.log(j); // ka darys su pakitusiu kodu
// }

// let k = 0;

// do {
//     k++; 
//     console.log(k); 
// } while (k < 5);

// Print Numbers: Write a loop that prints numbers from 1 to 10.

// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }


// Even Numbers: Write a loop that prints even numbers from 2 to 20.

// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }


// Sum of Numbers: Write a loop that calculates the sum of numbers from 1 to 10.

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }

// console.log(sum);


// reverse a string: write a loop to reverse a given string.

// const usernInput = prompt("iveskite koki zodi")

// console.log(usernInput[2]); // arejus, paims pati pirmaji prompto simboli, todel nes parasyta 0, (reiskia kad paims pirmaji simboli)
// console.log(usernInput.length); // parasys kiek simboliu bus ivesta, isves skaiciu

// let reversedString = "labas";

// reversedString += "kazkas" // galima prie stringo prideti kita stringa, kuris prisides prie pirmojo stringo pabaigos

// console.log(reversedString);

// const usernInput = prompt("iveskite koki zodi")
// // Labas

// // null, ""
// if (usernInput) {
//     let reversedString = "";

//     for (let i = usernInput.length - 1; i >= 0; i--) { // -1 del to, nes ismes userInput length ismes naturalius skaicius, daugiau nei 0, o arrau pradeda skaiciuoti nuo 0. 
//         reversedString += usernInput[i]
//     }

//     console.log(reversedString);
// } else {
//     alert("neissidirbinek")
// }  

//parasys zodi is kitos puses

// 1. reversedString = "s"



// Labas

let isUserInputValid = false;

do {
    const usernInput = prompt("iveskite koki zodi");
    if (usernInput) {
        isUserInputValid = true;
        let reversedString = "";
    
        for (let i = usernInput.length - 1; i >= 0; i--) {
            reversedString += usernInput[i]
        }
    
        console.log(reversedString);
    } else {
        alert("neissidirbinek")
    }  
} while (!isUserInputValid);
