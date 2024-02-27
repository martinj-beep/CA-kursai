let skaicius = 10;

skaicius += 5; // prideda prie esamos vertes tam tikra skaiciu

skaicius -= 5; // is esamos vertes atima prirasyta

skaicius *= 10; // padaugina is vertes

skaicius /= 5; // padalina

skaicius %= 3; // priskiria liekana

skaicius **= 8; // pakelia laipsniu

console.log(skaicius)

const skaicius1 = 15;
const skaicius2 = 9;

const sum = skaicius1 + skaicius2;

console.log(sum);

let skaicius3 = 10;

skaicius3++;  //prideda viena vieneta prie kintamojo
//galima rasyti ir priekyje ++

skaicius3--;  //atema viena vieneta nuo kintamojo

console.log(skaicius3);

console.log(5 > 3);  //palygina ar daugiau
console.log(5 < 3);  //palygina ar maziau
console.log(7 == 8); //palygina ar vienas skaicius lygus kitam (negrieztas)
console.log(7 != 8); //palygina ar vienas skaicius NElygus kitam
console.log(7 >= 8); //palygina ar vienas skaicius daugiau arba lygus kitam
console.log(7 <= 8); //palygina ar vienas skaicius maziau arba lygus kitam
console.log(8 === 9);  //GRIEZTAS PALYGINIMAS - lygins atsizvelgiant i kintamojo tipa.
console.log(8 !== 9);  //GRIEZTAS PALYGINIMAS (ar nelygus) - lygins atsizvelgiant i kintamojo tipa.

console.log(8 == "8"); //negrieztas lygins vertes, neatsizvelgiant ar tai skaicius, stringas ir pan
console.log(8 === "8"); //grieztas lygins vertes, grieztai ziurint i kintamojo tipa

// const userInput = prompt("iveskite skaiciu");

// console.log(typeof userInput);  //typeof i konsole isves kintamojo tipa

// console.log(+userInput);  // + "kintamasis" padaro, kad tipas butu pakeistas i skaitini tipa 

// NaN - Not a Number type yra numeris

// let balance = 300; // nurodom kintamojo reiksme

// const moneyToTransfer = prompt("iveskite suma"); // klientui leidziam ivesti skaiciu

// balance -= +moneyToTransfer; // is balance atimama kliento ivesta reiksme, konvertuota i skaiciu

// console.log(balance); // konsoleje ismeta galutini balansa

// let balance = 500;

// const intersetRate = prompt("iveskite palukanu norma");

// balance += balance * (intersetRate / 100); 

// console.log(balance);

const word = "bananas";

const guess = prompt("bandykite atspeti zodi");

console.log("spejimo rezultatas: ", word === guess);