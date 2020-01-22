// Chapter 4
//boolean
let bool = false;
let baz = typeof bool;
console.log(baz);
//string
let str = "test";
let bazStr = typeof str;
console.log(bazStr);
//undefined
let und;
let bazUndefined = typeof und;
console.log(bazUndefined);
//number
let num = 7;
let bazNum = typeof num;
console.log(bazNum);
//Symbol
let sym = Symbol();
let bazSym = typeof sym;
console.log(bazSym);
//object
let obj = null;
let bazObj = typeof obj;
console.log(bazObj);
// End of Chapter 4
console.log("End of Chapter 4");
console.log("");

//Chapter 5
console.log("Start of Chapter 5");

let ifnum = 10;
if (ifnum === 10) {
    console.log("ifnum is 10");
}

let foo = "I am corrct";
if (foo === "I am correct") {
    console.log("Yay");
} else {
    console.log("Bummer");
}

let day = 8;
if (day === 1) {
    console.log("Sunday");
} else if (day === 2) {
    console.log("Monday");
} else if (day === 3) {
    console.log("Tuesday");
} else if (day === 4) {
    console.log("Wednesday");
} else if (day === 5) {
    console.log("Thursday");
} else if (day === 6) {
    console.log("Friday");
} else if (day === 7) {
    console.log("Saturday");
} else {
    console.log("That is not a Day")
}

let bmi = 19;
if (bmi <= 18) {
    console.log("BMI is too low");
} else if (bmi >= 25) {
    console.log("BMI is too high");
} else {
    console.log("BMI is cool");
}

let var1 = 4 === 4;
let var2 = 2 !== 4;
let var3 = 1 >= 7;
let var4 = 4 < 8;
let var5 = 4 > 8;
console.log(var1, var2, var3, var4, var5);

let dayOfWeek = 5;
if ((dayOfWeek === "Thursday") || (dayOfWeek === "thursday") || (dayOfWeek === 5)) {
    console.log("Yay! Thursday");
} else {
    console.log("Not Thursday");
}

let day1 = "Thursday";
let day2 = 5;
if ((day1 === 5) && (day2 === "Thursday")) {
    console.log("Yay! Thursday");
} else {
    console.log("Bummer");
}

let notHere = 5;
if ((notHere === 0) || (notHere === null)) {
    console.log("I\'m not here");
} else {
    console.log("I\'m here");
}

let test1 = 2;
let test2 = "2";
if (test1 == test2) {
    console.log("Equal")
} else {
    console.log("Not Equal");
}

console.log("End of Chapter 5");
console.log("Start of Chapter 6");

//Chapter 6 swicth
function myFunc(switchDay) {
    let switchDay1 = switchDay.toLowerCase();
    switch (switchDay1) {
        case "sunday":
            console.log("Today is Sunday");
            break;
        case "monday":
            console.log("Today is Monday");
            break;
        case "tuesday":
            console.log("Today is Tuesday");
            break;
        case "wednesday":
            console.log("Today is Wednesday");
            break;
        case "thursday":
            console.log("Today is Thursday");
            break;
        case "friday":
            console.log("Today is Friday");
            break;
        case "saturday":
            console.log("Today is Saturday");
            break;

        default:
            console.log("Not a day");
            break;
    }
}
myFunc("SATURDAY");
console.log("End of Chapter 6");
//End of chapter 6

//Start of Chapter 7
console.log("Start of Chapter 7");

const myConst = 'Hola';
console.log(myConst);
var a = "history";
console.log(a);
console.log(a + "b");
const myConst1 = 4;
//myConst1 =5; Illigel assignment

console.log("End of chapter 7");
//End of chapter 7

//Start of chapter 8
console.log("Start of chapter 8");
(function() {
    let a = 5;
    console.log(a);
})()

(function() {
    let a = 5;
    console.log(a);
})()

function runMe(arg1) {
    const answer = arg1(2);
    console.log(answer);
}
runMe((myVar) => {
    return 7 * myVar;
});

function myNewFunc() {
    let myVar = null;
    return myVar;
}
console.log(myNewFunc());

function ahlaBahla() {
    return 100;
}
let varahlaBahla = ahlaBahla();
console.log(varahlaBahla);

function yay() {
    return "yay";
}

let varYay = yay();
console.log(varYay);


function coolFunc(arg1) {
    console.log(arg1);
    return arg1 + 1;
}

let varCoolFunc = coolFunc(6);
console.log(varCoolFunc);

function whoAmI(arg2) {
    if (arg2 > 0) {
        console.log("+");
    } else if (arg2 < 0) {
        console.log("-");
    } else {
        console.log("?")
    }
}

whoAmI(2); //+
whoAmI(-2); //-
whoAmI(0); //?

function dataTest(arg3) {
    if (typeof arg3 === 'number') {
        if (arg3 % 2 === 0) {
            return "Even";
        } else {
            return "Odd"
        }
    } else return "Not a number"
}
console.log(dataTest(null)); // Not a number
console.log(dataTest(7)); //Odd
console.log(dataTest(6)); //Even

function newFunc(myArg) {
    if (typeof myArg !== "function") {
        console.log("Error");
        return;
    } else {
        const answer = myArg();
        console.log(answer);
    }
}
newFunc(() => { return "hola"; }); //hola
newFunc(() => { return 5; }); // 5
newFunc(test1); //Error
//End of chapter 8
console.log("End of chapter 8");
console.log("");
//Start of chapter 9
console.log("Start of chapter 9");


let comp = {
    id: 1,
    modelName: "testModel",
    price: 5
};
console.log(comp);

function objFunc(arg5) {
    let switchDay2;
    switch (arg5) {
        case 1:
            switchDay2 = "Sunday"
            break;
        case 2:
            switchDay2 = "Monday"
            break;
        case 3:
            switchDay2 = "Tuesday"
            break;
        case 4:
            switchDay2 = "Wednesday"
            break;
        case 5:
            switchDay2 = "Thursday"
            break;
        case 6:
            switchDay2 = "Friday"
            break;
        case 7:
            switchDay2 = "Saturday"
            break;
    }
    return {
        dayName: switchDay2,
        dayNumber: arg5
    }
}
console.log(objFunc(3));