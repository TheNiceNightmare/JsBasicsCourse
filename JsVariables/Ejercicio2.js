// null, undefined and NaN

var var1 = [1, 2, 3];
console.log(var1);

var var1 = [1, 2, 3, '4'];
console.log(var1);

var var1 = [1, 2, 3, '4'];
console.log(var1[1]);


//undefined
var var1 = [1, 2, 3, '4'];
console.log(var1[4]);

var var1 = [1, 2, 3, '4',];
console.log(var1[4]);

var var1 = undefined;
console.log(var1);

//null
var var1 = null;
console.log(var1);  //null


var var1 = null;
console.log(null == undefined); //true

var var1 = null;
console.log(null === undefined); //false

var var1 = NaN;
console.log(var1);


var var1 = NaN;
console.log(typeof var1);  //number


var var1 = null;
console.log(typeof var1);  //object


var var1 = undefined;
console.log(typeof var1);  //undefined