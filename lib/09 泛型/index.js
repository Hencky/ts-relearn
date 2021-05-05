"use strict";
// 泛型 Generics
function identity(value, message) {
    console.log(message);
    return value;
}
console.log(identity(18, 'hencky'));
// 泛型类
class GenericNumber {
}
const myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
const hencky = { name: 'hencky', age: 20 };
console.log(typeof hencky);
