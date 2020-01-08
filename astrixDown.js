function Drawtriangle(num, specialChar) {
    let symbol = specialChar;
    const arr = [];
    let callSpaces = "";
    for (let i = 0; i < num; i++) {
        console.log(symbol);
        arr.push(symbol);
        symbol += (specialChar + specialChar);
    }
    //arr.pop();
    let arrReverse = arr.reverse();
    for (let j = 1; j < arrReverse.length; j++) {
        console.log(arrReverse[j]);
    }
}

function spaces(size) {
    let space = " ";
    for (let i = 0; i < size; i++) {
        space += " ";
    }
    return space;
}

Drawtriangle(4, "*");



//drawDiamond(size)//3

//   *
//  ***
// *****
//*******
// *****
//  ***
//   *