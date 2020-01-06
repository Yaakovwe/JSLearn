"use strict";

function diamond(size, char, spaceHolder) {
    let specialChar = char;
    const space = spaceHolder;
    let newSpace = spaceHolder;
    const spacesArr = [];
    const asterixArr = [];
    // if (typeof((size) === 'string')))
    for (let i = 0; i < size * 2; i++) {
        if (i % 2 === 0) {
            asterixArr.push(specialChar);
            spacesArr.push(newSpace);
            newSpace += space;
        }
        specialChar += char;
    }

    spacesArr.reverse();
    // console.log(arrSpaces);
    // console.log(asterixArr);
    for (let i = 0; i < size; i++) {
        console.log(spacesArr[i] + asterixArr[i]);
    }

    asterixArr.pop();
    spacesArr.pop();
    asterixArr.reverse();
    spacesArr.reverse();
    // console.log(asterixArr);
    //console.log(arrSpaces);
    for (let i = 0; i < size - 1; i++) {
        console.log(spacesArr[i] + asterixArr[i]);
    }
    //console.log(lastSpace + char);
}

diamond(4, "*", " ")