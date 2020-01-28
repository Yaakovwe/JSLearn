function palindrome(str) {
    // Good luck!
    let strLowerCase = str.toLowerCase();
    let strRemove = strLowerCase.replace(/\W/ig, "");
    let strSplit = strRemove.split("");
    let strReverse = strSplit.reverse();
    let strJoin = strReverse.join("");
    return (strJoin === strRemove);
    console.log(strRemove)
}

//free code camp