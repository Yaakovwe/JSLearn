'use strict';
const util = require('util');

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.push(11);
myArray.unshift(0);
myArray.splice(0, 1);
myArray.splice(4, 1);

console.log(util.inspect(myArray, false, null, true /* enable colors */ ));

let ClientObjMaker = function(firstName, lastName, city, car) {
    this.userFirstName = firstName;
    this.userLastName = lastName;
    this.userCity = city;
    this.userCar = car;
    this.getFullName = function() {
        return this.userFirstName + ' ' + this.userLastName;
    };
    let id = '12345';
    this.getId = function() {
        return id;
    };
    this.setId = function(newID) {
        if (typeof newID === 'number') {
            id = newID;
        } else {
            console.log("GFY");
        }
    }
};
let mosheObject = new ClientObjMaker('Moshe', 'Cohen', 'Holon',
    'Subaru');
let aviObject = new ClientObjMaker('Avi', 'Levi', 'Bat Yam', 'Opel');
console.log(util.inspect(mosheObject, false, null, true /* enable colors */ ));
console.log(util.inspect(aviObject, false, null, true /* enable colors */ ));
console.log(util.inspect(mosheObject.getFullName(), false, null, true));
mosheObject.setId('3045');
console.log(util.inspect(mosheObject.getId(), true, null, true));


let car = function(name, color, engineSize) {
    this.name = name;
    this.color = color;
    this.engineSize = engineSize;
    let modelNumber = this.name + this.color + this.engineSize;
    this.getId = function() {
        return modelNumber;
    };
    this.setId = function(newModelNumber) {
        modelNumber = newModelNumber;
    };
};

let MazdaCar = new car('Mazda', 'Blue', '1800');
let id = MazdaCar.getId();
console.log(util.inspect(MazdaCar, true, null, true));
console.log(util.inspect(id, true, null, true));
MazdaCar.setId("HolaComoEstas");
id = MazdaCar.getId();
console.log(util.inspect(id, true, null, true));