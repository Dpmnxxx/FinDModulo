// An array of days of the week, la constante no puede ser redefinido, solo si es array se pueden modificar los elementos
const WEEKDAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]


// Problem 1: Loops
// This for loop will execute once for every element in the WEEKDAYS array.
for (let element in WEEKDAYS) {
    console.log("The loop is at position " + element)
    console.log("The day at position " + element + " is " + WEEKDAYS[element]);

}

// Error 1: ReferenceError: element is not defined
console.log("The day at position " + element + " is " + WEEKDAYS[element]);

// Problem 2: Branches
// This code block will check if each element in the WEEKENDS array is Saturday OR Sunday
for (let element in WEEKDAYS) {


    if (element === "Saturday" || element === "Sunday") {
        let weekend = true
    }

    // Error 2: ReferenceError: weekend is not defined
    if (weekend === true) {
        console.log("It's a weekend!")
    }
}

// Problem 3: Functions
// This function will check if an input day number corresponds to a working day
function workdayChecker(dayNumber) {
    let workday = true

    if (WEEKDAYS[dayNumber] === "Saturday" || WEEKDAYS[dayNumber] === "Sunday") {
        workday = false
    }

    return workday
}

workdayChecker(4)

// Error 3: ReferenceError: workday is not defined
console.log(workday)

