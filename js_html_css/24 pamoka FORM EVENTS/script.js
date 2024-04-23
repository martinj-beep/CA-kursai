const postForm = document.querySelector("#postForm");
const titleInput = document.querySelector("#titleInput");
const bodyInput = document.querySelector("#bodyInput");

const statusElement = document.querySelector("#statusText")
const bodyStatusElement = document.querySelector("#bodyStatus")

bodyInput.addEventListener("input", (e) => {
    const value = e.target.value;

    if (value.length < 5) {
        bodyStatusElement.textContent = "body is tew short"
    } else if (value.length > 10) {
        bodyStatusElement.textContent = "body is tew long"
    } else {
        bodyStatusElement.textContent = ""
    }
})

titleInput.addEventListener("focus", (e) => {
    e.target.style.width = "200px" // padarys, kad sufokusavus inputa, jo plotis padides iki 200px
})

titleInput.addEventListener("blur", (e) => {
    e.target.style.width = "auto" // nuemus fokusa nuo inputo grazins elemento ploti i iprastine reiksme
})

postForm.addEventListener("reset", (e) => {
    e.preventDefault()
    titleInput.value = "Pavydzdine reiksme";
    bodyInput.value = ""
})

postForm.addEventListener("submit", async (e) => { // padarys asinchronine arrow fnkc
    e.preventDefault(); // padarys kad puslapis nepasirefreshintu pasubmitinus
    const titleValue = titleInput.value;
    const bodyValue = bodyInput.value;


    try {
        statusElement.textContent = "Loading..." // ismes teksta kad kraunama paspaudus submit mygtuka
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                title: titleValue,
                body: bodyValue,
                userId: 1
            })
        })
        if (response.ok) {
            statusElement.textContent = "Success"
        } else {
            statusElement.textContent = "Please try again later"
        }
        console.log(response);
    } catch (error) {
        statusElement.textContent = "Please try again later"
    }
})