/**
 * 1. Boolean类型
 **/
var isBoolean = true;
/**
 * 2. Number类型
 */
var isNumber = 123;
// const isBigInt: bigint = 12345n;
/**
 * 3. String类型
 */
var isString = "abc";
/**
 * 4. Symbol类型
 */
var sym = Symbol();
/**
 * 5. Array类型
 */
var list = [1, 2, 3];
var list2 = [1, 2, 3];
/**
 *  6. Enum类型
 */
// 1. 数字类型
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
    Direction[Direction["EAST"] = 2] = "EAST";
    Direction[Direction["WEST"] = 3] = "WEST";
})(Direction || (Direction = {}));
var dir = Direction.NORTH;
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
var dir2 = Direction2["EAST"];
console.log("dir2", dir2);
var dir3 = 2 /* "EAST" */;
console.log("dir3", dir3);
// 4. 异构枚举
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum["C"] = "C";
    Enum["D"] = "D";
    Enum[Enum["E"] = 8] = "E";
    Enum[Enum["F"] = 9] = "F";
})(Enum || (Enum = {}));
var tupleType = ["abc", 123];
/**
 * 10. void类型
 */
// 某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。
/**
 * 11. null 和 undefined
 */
/**
 * 12. object类型
 */
/**
 * 13. never类型
 */
//  never 类型表示的是那些永不存在的值的类型。
function error(message) {
    throw new Error(message);
}
