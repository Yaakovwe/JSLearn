"use strict";

function diamond(size, char, spaceHolder) {
    let specialChar = char;
    let newSpace = spaceHolder;
    const spacesArr = [];
    const charArr = [];
    // if (typeof((size) === 'string')))
    for (let i = 0; i < size * 2; i++) {
        if (i % 2 === 0) {
            charArr.push(specialChar);
            spacesArr.push(newSpace);
            newSpace += spaceHolder;
        }
        specialChar += char;
    }

    spacesArr.reverse();
    // console.log(arrSpaces);
    // console.log(asterixArr);
    for (let i = 0; i < size; i++) {
        console.log(spacesArr[i] + charArr[i]);
    }

    charArr.pop();
    spacesArr.pop();
    charArr.reverse();
    spacesArr.reverse();
    // console.log(asterixArr);
    //console.log(arrSpaces);
    for (let i = 0; i < size - 1; i++) {
        console.log(spacesArr[i] + charArr[i]);
    }
    //console.log(lastSpace + char);
}

console.log(0);
diamond(0, "*", " ");
console.log(1);
diamond(1, "*", " ");
console.log(-1);
diamond(-1, "*", " ");
console.log(2);
diamond(2, "*", " ");
console.log(4);
diamond(4, "*", " ");