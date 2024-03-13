const someString = "labas";
const arr = ["asd", "asds"]

arr[0] = "fsefjnkjhieufh"
console.log(arr); // pakeicia pirmaji arejaus elementa

// su stringais tiesiog elemento is stringo pakeisti negalima.
console.log(someString[1]); // paims antraja raide is stringo, ismes raide a

console.log(someString.charAt(1)); // veikia analogiskai kaip ir naudojant indexus

console.log(someString.at(1)); // dar naujesnis metodas, su juo galime rasyti ir minusines reiksmes (tokiu atveju stringa prades skaiciuoti nuo galo)

const part1 = "Labas, "

const fullString = part1.concat(" Marius", "aswdawd", someString); // galima prideti kitus zodzius, kitus kintamuosius
const fullString2 = part1.concat(...arr); // ... isskleidzia areju ir is elementu jame esanciu padaro stringus

console.log(fullString);
console.log(part1);
console.log(fullString2);

let asasas = "asadawd"; 

asasas += "lasbas" // daznesnis budas tiesiog reiksme prideti su +=

console.log(asasas);

function getString() {
    return "string from a function"
}

const someString3 = `sadafaew ${someString} ${2 + 3} ${getString()}` // naudojant ``, i vidu galima deti kintamuosius arba ne stringines reiksmes naudojant ${}

console.log(someString3);