'use strict'
const util = require('util');

function fibonacci(array) {
    const fibonacciArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === undefined) {
            array[i] = 0;
        } else if (array[i - 1] === undefined) {
            array[i - 1] = 0;
        }
        fibonacciArray.push(array[i] + array[i - 1]);
    }
    return fibonacciArray;
}

let arr = [5, 3, 1, 7, 9, 2, 4, 6, 8];
console.log(util.inspect(fibonacci(arr), false, null, true /* enable colors */ ));
let wikiArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
console.log(util.inspect(fibonacci(wikiArray), false, null, true /* enable colors */ ));