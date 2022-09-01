var global = "Global variable";

let hello = "Local variable";

let variable;
variable = "Local variable, declaration and initialization";

const PI = 3.1416; //local constant

//object
const person = {
    name : "Juan",
    school : "Faculad de Ciencias, UNAM"
}
//modifying the object
person.email = "juanbautista@ciencias.unam.mx";

//array
const colors = ["blue", "red", "white", "dark"];

//modifying the array
colors.push("orange");

//using functions
let upperVariable = variable.toUpperCase();
let lowerVariable = variable.toLowerCase();
let trimVariable = variable.trim();
let splitVariable = variable.split(" ");

//creating function
function myFunction(name = "Juan") {
    console.log("function");
    return `Hello my name is ${name}`;
}

let number = 13;

//if
if (number < 10) {
    console.log("<" + "10");
}else {
    console.log(">=" + "10");
}

//while
while (number < 20) {
    console.log("Number: " + number);
    number++;
}

//for
for (let i = 0; i < 15; i++) {
    console.log(i+1*13-15);
}

//forms
var dateform = document.getElementById("date")
var emailform = document.getElementById("email");
var phoneform = document.getElementById("tel");
