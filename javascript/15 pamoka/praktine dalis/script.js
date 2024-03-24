// Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą turnOn – kuris alert’ins vrooom. Sukurkite du objektus ir patikrinkite ar veikia tesingai

// class Car() {
//     constructor(brand, model, engine) {
//         this.brand = brand;
//         this.model = model;
//         this.engine = engine;
//     }

//     turnOn() {
//         alert("vroom");
//     }
// }

// const bmw = new Car("BMW", "naujas", "v8");

// console.log(bmw);

// const vw = new Car("VW", "naujas", "v8")

// console.log(vw);


// function Car(brand, model, engine, basePrice) {
//         this.brand = brand;
//         this.model = model;
//         this.engine = engine;
//         this.turnOn = function() {
//             alert("vroom")
//         }
//         this.basePrice = basePrice;
//         this.getPrice = function() {
//             let additionalPrice = 0;
//             if (this.engine === "electric") {
//                 additionalPrice = 10000;
//             } else if (this.engine === "diesel") {
//                 additionalPrice = 5000;
//             }
//             return this.basePrice + additionalPrice
//         }
//     }


// const myCar = new Car("bmw", "new", "electric", 5000)

// console.log(myCar.getPrice());


// Sukurkite klasę BankAccount, kuri turi savybes ownerName ir balance. Klasė taip pat turėtų turėti metodus deposit(amount) ir withdraw(amount), kurie atitinkamai didina arba mažina balance.

// Rezultatas:
// const account = new BankAccount("Jonas");
// account.deposit(100);
// account.withdraw(30);
// console.log(account.balance); // 70

// class BankAccount {
//     constructor(ownerName, balance = 0) {
//         this.ownerName = ownerName;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         this.balance += amount;
//     }

//     withdraw(amount) {
//         this.balance -= amount;
//     }
// }