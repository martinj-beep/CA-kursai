// function alertName(text) {
//     alert(text)
// }

// function consoleName(text) {
//     console.log(text);
// }

// function coreFunction(str, callback) {
//     const capitalizedName = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); // slice paims likusia zodzio dali nuo 2-osios raides
//     callback(capitalizedName)
// }

// console.log(coreFunction("martynas", alertName));

const cars = ["BMW", "VW", "Audi"]

cars.forEach((car, i) => {
    console.log(i + ": " + car) 
})


// const names = ["maRtynas", "jOnas", "stasys", "Karlas"];

// const namesFixed = names.map((v) => {
//     return v.charAt(0).toUpperCase() + v.slice(1).toLowerCase();
// })

// console.log(namesFixed);

// const age = [14, 14, 15, 81, 18];

// const legal = age.filter(number => {
//     if (number >= 18) {
//         return number
//     }
// })

// console.log(legal);


// const cities = ["Kaunas", "Kedainiai", "Alytus"]

// const found = cities.find(name => {
//     if (name.charAt(0) === "K") {
//         return name
//     }
// })

// console.log(found);

// const cities = ["Vilnius", "Kaunas", "Klaipeda"];
// console.log(cities.find(v => v.charAt(0) === "K"));