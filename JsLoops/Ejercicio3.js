//For -Loops and Arrays

var array = [1, 2, 3];

for (var i = 0; i < 3; i++) {
    console.log(array[i]);                  /// 1 2 3
}


var array = [1, 2, 3];

for (var i = 0; i < 5; i++) {
    console.log(array[i]);                  /// 1 2 3 undefined undefined
}

var array = [1, 2, 3];

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);                  /// 1 2 3 
}
