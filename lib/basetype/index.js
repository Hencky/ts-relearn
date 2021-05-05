"use strict";
// 1. Boolean类型
const isBoolean = true;
// 2. Number类型
const isNumber = 123;
// const isBigInt: bigint = 12345n;
// 3. String类型
const isString = "abc";
// 4. Symbol类型
const sym = Symbol();
// 5. Array类型
const list = [1, 2, 3];
const list2 = [1, 2, 3];
// 6. Enum类型
// 1. 数字类型
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
    Direction[Direction["EAST"] = 2] = "EAST";
    Direction[Direction["WEST"] = 3] = "WEST";
})(Direction || (Direction = {}));
const dir = Direction.NORTH;
// console.log(dir);
// "use strict";
// var Direction; (function (Direction) {
// Direction[(Direction["NORTH"] = 0)] = "NORTH";
// Direction[(Direction["SOUTH"] = 1)] = "SOUTH";
// Direction[(Direction["EAST"] = 2)] = "EAST";
// Direction[(Direction["WEST"] = 3)] = "WEST";
// })(Direction || (Direction = {}));
// var dir = Direction.NORTH;
// 2. 字符串枚举类型
var Direction2;
(function (Direction2) {
    Direction2["NORTH"] = "NORTH";
    Direction2["SOUTH"] = "SOUTH";
    Direction2["EAST"] = "EAST";
    Direction2["WEST"] = "WEST";
})(Direction2 || (Direction2 = {}));
const dir2 = Direction2["EAST"];
console.log("dir2", dir2);
const dir3 = 0 /* "NORTH" */;
console.log("dir3", dir3);
