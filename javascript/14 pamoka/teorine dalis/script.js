const person = { // kadangi riestiniai sklaiustai, person tampa objektu
    name: "Petras",
    age: 33
};

person.name = "Jonas"; // pakeis esama property
person.lastName = "Jonaitis" // sukurs nauja key (property)

delete person.name // istrins tam tkra objekto property, siuo atveju name

console.log(person.name);
console.log(person.age);
console.log(person); 

const people = [
    {
        name: "Tadas",
        age: 20
    },
    {
        name: "Juste",
        age: 30
    },
    {
        name: "Antanas",
        age: 25
    }
];

const peopleSortedByAge = people.sort((a, b) => a.age - b.age); // surusiuos vartotojus pagal ju amziaus property

console.log(peopleSortedByAge);



const recipe = {
    title: "blynai",
    serves: 2,
    ingredients: ["miltai", "keusai", "pienas", "slakelis meiles"]
}

console.log(recipe.title);
console.log(`serves ${recipe.serves}`); // paims is objekto reikiama informacija naudojant ` kabutes
console.log("Ingredients:");

recipe.ingredients.forEach((item) => console.log(item)) // islogins visus arejaus elementus esancius objekto propertyje

const martynas = {
    name: "martynas",
    age: 25,
    isWorking: true,
    pets: ["zuvyte", "suo"],
    mom: {
        name: "mama",
        age: 40
    },
    sayHello: () => {
        console.log("labas");
    }
}

console.log(martynas.mom.age); // pasiims objekt, esancio objekte property

martynas.sayHello() // iskvies funkcija esancia objekte

function changeName(obj) {
    const objCopy = {...obj} // spread operatorius, isskleis originalu varianta ir sukurs kopija
    objCopy.name = "kazkas kito"
}

console.log(martynas);

changeName(martynas);

console.log(martynas);


console.log(Object.keys(martynas));  // ismes tik objekto key pavadinimus


const prekes = [
    { name: "lemonade", price: 50},
    { name: "lime", price: 10}
];

function getCheapestAndMostExpensive(arr) {
    const sorted = arr.sort((a, b) => a.price - b.price)
    const cheapest = sorted[0].name;
    const mostExpensive = sorted[sorted.length - 1].name;

    const result = {
        brangiausias: mostExpensive,
        pigiausias: cheapest
    }
    return result
}

const res = getCheapestAndMostExpensive(prekes);
console.log(res);




const orders = [
    { id: 1, size: 5 },
    { id: 2, size: 3 },
    { id: 3, size: 8 }
]

// function optimizeQueue(arr) {
//     const orderedOrders = arr.sort((a, b) => a.size - b.size);
//     const ids = orderedOrders.map((o) => o.id);

//     return ids;
// } 

// galima sutrumpinti viska i arrow funkcija
const optimizeQueue = (arr) => arr.sort((a, b) => a.size - b.size).map((o) => o.id);

console.log(optimizeQueue(orders));