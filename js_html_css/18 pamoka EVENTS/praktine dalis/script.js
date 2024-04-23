// Padarykite, kad paspaudus ant mygtuko išoktų alert su jūsų vardu! (naudoti inline metoda: onclick="")

// const button = document.querySelector("button");
// const p = document.querySelector("p")

// button.addEventListener("click", () => {
//     alert("Martynas")
//     p.textContent = "Martynas Jakutis";
// }) 


// Sukurkite programą, kurioje bus h1 tekstas su skaičiumi ir mygtukas. Paspaudus ant mygtuko, skaičius padidėja +1.

// const h1 = document.querySelector("h1");

// h1.textContent = 0;

// const butt = document.querySelector(".uzd1");

// butt.addEventListener("click", () => {
//     h1.textContent++
// })

// kitas budas
//let counter = 0;

// document.querySelector('button').addEventListener('click', () => {
//     counter++;
//     document.querySelector('h1').innerText = counter;
//   });

// Sukurkite programą, kurioje ilgas paragrafas. Bandant kopijuoti kodą – išmeta, kad negalima kopijuoti.

// document.querySelector(".uzd2").addEventListener("copy", () => {
//     alert("Kopijuoti negalima!")
// })

// Sukurkite programą, kur paspaudus ant mygtuko – sugeneruoja random skaičių nuo 1 iki 100 ir jį išveda kaip h1 tekstą.

// const resultat = document.querySelector("#generatorResult");

// function generateRandomNumber() {
//     return Math.floor(Math.random() * 100) + 1;
//   }

// document.querySelector(".uzd3").addEventListener("click", () =>{
//     const randomNumber = generateRandomNumber();
//     resultat.textContent = randomNumber;
// })

// galima ir taip 

//function generateRandomNumber() {
//     return Math.floor(Math.random() * 100) + 1;
// }

// document.querySelector('button').addEventListener('click', () => {
//   const randomNumber = generateRandomNumber();
//   document.querySelector('h1').innerText = randomNumber;
// });


// Sukurkite programą, kurioje du mygtukai – Turiu bent 18 metų ir Mažiau nei 18 metų. Jei paspaudžia ant pirmo mygtuko – išmeta h1 tekstą Alus. Jei antrą paspaudžia – išmeta alert su nepilnametis - nieko neturim.

// document.querySelector("#yra18").addEventListener("click", () => {
//     document.querySelector("#yra18h").textContent = "Alus"
// })

// document.querySelector("#nera18").addEventListener("click", () => {
//     return alert("Nieko neturim")
// })

// Sukurkite programą, kuri sugeneruoja random skaičių nuo 1 iki 3, kai tik užsikrauna puslapis. Vartotojas skaičiaus nemato (bet jūs pasiconsole’inkite). Ekrane – trys mygtukai (1, 2, 3). Vartotojas turi spėti koks random skaičius susigeneravo. Jei atspėja – iššoka alert("Yay"), jei ne – alert("Nay").