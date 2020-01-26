function factorial(num) {
    let multipledNum = 1;
    for (let i = 1; i <= num; i++) {
        multipledNum *= i;
    }
    return multipledNum;
}
console.log(factorial(5));