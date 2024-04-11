// Parašykite funkciją setNotification, kuri priima tekstą ir išsaugo jį į Local Storage naudojant raktą "notification".

function setNotification() {
    localStorage.setItem("notification", "notification")
}

setNotification()

// Sukurkite funkciją getNotification, kuri grąžina pranešimą išsaugotą Local Storage naudojant raktą "notification". Gautą pranešimą atvaizduokite vartotojui, pvz. naudojant alert().

function getNotification() {
    return localStorage.getItem("notification");
}

console.log(getNotification());