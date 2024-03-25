// Sukurkite Book klasę su savybėmis title, author ir year. Pridėkite metodą getSummary(), kuris grąžina santrauką apie knygą.

// Inicializacijos ir naudojimo pavyzdys:
// const book1 = new Book("Book Title", "Author Name", "2023");
// console.log(book1.getSummary()); // "Book Title by Author Name published in 2023"


// class Book{
//     constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     }
    
//     getSummary() {
//         return `${this.title} by ${this.author} published in ${this.year}`
//     }
// }


// const book1 = new Book("Book Title", "Author Name", "2023");

// console.log(book1.getSummary());


// Sukurkite klasę MusicStudent, kuri saugo informaciją apie muzikos mokyklos studentus. Studentas turi name (vardas), instrument (muzikos instrumentas, kurį jis mokosi groti) ir level (lygis, pvz., pradedantysis, pažengęs). Pridėkite metodą practice, kuris didina studento lygį. Pagal nutylėjimas studento lygis turėtų būti "beginner".

// Inicializacijos ir naudojimo pavyzdys:
// const student = new MusicStudent("Anna", "piano");
// student.practice();
// console.log(`${student.name}, ${student.instrument}, ${student.level}`); // "Anna, piano, intermediate"

// class MusicStudent {
//     constructor(name, instrument, level) {
//         this.name = name;
//         this.instrument = instrument;
//         this.level = level;
//     }

//     practice() {
//         if (this.level === "begginer") {
//             this.level = "intermediate"
//         } else if (this.level === "intermediate") {
//             this.level = "expert"
//         }
//     }
// }

// const student1 = new MusicStudent("Anna", "flute", "intermediate")

// console.log(student1);

// student1.practice();

// console.log(student1);


// Sukurkite ShoppingCart klasę, kuri gali pridėti prekes (addItem), pašalinti prekes (removeItem) ir apskaičiuoti bendrą kainą (calculateTotal). Prekės yra objektai su savybėmis name ir price.

// Inicializacijos ir naudojimo pavyzdys:
// const cart = new ShoppingCart();
// cart.addItem({ name: "Apple", price: 0.99 });
// cart.addItem({ name: "Bread", price: 1.29 });
// console.log(cart.calculateTotal()); // 2.28
// cart.removeItem("Apple");
// console.log(cart.calculateTotal()); // 1.29


// class ShoppingCart {
//     constructor(object) {
//         this.items = [];
//     }

//     addItem(object) {
//         this.items.push(object);
//     }

//     removeItem(name) {
//         if (name === this.items.filter(name => this.items.name !== itemName)) {
//             delete this.name
//         }
//     }

//     // calculateTotal() {
//     //     let sumToatl = 0;
//     //     ShoppingCart.price.forEach() => {
//     //         sumTotal += ShoppingCart.price;
//     //     };
//     // }
// }

// const cart = new ShoppingCart()
// cart.addItem({ name: "Apple", price: 0.99 });

// console.log(cart);

// cart.removeItem("Apple")

// class ShoppingCart {
//     constructor() {
//         this.items = []; // kiekviena nauja klase tures tuscia areju
//     }

//     addItem(item) {
//         this.items.push(item); // prie tuscio arejaus bus pridetas OBJEKTAS
//     }

//     removeItem(itemName) {
//         this.items = this.items.filter(item => item.name !== itemName); // arejuje paliks visus objektus, kuru key "name" nebus lygus duotajam kintamajam, kuri norime istrinti
//     }

//     calculateTotal() {
//         return this.items.reduce((total, item) => total + item.price, 0); // akumuliatoriuje total vis prides kiekvieno objekto esancio arejuje .price key, pradinis taskas akumuliatoriaus bus 0.
//     }
// }

// const cart = new ShoppingCart();
// cart.addItem({ name: "Apple", price: 0.99 });
// cart.addItem({ name: "Bread", price: 1.29 });
// console.log(cart.calculateTotal()); // 2.28
// cart.removeItem("Apple");
// console.log(cart.calculateTotal()); // 1.29



// Sukurkite MovieTheater klasę, skirtą valdyti kino teatro sėdimų vietų rezervacijoms. Klasė turi turėti šias savybes: rows (eilučių skaičius) ir seatsPerRow (vietų skaičius eilutėje). Vietos turi būti saugomos dvimačiame masyve, kur kiekviena vieta gali būti true (užimta) arba false (laisva). Taip pat klasėje turi būti šie metodai:

//     bookSeat(row, seat) - metodas vietos rezervavimui. Jei vieta jau užimta, turi būti grąžinamas pranešimas apie tai.

//     cancelBooking(row, seat) - metodas rezervacijos atšaukimui. Jei vieta nebuvo rezervuota, turi būti grąžinamas atitinkamas pranešimas.

//     checkAvailability(row, seat) - metodas, grąžinantis true arba false, priklausomai nuo to, ar vieta yra laisva.

// Inicializacijos ir naudojimo pavyzdys:
// const theater = new MovieTheater(5, 5);
// theater.bookSeat(2, 3);
// console.log(theater.checkAvailability(2, 3)); // false
// theater.cancelBooking(2, 3);
// console.log(theater.checkAvailability(2, 3)); // true

class MovieTheater {
    constructor(rows, seatsPerRow) {
        this.rows = rows;
        this.seatsPerRow = seatsPerRow;
    }

    bookSeat(row, seat) {
        if (x === true) {
            x = false;
            console.log("Vieta sekmingai rezervuota");
        } else {
            console.log("Vieta jau uzimta");
        }
    }

    cancelBooking(row, seat) {
        if (x === false) {
            x = true;
            console.log("Vietos reservacija atsaukta");
        } else {
            console.log("Vieta nera rezervuota");
        }
    }

    checkAvailability(row, seat) {
        if (x === true) {
            console.log("Vieta laisva");
        } else {
            console.log("Vieta uzimta");
        }
    }
}

// susidet 2d masyva jame sutalpint laisvas vietash