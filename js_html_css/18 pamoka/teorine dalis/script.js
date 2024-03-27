const button = document.querySelector("button") // pasiimam html elementa
const input = document.querySelector("input")

button.addEventListener("click", (e) => {
    console.log(e.target); // islogins html elementa, iskvietusi si eventa
    console.log("mygtukas paspaustas");
}) // paimtam html elementui bus priskirta salyga,. kuomet bus vykdoma funkcija. 

button.addEventListener("mouseover", () => {
    console.log("pele virs mygtuko");
}) // hoverinant virs mygtuko, islogins pele virs mygtuko

button.addEventListener("mouseleave", () => {
    console.log("pelyte isejo");
}) // patraukus pele nuo mygtuko, islogins teksta

const h1 = document.querySelector("h1");

input.addEventListener("input", (e) => { // iskvies eventa pakitus kazkam paciame html element, kaip pvz rasant kazka inpute
    console.log(e.target.value); // kaskart isconsolins kai bet kas yra irasoma i inputa
    h1.textContent = e.target.value; // pasiimta value priskirsime h1 elementui esanciam html
}) 

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault() // privers eventa nedaryti numatytojo veiksmo paskirtam eventui. SITAM PVZ PADARYS KAD SUBMIT NEPERKRAUTU PUSLAPIO
    console.log("submit happened");
}) // jeigu html elementui bus planuojama tik uzdeti eventa, jo i kintamaji talpint nera butina

function showTooltip(event, text) {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerText = text;
    tooltip.style.top = event.pageY + 10 + "px";
    tooltip.style.left = event.pageX + 10 + "px";
    document.body.appendChild(tooltip);
  } 
  function hideTooltip() {
    const tooltip = document.querySelector(".tooltip");
    if (tooltip) {
      tooltip.remove();
    }
  }

  const a = document.querySelector("#aHover");

  a.addEventListener("mouseover", (e) => {
    const tooltip = document.createElement("div");
    tooltip.textContent = "kazkoks tekstas";
    tooltip.style.top = `${e.pageY}px`;
    tooltip.style.left = `${e.pageX}px`;
    tooltip.style.position = "absolute";
    document.body.append(tooltip)
    tooltip.classList.add("tooltip")
  })

  a.addEventListener("mouseleave", () => {
    const tooltip = document.querySelector(".tooltip");
    tooltip.remove();
  })



  const counterP = document.querySelector("#counter");

  const incrementButton = document.querySelector("#incrementButton");

  const decrementButton = document.querySelector("#decrementButton");

  decrementButton.addEventListener("click", () => {
    counterP.textContent = +counterP.textContent - 1;
  })

  incrementButton.addEventListener("click", () => {
    counterP.textContent = +counterP.textContent + 1;
  })





  const imageSources = [
    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg",
    "https://media.4-paws.org/c/f/0/6/cf065689b6f82a397b40846d88b622ba5068de84/VIER%20PFOTEN_2016-07-08_011-4993x3455.jpg"
  ]

  const nextImageButton = document.querySelector("#next");

  const previousImageButton = document.querySelector("#previous");

  const image = document.querySelector("img");

  let currentImageIndex = 0;

  nextImageButton.addEventListener("click", () => {
    currentImageIndex++;
    if (currentImageIndex > imageSources.length - 1) {
        currentImageIndex = 0;
    }

    image.src = imageSources[currentImageIndex]
  })

  previousImageButton.addEventListener("click", () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = imageSources.length - 1;
    }

    image.src = imageSources[currentImageIndex];
  })
  //uzduotis padarys, kad keistisui nuotraukos paspaudus mygtuka