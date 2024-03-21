// class Car { // klase pavadinimu Car. VISOS KLASES PRASIDEDA IS DIDZIOSIOS RAIDES. jos visados tures konstruktoriu
//     constructor(year) { // jis veiks kaip funkcija, kuri bus iskvieciama pirma karta iskvietus klase
//         this.year = year; // this reiks "sita objekta)". siuo atveju sitam objektui bus sukurtas naujas irasas "year" ir bus paskirta year reiksme
//     }
// }


class Car { // klase pavadinimu Car. VISOS KLASES PRASIDEDA IS DIDZIOSIOS RAIDES. jos visados tures konstruktoriu
    #drowned = false; // taip sukuriama kintamasis klaseje

    constructor(year, type) { 
        this.year = year; 
        this.type = type;
    }
    
    getDrowned() { // padarys kad klientas galetu prieiti prie privacios informacijos // VADINAMAS GETTERIS
        return this.#drowned; 
    }

    setDrowned(newValue) { // VADINAMAS SETTERIS. su juo galima keisti reiksme privaciam kodui
        this.#drowned = newValue;
    }

    getDescription() {
        console.log(`year: ${this.year} type: ${this.type} drowned: ${this.#drowned}`); // cia funkcija vadinsis metodu o ne funkcija
    }
}

const bmw = new Car(2000, "masina") //new reiks kad kuriam nauja objekta su vienu key "years" kurio reiksme bus tokia, kuria iraseme i skliaustus

const vw = new Car(2010, "masinesne")

console.log(bmw.type);

bmw.getDescription() // taip iskvieciama funkcija esanti objekte

vw.getDescription()

console.log(bmw.drowned); // neislogins ar skendus nes neduos prieigos prie privataus kodo

console.log(bmw.getDrowned()); // islogins nes getDrowned metodas turi prieiga prie privataus kodo, nes jis koda returnina viduje klases

class Shape{
    constructor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }
};

class Triangle extends Shape { // klase trikampis papildys klase shape. Trikampis pasiims viska is shape ir prisides papildomai dar ko nori
    constructor(color, size) {
        super(color) // vaikineje klaseje, turime issikviesti tevine klase, su super issikviesim tevini KONSTRUKTORIU
        this.size = size;
    }

    getSize() {
        return this.size;
    }
}

const tr = new Triangle("red", 20);

console.log(tr);

console.log(tr.getColor);