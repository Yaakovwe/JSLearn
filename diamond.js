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
    for (let j = 0; j < size; j++) {
        console.log(arrSpaces[j] + asterixArr[j]);
    }

    asterixArr.pop();
    arrSpaces.pop();
    asterixArr.reverse();
    arrSpaces.reverse();
    // console.log(asterixArr);
    //console.log(arrSpaces);
    for (let k = 0; k < size - 1; k++) {
        console.log(arrSpaces[k] + asterixArr[k]);
    }
    //console.log(lastSpace + char);
}

diamond(3, "*")