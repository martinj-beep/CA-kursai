// document.cookie = "name=martynas" // pasiekiami visi cookies irasyti i narsykle. Siuo atveju tai yra vienas cookie

document.cookie = "name=martynas; expires=" + new Date(2024, 5, 10).toUTCString() 
//davimas galiojimo laiko, jis turi buti duotas UTC formatu. Siuo atveju galios iki geguzes. SUformatuos laika UTC formatu. Datos objektas padea dirbti su datomis. VS code menesius ir dienas skaiciuoja nuo 0, todel application rodo ne 5/10 o 6/9

document.cookie = "lastName=Pavarde"

console.log(document.cookie);

function getCookie(key) {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const keyValue = cookies[i].trim().split("=");
        console.log(keyValue);
        if (keyValue[0] === key) {
            return keyValue[1]
        }
    }
    console.log(cookies);
}

console.log(getCookie("lastName")) // funkcija paims is cookio info ir islogins ja

localStorage.setItem("name", "martynas") // sukuriam itema local storage, du kintamieji, pirmas yra key, antras value

console.log(localStorage.getItem("name")); // islogins itema is local storage. Priima viena argumenta, key name

localStorage.removeItem("name") // pasalins local storage ir istrins is ten objekta, kurio key yra name

sessionStorage.setItem("sessionsStorageName", "kazkoks vardas") // sukurs itema session storage. Jis issitrins kaskart uzdarius puslapi


const button = document.querySelector("button");

button.addEventListener("click", () => {
    localStorage.setItem("labas", "labas")
})

window.addEventListener("storage", function(event) {
    console.log('the value for '+ event.key +' changes from '+ event.oldValue +' to '+ event.newValue);
});

// localStorage.removeItem("labas")