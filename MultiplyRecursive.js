function multiplyRecursive(arr, n) {
    if (n <= 0) {
        return arr[0];
    } else {
        return multiplyRecursive(arr, n - 1) * arr[n];
    }
}

//Same as
function multiply(arr, n) {
    var product = arr[0];
    for (let i = 1; i <= n; i++) {
        product *= arr[i];
    }
    return product;
}

console.log(multiplyRecursive([2, 3, 4], 1));
console.log(multiply([2, 3, 4], 1));

//freeCodecamp