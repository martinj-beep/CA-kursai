const postsUrl = "https://jsonplaceholder.typicode.com/posts/1"; 

const button = document.querySelector("button");

async function postData() {
    const response = await fetch(postsUrl, { //fetch (post) metodas vietoje get varianto
        method: "PUT", // PUT atnaujins, POST issius nauja informacija i backend
        headers: {
            "Content-Type": "application/json" //backendui pasakys kad jis gavo jsono info, su ja tures dirbt kaip su json
        },
        body: JSON.stringify({ // body dalis issius informacija naudojant POST metoda
            title: "dwdawd",
            body: "kazkoks body",
            userId : 20
        })
    })

    const data = await response.json()

    console.log(data);
}

// async function postData() {
//     const response = await fetch(postsUrl, { //fetch (post) metodas vietoje get varianto
//         method: "DELETE" // TIESIOG ISTRINS INFORMACIJA IS BACKENDO
//     })

//     const data = await response.json()

//     console.log(data);
// }

button.addEventListener("click", postData);


const h1 = document.querySelector("h1")

h1.addEventListener("dblclick", () => console.log("paspausta dukart")) // doubleclickinus is konsolins teksta

h1.addEventListener("mousedown", (e) => {
    e.target.style.fontSize = "50px"; //ispaudus elementa jo srifto dydis padides
})

h1.addEventListener("mouseup", (e) => {
    e.target.style.fontSize = "20px"; //ispaudus elementa jo srifto dydis sumazes
})

// document.addEventListener("keydown", (e) => {
//     console.log(e.key); // islogins klavisa, kuris buvo paspaustas esant puslapyje
// })

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("Enter was clicked");
    }
})

const input = document.querySelector("input");

input.addEventListener("keydown", (e) => { // rinks informacija tik spaudziant klavisus esant ant inputo
    e.stopPropagation // padarys kad eventas nenueiti per visus tevinius html elementus

    if (e.key === "Enter") {
        console.log(e.target.value); // paspaudus enter klavisa, iskonsolins viska kas buvo suvesta value
    }
})

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        e.target.value = ""; // paspaudus enter iskonsolins kas buvo parasyta, atleidus enter, laukelis issitrins, value bus pakeistas i tuscia stringa
    }
})