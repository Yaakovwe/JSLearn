'use strict'
const util = require('util');
//with loop multiplication function without *
// const withLoop = (num1, num2) => {
//     let multipledNum = 0;
//     for (let i = 0; i < num2; i++) {
//         multipledNum += num1;
//     }
//     return multipledNum + " With Loop";
// }

// console.log(withLoop(3, 7));
// console.log(withLoop(2, 5));
// console.log(withLoop(8, 9));

//recursive multiplication function without multiplying

const recursiveMultiplication = (num, num2) => {
    if (num <= 1) {
        return num2;
    } else {
        return recursiveMultiplication(num - 1, num2) + num2;
    }
}

console.log(util.inspect(recursiveMultiplication(3, 2), false, null, true /* enable colors */ ));
console.log(recursiveMultiplication(5, 5));
console.log(recursiveMultiplication(7, 8));
console.log(recursiveMultiplication(7, -8));
console.log(recursiveMultiplication(9, -10));
console.log(recursiveMultiplication(-9, 10));