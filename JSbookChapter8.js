(() => {
    let a = 5;
    console.log(a);
})()

function runMe(arg1) {
    const answer = arg1();
    console.log(answer);
}
runMe(() => {
    return 7;
});


function myFunc() {
    return null;
}
let foo = myFunc();
console.log(foo);

function ahlaBahla() {
    let foo = 100;
    return 100;
}
let bar = ahlaBahla();
console.log(bar);

function yay() {
    let foo = "yay";
    return foo;
}
let printMe = yay();
console.log(printMe);

function myArg(arg) {
    console.log(arg);
    return arg + 1;
}
let callMe = myArg(1);
console.log(callMe);

function whoAmI(arg2) {
    if (arg2 > 0) {
        console.log("+");
    } else if (arg2 < 0) {
        console.log("-");
    } else {
        console.log("?");
    }
}

whoAmI(2);
whoAmI(-2);
whoAmI(0);

function coolFunc(arg3) {
    if (typeof arg3 !== "function") {
        return "GFY";
    } else {
        const answer = arg3();
        console.log(answer);
    }
}
coolFunc(() => { return 5; });
coolFunc(() => { return "Hola"; });