'use strict';
const util = require('util');

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return merge(
        mergeSort(left), mergeSort(right)
    );
}

// Merge the two arrays: left and right
function merge(left, right) {
    let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}


console.log(util.inspect(mergeSort([38, 27, 43, 9, 82, 10]), false, null, true /* enable colors */ ));
//console.log(mergeSort([38, 27, 43, 9, 82, 10]));