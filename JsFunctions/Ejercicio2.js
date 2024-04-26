///FUNCTIONS - ARGUMENTS &N RETURN VALUES

function calc() {
    return 'Inside function';
};
var returned = calc();
console.log(returned);   //"Inside function"

function calc() {
    var stringVar = 'Inside function';
    return stringVar;
};
var returned = calc();
console.log(returned);   //"Inside function"

function calc(number1, number2) {
    return number1 + number2;
};
var returned = calc();
console.log(returned);    //NaN

function calc(number1, number2) {
    return number1 + number2;
};
var returned = calc(10, 8);
console.log(returned);    //18


function calc(number1, number2) {
    return number1 + number2;
};
var returned = calc(10, 8, 18);
console.log(returned);    //18  aun no se obiene el otro argumento

function calc(number1, number2) {
    return number1 + number2;
};
var calculator = calc;
console.log(calculator(15, 2)); ///17
