// function generateRandomNumber() {
//     return Math.floor(Math.random() * 6);
// }


// const myPromise = new Promise((resolve, reject) => {
//     const result = generateRandomNumber();
//     if (result !== 5) {
//         setTimeout(() => resolve(), 5000)
//     } else {
//         setTimeout(() => reject(), 5000)
//     }
// })
  
// myPromise.then(() => alert("yes, it works!"));

// console.log("This code will run first, even though it is the last one. This is our asynchrony")


// then bendrauja su kitu then. Papildykite antrą pratimą, kad jei resolve'inasi pirmas pažadas – pasileidžia then(), kuris paprasčiausiai grąžina žinutę This is a message, šią žinutę pagauna antrasis then() ir ją alertina. 

// Prisiminkime – ką then() returnina, tą pasigauna kitas then() kaip parametrą. Nelabai aišku? Pasižiūrėkite teoriją.

const myPromise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 5) + 1;
  
setTimeout(() => {
    if(random === 1){
        reject();
    }
    else{
        resolve();
    }
}, 5000)
})
  
  myPromise
    .then(() => "This is a message")
    .then((message) => alert(message))
    .catch(() => alert("Oops, promise rejected"))