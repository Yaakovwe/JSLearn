//with loop
function withLoop(num1, num2) {
    let multipledNum = 0;
    for (let i = 0; i <= num2; i++) {
        multipledNum += num1;
    }
    return multipledNum;
}

console.log(withLoop(3, 7));