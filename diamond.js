function diamond(num, char) {
    specialChar = char;
    space = " ";
    newSpace = " ";
    arrSpaces = [];
    asterixArr = [];
    for (let i = 0; i < num; i++) {
        if (i % 2 === 0) {
            asterixArr.push(specialChar);
        }
        specialChar += char;
    }
    for (let j = 0; j < num; j++) {
        if (j % 2 === 0) {
            arrSpaces.push(newSpace);
            newSpace += space;
        }
    }

    arrSpaces.reverse();
    // console.log(arrSpaces);
    // console.log(asterixArr);
    for (let k = 0; k < num / 2; k++) {
        console.log(arrSpaces[k] + asterixArr[k]);
    }
    asterixArr.pop();
    arrSpaces.pop();
    asterixArr.reverse();
    arrSpaces.reverse();
    // console.log(asterixArr);
    //console.log(arrSpaces);
    for (let l = 0; l < num / 2; l++) {
        if (arrSpaces !== NaN && asterixArr !== NaN) {
            console.log(arrSpaces[l] + asterixArr[l]);
        }
    }
    //console.log(lastSpace + char);
}

diamond(8, "*")