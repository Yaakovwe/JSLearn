"use strict";

function diamondFunc(size, charOrString, spaceHolder) {
    if (charOrString === undefined) {
        charOrString = "*";
    }

    if (spaceHolder === undefined) {
        spaceHolder = " ";
    }
    if (typeof size === "number") {
        let specialChar = charOrString;
        let newSpace = spaceHolder;
        const spacesArr = [];
        const charArr = [];
        const diamondArr = [];
        for (let i = 0; i < size * 2; i++) {
            if (i % 2 === 0) {
                charArr.push(specialChar);
                spacesArr.push(newSpace);
                newSpace += spaceHolder;
            }
            specialChar += charOrString;
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
        return diamondArr.join("\n");
    } else {
        return "Size must be a number\n" + "charOrString must be a char or a string\n" + "spaceHolder must be a string";
    }

}
console.log(diamondFunc(8, "$", " ")); // OK (15 lines)
console.log(diamondFunc(0)); // OK (No lines)
console.log(diamondFunc('#')); // ("Size must be a number")
console.log(diamondFunc(3)); // OK (5 lines)
//console.log(1);
// console.log(-1);
// console.log(diamondFunc(-1, "*", " "); //ERROR
// console.log(2);
// console.log(diamondFunc(2, "*", " "); //OK
// console.log(4);
// console.log(diamondFunc(4, "*", " "); //OK

// console.log("just number"); //OK
// console.log(diamondFunc(4);
// console.log("just char"); //ERROR
// console.log(diamondFunc("*");
// console.log("empty"); //ERROR
// console.log(diamondFunc();
// console.log("empty string"); //ERROR
// console.log(diamondFunc("");
// console.log("space string"); //ERROR
// console.log(diamondFunc(" ");

// console.log("num, null, null");
// console.log(diamondFunc(4, null, null); //ERROR
// console.log("num, null, null");
// console.log(diamondFunc(4, undefined, undefined); //OK
// console.log("num, null, null");
// console.log(diamondFunc(4, undefined, null); //ERROR
// console.log("num, null, null");
// console.log(diamondFunc(4, null, undefined); //ERROR
// console.log("num, null, null");
// console.log(diamondFunc(null, null, undefined); //ERROR
// console.log("num, null, null");
// console.log(diamondFunc(undefined, null, undefined); //ERROR