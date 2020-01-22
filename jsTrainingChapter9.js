let computer = {
    id: 1,
    modelName: 'test',
    price: 5
};
console.log(computer);

function day(numofDay) {
    let dayOfWeek = {};
    switch (numofDay) {
        case 1:
            dayOfWeek.dayName = "Sunday";
            dayOfWeek.dayNumber = numofDay;
            break;
        case 2:
            dayOfWeek.dayName = "Monday";
            dayOfWeek.dayNumber = numofDay;
            break;
        case 3:
            dayOfWeek.dayName = "Tuesday";
            dayOfWeek.dayNumber = numofDay;
            break;
        case 4:
            dayOfWeek.dayName = "Wednesday";
            dayOfWeek.dayNumber = numofDay;
            break;
        case 5:
            dayOfWeek.dayName = "Thursday";
            dayOfWeek.dayNumber = numofDay;
            break;
        case 5:
            dayOfWeek.dayName = "Thursday";
            dayOfWeek.dayNumber = numofDay;
            break;
        case 6:
            dayOfWeek.dayName = "Friday";
            dayOfWeek.dayNumber = numofDay;
            break;
        case 6:
            dayOfWeek.dayName = "Saturday";
            dayOfWeek.dayNumber = numofDay;
            break;
        default:
            return "Not a number between 1-7"
    }
    return dayOfWeek;
}
console.log(day(5));

function threeArgs(obj, keyName, value) {
    obj = {};
    obj.keyName = keyName;
    obj.value = value;
    return obj;
}

console.log(threeArgs("test", "Yaakov", 3));

let twoFunctions = {
    firstProperty: function(arg1) {
        console.log(arg1);
    },
    secondProperty: function() {
        const secondObj = {
            id: 1,
            name: 'Moshe'
        }
        return secondObj;
    }
};
twoFunctions.firstProperty("test first function");
let second = twoFunctions.secondProperty();
console.log(second);