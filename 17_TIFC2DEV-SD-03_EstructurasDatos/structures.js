// Array
let array_1 = [
    "cereal",
    "bread",
    "eggs"
]

//console.log(array_1);

let element2 = array_1[3];
console.log(element2);

let newElement = array_1.push("Milk")
console.log(newElement);   // add a new element

let deleteElem = array_1.pop();
console.log(deleteElem); // return the deleted element

let otherElement = array_1.splice(2, 0 );
console.log(otherElement);

// object
let object_1 = {
    "name": "Mandeep Singh",
    "age": 22,
    "contact": "msingh@example.com"
}

console.log(object_1);
console.log(object_1.name);


// Array with an object element
let object_2 = {
    "name": "Jane Smith",
    "age": 20,
    "contact": [
        "smithj@example.com",
        "01632614909",
        "07700900217"
    ]
}

console.log(object_2);
console.log(object_2.contact[2]);


