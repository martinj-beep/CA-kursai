// const namePrint = (name) => alert(name);

// namePrint("Martynas")

// const generateRandomNumber = () => Math.floor(Math.random() * 5) + 1;
// console.log(generateRandomNumber());

// const nameLenht = (name, lastName) => name.length + lastName.length

// console.log(nameLenht("Martynas", "Jakutis"));

// const getLetterByIndex = index => {
//     const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     return alphabet[index];
//   };
// console.log(getLetterByIndex(0)); 

// Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti sum, sub, div, multi (matematinės reikšmės – sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9 ir t.t.).

const math = (n1, n2, operator) => {
    if (typeof n1 === "number" && typeof n2 === "number" && typeof operator === "string") {
        if (operator === "sum") {
            return n1 + n2;
        } else if (operator === "sub") {
            return n1 - n2;
        } else if (operator === "div") {
            return n1 / n2;
        } else if (operator === "multi") {
            return n1 * n2;
        }
    } else {
        return "pasirinkti blogi duomenys";
    }
}

console.log(math(12, 18, "multi"));