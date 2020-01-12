function fixArray(oldArray, pos, value) {
    let newArray = oldArray.splice(pos); //  Splits the array into 2 with pos as the index 
    oldArray.push(value);
    for (let i = 0; i < newArray.length; i++) {
        oldArray.push(newArray[i]);
    }
    return oldArray.join("");
}
//fixArray(['y', 'a', 'k', 'o', 'v'], 2, 'a'); //['y','a','k','o','v'],2,'a' => yaakov
console.log(fixArray(['y', 'a', 'k', 'o', 'v'], 2, 'a')); //['y','a','k','o','v'],2,'a' => yaakov
console.log(fixArray([1, '2', 'k', 3, 'v'], 4, "te")); //['y','a','k','o','v'],2,'a' => 12k3tev