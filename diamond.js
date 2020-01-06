"use strict";

function diamond(size, char) {
    let specialChar = char;
    const space = " ";
    let newSpace = " ";
    const arrSpaces = [];
    const asterixArr = [];

    for (let i = 0; i < size * 2; i++) {
        if (i % 2 === 0) {
            asterixArr.push(specialChar);
            arrSpaces.push(newSpace);
            newSpace += space;
        }
        specialChar += char;
    }

    arrSpaces.reverse();
    // console.log(arrSpaces);
    // console.log(asterixArr);
    for (let k = 0; k < size; k++) {
        console.log(arrSpaces[k] + asterixArr[k]);
    }

    asterixArr.pop();
    arrSpaces.pop();
    asterixArr.reverse();
    arrSpaces.reverse();
    // console.log(asterixArr);
    //console.log(arrSpaces);
    for (let l = 0; l < size - 1; l++) {
        console.log(arrSpaces[l] + asterixArr[l]);
    }
    //console.log(lastSpace + char);
}

diamond(8, "*")