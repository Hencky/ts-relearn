"use strict";
// 接口是对行为的抽象，而具体行动需要由类去决定
const hencky = {
    name: 'hencky',
    age: 20,
};
/**
 * readonlyArray
 */
// hencky.name = 'h'; error
hencky.age = 27;
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
class SomePoint {
    constructor() {
        this.x = 1;
        this.y = 2;
    }
}
const point6 = { x: 123, y: 456 };
