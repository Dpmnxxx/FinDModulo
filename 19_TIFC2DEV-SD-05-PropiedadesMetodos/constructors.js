function Person(p1, p2) {
    this.forename = p1
    this.surname = p2
    this.fullName = function () {
        return this.forename + " " + this.surname
    }
}
// constructor function always uses an uppercase at start
// Person 1
let personOne = new Person("Kasim", "Chaudry")

// Person 2
let personTwo = new Person("Eva", "Malinova")

//building an object
let personThree = new Person("ALAN","MARTINEZ");
console.log(personThree);
console.log(personThree.fullName());
