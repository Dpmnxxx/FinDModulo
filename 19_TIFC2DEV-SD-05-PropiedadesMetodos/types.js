// Object
let person = {
    "forename": "Kasim",
    "surname": "Chaudry",
    "fullName": function () {
        return person.forename + " " + person.surname
    },
    "age": 27,
    "contact": {
        "email": {
            "home": "liverpoolrox@example.net",
            "work": "kasimchaudry@example.com"
        },
        "phone": {
            "home": "+441632870235",
            "mobile": "+447700929333"
        }
    },
    "employed": true,
    "position": "Junior Developer"
}

console.log(typeof person); // print the type 
console.log(person.forename);
console.log(person.fullName());

console.log(Number.parseInt(3.1416));
console.log(Math.PI);

let num1 = 38
let numTrans = num1.toString();
console.log(numTrans);
console.log(typeof numTrans);





