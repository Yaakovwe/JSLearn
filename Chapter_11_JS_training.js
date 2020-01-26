'use strict'
const timeOfDay = ['Morning', 'Evening'];
console.log(`Good ${timeOfDay[0]}`);

function giveMeLocalAmount(number, currency) {
    return `${number}${currency}`;
}

console.log(giveMeLocalAmount(5, '#'));