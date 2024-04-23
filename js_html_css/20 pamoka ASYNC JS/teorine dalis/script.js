setTimeout(() => {
    console.log("labas");
}, 2000)

let x = 10;

x += 10;

console.log(x);

const pr = new Promise((resolve, reject) => { // pazadas, kad kazkas ivyks, jeigu ivyksta tuomet resolve, jeigu kazkas negerai, tuomet rejected. IS DALIS DAZNIAUSIAI BUS NEAPRASOMA PATIES PROGRAMUOTOJO
    const user = {
        name: "Vardas",
        age: 20
    }
    // resolve(user);
    reject("rejectinom") // kuomet rejected, then'ai nesiaktivuos
});

// then

pr.then((data) => { // then issikvies tik kuomet promise bus resolved. Data paims informacija, kuri yra promise, siuo atveju vardas ir amzius
    console.log("resolved", data);
}).then((data) => {
    console.log("then 2", data); // data objekto negaus, nes data objekta gauna tik pats pirmasis then'as. Perduos kitam, tik kuomet informacija bus return'inta auksciau esanciame then'e
}).then((data) => {
    console.log("then 3");
    return "kazkas"
}).catch((err) => { // catch bus tik vienas. kuomet promise yra rejected, bus cykdoma catch dalis
    console.log("Catch", err); 
}).finally((x) => { // dalykas kuris ivyks nesvarbu ar promise bus resolved ar rejected. JIS NEGALI GAUTI JOKIOS INFORMACIJOS I SAVO CALLBACK FUNKCIJA
    console.log("finally", x);
})

// async/await

const userInfoPr = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("kazkas negerai")); // pakurtas erroras kuomet rejectinamas promise
    }, 2000)
})

userInfoPr.then((data) => console.log(data))

const userInfo = await userInfoPr; // palaukia kol gausime koki nors rezultata is promise. HTMLE VIETOJE DEFER REIKIA RASYTI type="module"
console.log(userInfo);

async function displayUserInfo(params) {
    try { // try/catch veikia kaip then/catch. bus rasomas, kuomet tikimasi erroro is backendo
        const usrInfo = await userInfoPr; // siuo atveju await gales buti naudojama prie funkcijos prirasius async, paversiancia ja asinchronine fnkc.
    
        const p = document.createElement("p");
        p.textContent = `${usrInfo.name} ${usrInfo.lastName}`
    
        document.body.append(p)
    } catch {
        console.log("kazkoks erroras ivyko");
    }
}


const btn = document.querySelector("button");

btn.addEventListener("click", displayUserInfo);



const err = new Error("negalima gauti userio info");

throw err // throw errora ismes consoleje

fetch("https://jsonplaceholder.typicode.com/posts").then((data) => { // fetch pats sukuria promise
    return data.json();
})
.then((data) => {
    console.log(data);
})