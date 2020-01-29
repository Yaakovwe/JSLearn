// factorial non recursive
// function factorialNonRecursive(num) {
//     let multipledNum = 1;
//     for (let i = 1; i <= num; i++) {
//         multipledNum *= i;
//     }
//     return multipledNum;
// }
// Free Code Camp

//Factorial recursive
function factorialRecursive(num) {
    if (num <= 0) {
        return 1;
    } else {
        return factorialRecursive(num - 1) * num;
    }
}

console.log(factorialRecursive(7, 7));
console.log(factorialRecursive(0, 0));
console.log(factorialRecursive(5, 5));
console.log(factorialRecursive(8, 8));