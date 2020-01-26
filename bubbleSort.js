'use strict'
const util = require('util');

function bubbleSort(data) {
    let temp;
    let swap = false;
    while (swap === false) {
        for (let i = 0; i < data.length; i++) {
            if (data[i] < data[i - 1]) {
                temp = data[i - 1];
                data[i - 1] = data[i];
                data[i] = temp;
                swap = false;
                console.log(data + " " + swap);
            } else {
                swap === true;
            }
        }
    }
    return data;
}
let myArr = [5, 3, 1, 7, 9, 2, 4, 6, 8];
console.log(util.inspect(bubbleSort(myArr), false, null, true /* enable colors */ ));