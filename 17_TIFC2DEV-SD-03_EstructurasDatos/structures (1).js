// ************* Array (List) *************
// let array1 = ["cereal","bread","eggs"];
let array1 = [
    "cereal",
    "bread",
    "eggs"
];

let element2 = array1[1];
console.log(element2); // Output: bread
let elementUnknow = array1[3];
console.log(elementUnknow); // Output: undefined

// Agregar nuevo elemento al final del Array
let newElement = array1.push("milk");
let newElement2 = array1.push("ham");
console.log(newElement2); // Output: 5

console.log(array1);

// Eliminar el último elemento del Array
let deleteLastElem = array1.pop();
console.log(deleteLastElem);
console.log(array1);

// Insertar un elemento en el medio del Array
let otherElement1 = array1.splice(2, 0, "butter");
console.log(otherElement1); // Output: []

console.log(array1);

// Eliminar un elemento de un index específico
let delElement = array1.splice(2, 1);
console.log(delElement); // Output: [ 'butter' ]

console.log(array1);


// ************* Object (Dictionary) ************
let object1 = {
    "name": "Mandeep Singh",
    "age": 22,
    "contact": "msingh@example.com"
};

console.log(object1);
console.log(object1.name); // Output: Mandeep Singh
console.log(object1.contact); // Output: msingh@example.com
console.log(object1.age); // Output: 22

// Object with a Array element
let object2 = {
    "name": "Jane Smith",
    "age": 20,
    "contact": [
        "smithj@example.com",
        "01632614909",
        "07700900217"
    ]
};

console.log(object2);
console.log(object2.name); // Output: Jane Smith
console.log(object2.age); // Output: 20
console.log(object2.contact); // [ 'smithj@example.com', '01632614909', '07700900217' ]
console.log(object2.contact[0]); // Output: smithj@example.com

