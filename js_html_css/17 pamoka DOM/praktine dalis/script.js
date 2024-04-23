// Susikurkite projektą, be jokių HTML elementų <body> viduje. 

// Sukurkite funkciją createTextElement, kuri sukuria ir grąžina naują DOM elementą p su pateiktu tekstu  ir pridėkite į <body>.

// function createTextElement(text) {
//     const p = document.createElement('p');
//     p.textContent = text;
//     return p;
// }
// document.body.appendChild(createTextElement("Sveiki, tai naujas paragrafas!"));


// // Sukurkite HTML faile <h1> žymą su id="name" ir tekstu "unknown". Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .

// const h1 = document.createElement("h1")
// h1.setAttribute("id", "name")
// h1.textContent = "unknown"


// Nusikopijuokite apačioje esantį kodą ir su JavaScript pasikeiskite antrame paragrafe esantčio <span> tekstą - iš 'red' į 'blue':
// <p class="redtext">This text will be in <span>red</span></p>
// <p class="bluetext">This text will be in <span>red</span></p>
// <p class="yellowtext">This text will be in <span>yellow</span></p>

// const span = document.querySelector(".bluetext span");

// span.textContent = "blue"

// Naudodami JavaScript apkeiskite pirmus du sąrašo elementus vietomis. Tačiau, kabliukas - negalima JavaScript įrašyti testo (kitaip tariant hard-codinti). Pirma, Jūs turite pasiimt pirmo ir antro sąrašo elemento reikšmes ir jas išsisaugoti į kintamuosius.


// const mother = document.querySelector("ol")
// const first = document.querySelector("ol li");
// const second = document.querySelector("ol li:nth-child(2)");

// mother.prepend(second)


// Sukurkite funkciją createList, kuri priima masyvą su tekstu ir sukuria DOM ul elementą su li vaikais, atitinkančiais masyvo elementus.

// Pavyzdys, kaip galime naudoti šią funkciją:
// document.body.appendChild(sukurtiSarasa(["Pienas", "Duona", "Kiaušiniai"]));

// function createList(arr) {
//     const ul = document.createElement("ul")
//     arr.forEach(element => {
//         const li = document.createElement("li");
//         li.textContent = element;
//         ul.appendChild(li);
//     });
//     return ul
// }

// document.body.appendChild(createList(["Pienas", "Duona", "Kiaušiniai"]))