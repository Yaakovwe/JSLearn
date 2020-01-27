function factorial(num) {
    let factorialNum = 1;
    let i = 1;
    while (i <= num) {
        factorialNum *= i;
        i++;
    }
    return factorialNum;
}
console.log(factorial(8));