function calc() {
    console.log("Inside fuction!");
}
calc(); //"Inside function!"

////////////////////////////////
calc();
function calc() {
    console.log("Inside fuction!");   //"Inside function!"
}

var calc = function calc() {
    console.log("Inside fuction!");  //"Inside function!"
}
calc();


function calc() {
    console.log("Inside fuction!");
}
console.log(typeof calc);  /// "function"

function calc() {
    console.log("Inside fuction!");
}
var anotherFn = calc;
anotherFn();   ///"Inside function!"


function calc() {
    console.log("Inside fuction!");
}
var anotherFn = calc();  ///
anotherFn();   ///"Inside function!, "error""


function calc() {
    console.log("Inside fuction!");
}
var anotherFn = calc();  ///
console.log(anotherFn);   ///"Inside function!", undefined