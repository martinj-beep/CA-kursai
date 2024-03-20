// Parašykite funkciją addElement, kuri naudoja push() metodą, kad pridėtų naują elementą į masyvą.
// const arr = [12, 34, 23, 24, 4];
// const addElement = (num) => {
//     arr.push(num);
//     return arr
// }
// console.log(addElement(999));





// Sukurkite funkciją mergeArrays, kuri sujungia du masyvus į vieną.
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const mergeArrays = (a, b) => a.concat(b);

// console.log(mergeArrays(arr1, arr2));

// const mergeArrays = (arr1, arr2) => [...arr1, ...arr2]; // paprastesnis variantas





// Parašykite funkciją addMultipleElements, kuri naudoja spread operatorių ..., kad pridėtų kelis elementus į masyvą. 
// const array = [1, 2, 3];
// const addMultipleElements = ([...arr], n1, n2, n3) => {
//     return arr.concat(n1, n2, n3)
// }

// console.log(addMultipleElements(array, 4, 5, 6));

// const addMultipleElements = (arr, ...elements) => [...arr, ...elements]; // lengvesnis budas

// console.log(addMultipleElements(array, 34, 23, 12));

// Parašykite funkciją doubleNumbers, kuri naudoja map() metodą, kad padvigubintų kiekvieną masyvo elementą.

// const arr = [1, 2, 3]
// const doubleNumbers = (arr) => arr.map(function(arr) {
//     return arr * 2
// });

// console.log(doubleNumbers(arr));

// const doubleNumbers = (arr) => arr.map(number => number * 2); // lengvesnis budas, tas pats kas virsuj, tik cia arrow funkcija be return

// Parašykite funkciją findUnique, kuri grąžina unikalius elementus iš masyvo.

const findUnique = (arr) => {
    
}



// Sukurkite funkciją findMostFrequent, kuri nustato ir grąžina dažniausiai pasitaikantį elementą masyve.

//console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3])); // 1

function findMostFrequent(arr) {
    let findMostFrequentNumber;
    let findMostFrequentAmount = 0;

    arr.forEach((x) => {
        const filtered = arr.filter((y) => y === x); // is originalaus arejaus isfiltruos tik visus tokius pacius skaicius
        console.log(`x - ${x}, filtered: ${filtered}, length: ${filtered.length}`);

        if (filtered.length > findMostFrequentAmount) {
            findMostFrequentNumber = x;
            findMostFrequentAmount = filtered.length // cia lygins su praejusia buvusia didziausia reiksme, kuomet lyginamas yra filtered.length (kiek kartu kartojosi skaicius)
        }
    })

    return findMostFrequentNumber
}

console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3]));



const groupedNumbers = {};

arr.forEach((x) => {
    if (groupedNumbers[x]) {
        groupedNumbers[x].push(x);
    } else {
        groupedNumbers[x] = [x]
    }
})
console.log(groupedNumbers);

console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3]));
