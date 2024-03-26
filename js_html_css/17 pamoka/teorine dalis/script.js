
const h1 = document.getElementById("tekstas"); // paims is html elementa su ID "tekstas"

console.log(h1);

const elementsWithTestClass = document.getElementsByClassName("testas");

console.log(elementsWithTestClass); // islogins "areju" elementu, kurie tures pasirinkta klase

const firstPar = document.querySelector(".testas") //veikimo principas kaip reinktis selektorius CSS, .class, #id, p, div ir panasiai
const par = document.querySelector("p") // pasirinks paragrafa, pati pirma, kuris atitinka reikalavimus
console.log(firstPar);

const allPar = document.querySelectorAll("p") // suras visus elementus,. atitinkancius reikalavimus, rasyti kaip CSS selektorius

console.log(allPar);

const allParArr = [...allPar]; // is nodelisto padarome areju

console.log(allParArr); 

const div = document.querySelector("div");

console.log(div);

const prevSibl = div.previousSibling; // paims priesais esanti siblinga

const nextSibl = div.nextSibling; // paims toliau esanti siblinga

console.log(prevSibl);
console.log(nextSibl);
console.log(div.parentNode); // islogins div elemento parent elementa

const h3 = document.querySelector(".text");

console.log(h3.style.color); // grazins stiliu tik uzdeta inline budu

h3.style.color = "green" // pakeis inline stiliaus (aprasyto HTML) elemenot spalva i green

console.log(h3.classList); // grazins visas klases pridetas prie elemento. Su juo galim uzdeti arba nuimti klases

h3.classList.add("bigText") // pridesim nauja klase prie elemento

h3.classList.remove("text") // pasalins klase is elemento

console.log(h3.classList.contains("text"));

const a = document.createElement("a") // sukurs a elementa, taciau jis bus tik JS, HTML jis neatsiras

a.classList.add("bigText") // tam sukurtam elementui pridedam klase

a.textContent = "sotas elementas sukurtas js'e" // priskiriam teksta
a.id = "manoSukurtasId" // pridedame ID JS sukurtam a elementui
console.log(a);

div.appendChild(a) // sukurta elementa prides prie tevinio div elemento kaip child elementa. Prides kaip paskutini child elementa

div.prepend(a) //prides prie tevinio elemento pradzios vaikini elementa

const p = document.createElement("p");

p.textContent = "paragrafas sukurtas JSe"

div.append(p)

div.removeChild(p) // reciau naudojamas. Pasalins vaikini HTML elementa, turime konkreciai paduoti pavadinima to ka reikia pasalinti

p.remove() // dazniau naudojamas metodas, kuriame pats elementas susinaikins

document.querySelector("#tekstas").remove();

const products = ["pienas", "alus", "bulka"];

const productsListElement = document.querySelector("ul"); // pasiimame ul is html

products.forEach((pr) => {
    const li = document.createElement("li"); // kiekvienam is produktu bus sukamas ciklas, ir kiekvienam bus kuriamas li elementas
    li.textContent = pr; // koki teksta duosime naujam li elementui, siuo atveju duosim tai kas yra indexe

    productsListElement.append(li) // prides prie productsListElement kiekviena reiksme, tai bus pienas alus bulka
})

const testas = document.getElementsByTagName("p")

const firstTestas = document.getElementsByTagName("p")[0]


firstTestas.style.backgroundColor = "red"