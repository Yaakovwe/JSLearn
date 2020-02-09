'use strict';

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = array.length / 2;
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    const mergedArray = [];
    return mergedArray.concat(mergeSort(left), mergeSort(right));
}



console.log(mergeSort([38, 27, 43, 9, 82, 10]));