"use strict";

function diamondFunc(size, char, spaceHolder) {
    let specialChar = char;
    let newSpace = spaceHolder;
    const spacesArr = [];
    const charArr = [];
    const diamondArr = [];
    let diamondVar = "";
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
        diamondArr.push(spacesArr[i] + charArr[i]);
    }
    charArr.pop();
    spacesArr.pop();
    charArr.reverse();
    spacesArr.reverse();
    // console.log(asterixArr);
    //console.log(arrSpaces);
    for (let i = 0; i < size - 1; i++) {
        diamondArr.push(spacesArr[i] + charArr[i]);
    }
    for (let i = 0; i < diamondArr.length; i++) {
        diamondVar += diamondArr[i] + ("\n");
    }

    return diamondVar;
}

console.log(diamondFunc(5, "*", " ")); //OK

console.log(0); // OK
diamond(0, "*", " "); //OK - 0 *
// console.log(1);
// diamond(1, "*", " "); //OK - 2 *
// console.log(-1);
// diamond(-1, "*", " "); //ERROR
// console.log(2);
// diamond(2, "*", " "); //OK
// console.log(4);
// diamond(4, "*", " "); //OK

// console.log("just number"); //OK
// diamond(4);
// console.log("just char"); //ERROR
// diamond("*");
// console.log("empty"); //ERROR
// diamond();
// console.log("empty string"); //ERROR
// diamond("");
// console.log("space string"); //ERROR
// diamond(" ");

// console.log("num, null, null");
// diamond(4, null, null); //ERROR
// console.log("num, null, null");
// diamond(4, undefined, undefined); //OK
// console.log("num, null, null");
// diamond(4, undefined, null); //ERROR
// console.log("num, null, null");
// diamond(4, null, undefined); //ERROR
// console.log("num, null, null");
// diamond(null, null, undefined); //ERROR
// console.log("num, null, null");
// diamond(undefined, null, undefined); //ERROR