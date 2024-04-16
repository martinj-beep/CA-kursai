export const PI = 3.14; // galima bet ka exportuoti,, kintamuosius, objektus funkcijas ir tt 

export function divideNumbers(x, y) { // export reiskia, kad bus leidziama naudoti sita funkcija kitame JS faile
    return x / y;
}

export default () => { // bus eksportuojamas kaip svarbiausias dalykas, nereikia tokiu atveju nei "const", nei pavadinimo, taciau ji importavu,s jam reikia duoti pavadinima. Per faila buna tik vien default funkcija
    return "Vardas"
}