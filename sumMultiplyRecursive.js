//with loop multiplication function without *
// function withLoop(num1, num2) {
//     let multipledNum = 0;
//     for (let i = 0; i < num2; i++) {
//         multipledNum += num1;
//     }
//     return multipledNum + " With Loop";
// }

// console.log(withLoop(3, 7));
// console.log(withLoop(2, 5));

//recursive multiplication function without *


function recursiveMultiplication(num, num2) {
    if (num <= 0) {
        return num2;
    }
    return recursiveMultiplication(num - 1, num2 + num2);
}
//console.log(recursiveMultiplication(3, 2));
console.log(recursiveMultiplication(5, 5));
console.log(recursiveMultiplication(7, 8));