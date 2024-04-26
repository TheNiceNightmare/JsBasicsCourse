// The If-Statement
var condition = true;
if (condition) {
    console.log('Executed!')   /// Executed!
}

var condition = false;
if (condition) {
    console.log('Executed!')   ///  "" //
}

var condition = true;
if (condition) {
    console.log('Executed!')   ///  Executed!
}
else {
    console.log('Not Executed!')
}

var condition = false;
if (condition) {
    console.log('Executed!')
}
else {
    console.log('Not Executed!') ///  Not Executed!
}

var condition = false;
var anotherCondition = true;
if (condition) {
    console.log('Executed!');
}
else if (anotherCondition) {
    console.log('Still Executed!');   /// Still Executed!
}
else {
    console.log('Not Executed!');
}

var condition = false;
var anotherCondition = false;
if (condition) {
    console.log('Executed!');
}
else if (anotherCondition) {
    console.log('Still Executed!');
}
else {
    console.log('Not Executed!');  /// Not Executed!
}

