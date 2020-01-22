"use strict";
const util = require('util');


function arrayToList(array) {
    let list = null;
    console.log(array);
    const arrReversed = array.reverse();
    console.log(array);
    for (let i = 0; i < arrReversed.length; i++) {
        // console.log(i); //2, then 1
        // console.log(array[i]); //20, then 10
        list = {
            value: array[i],
            rest: list //null, then {value:20, rest: null}
        };
        // console.log(list);
    }
    return list;
}
//console.dir(arrayToList([10, 20, 30, 40]));
console.log(util.inspect(arrayToList([10, 20, 30, 40]), false, null, true /* enable colors */ ))
    //{ value: 10, rest: { value: 20, rest: null } }