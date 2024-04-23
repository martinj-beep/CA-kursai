const postsEndpoint = "https://jsonplaceholder.typicode.com/posts";

fetch(postsEndpoint).then((response) => { //kreipiames i adresa (endpointa), siuo atveju URL. Kol kas tik kreipiames, nieko daugiau nedarome.
    console.log(response);
    return response.json(); // response elementa konvertuos IS json formato i arejaus formata
})
.then((data) => {
    console.log(data);
})



const showUsersButton = document.querySelector("button");
const userList = document.querySelector("ul");

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    const users = await response.json();
    return users; // paims vartotojus is serverio ir returnins informacija
}

async function displayUsers() {
    const users = await getUsers();
    console.log(users);

    users.forEach((user) => {
        const li = document.createElement("li")
        li.textContent = `${user.name} location: ${user.address.geo.lat} ${user.address.geo.lng}` // funkcija pasiims kiekviena vartotoja is serverio, paims is jo medziaga ir sudes i liu
        userList.append(li); //viska prides prie userList ("ul" elementas esantis HTMLe)
    })
}

showUsersButton.addEventListener("click", displayUsers) // paspaudus mygtuka, jis displayins grazinta uzeriu funkcija



const todosUrl = "https://jsonplaceholder.typicode.com/todos";

const todosBtn = document.querySelector("#todosBtn");
const tableBody = document.querySelector("tbody");

async function getTodos() {
    const response = await fetch(todosUrl);
    const data = await response.json();

    return data;
}

async function addTodosToTable() {
    const todos = await getTodos();
    const todosElements = todos.map((todo) => {
        const tr = document.createElement("tr");
        const tdTitle = document.createElement("td");
        const tdIsComplete = document.createElement("td");

        tdTitle.textContent = todo.title;
        tdIsComplete.textContent = todo.completed;

        tr.append(tdTitle, tdIsComplete);

        return tr;
    })
    tableBody.append(...todosElements)
}

todosBtn.addEventListener("click", addTodosToTable)