///The While-Loop

var number = 5;

while (number < 7) {
    console.log(number);
    number++;           // 5   6
}

var condition = true;
var i = 2;

while (condition) {
    if (i == 3) {
        condition = false;
    }
    console.log(i);
    i++;                    // 2   3
}

var condition = fqalse;

do {
    console.log('Executed');
}
while (condition);          //"Executed"