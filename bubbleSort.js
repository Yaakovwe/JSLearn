'use strict'
const util = require('util');

function bubbleSort(data) {
    let temp = false;
    while (temp === false) {
        for (var i = 0; i < data.length; i++) {
            if (data[i] < data[i - 1]) {
                data[i - 1] = data[i];
                console.log(data);
                temp === false;
            } else {
                temp === true;
            }
        }
    }
    return data;
}

let myArr = [5, 3, 1, 7, 9, 2, 4, 6, 8];
console.log(util.inspect(bubbleSort(myArr, 10), false, null, true /* enable colors */ ));