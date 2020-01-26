for (let i = 0; i < 3; i++) {
    console.log('I know how to use a for loop');
}

const customersArray = ['Moshe', 'Yaakov', 'Yossi', 'Baruch', 'Yael'];

for (let i = 0; i < customersArray.length; i++) {
    console.log(customersArray[i]);
}

const invoices = [{ id: 1, price: 10 }, { id: 2, price: 32 }, {
    id: 3,
    price: 40
}];
let sum;
for (let key in invoices) {
    if (invoices.hasOwnProperty(key)) {
        sum += value;
    }
}
console.log(sum);