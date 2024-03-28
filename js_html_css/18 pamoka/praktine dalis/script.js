// Padarykite, kad paspaudus ant mygtuko išoktų alert su jūsų vardu! (naudoti inline metoda: onclick="")

const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert("Martynas")
    const p = document.createElement("p");
    p.textContent = "Martynas Jakutis";
}) // sutvarkyt kad mestu p