/**
 * 1. Boolean类型
 **/
const isBoolean: boolean = true;

/**
 * 2. Number类型
 */
const isNumber: number = 123;
// const isBigInt: bigint = 12345n;

/**
 * 3. String类型
 */
const isString: string = "abc";

/**
 * 4. Symbol类型
 */
const sym: symbol = Symbol();

/**
 * 5. Array类型
 */
const list: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];

/**
 *  6. Enum类型
 */
// 1. 数字类型
enum Direction {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}
const dir: Direction = Direction.NORTH;
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
enum Direction2 {
  NORTH = "NORTH",
  SOUTH = "SOUTH",
  EAST = "EAST",
  WEST = "WEST",
}

const dir2 = Direction2["EAST"];
console.log("dir2", dir2);

// 3. 常亮枚举
const enum Direction3 {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}
const dir3 = Direction3["EAST"];
console.log("dir3", dir3);

// 4. 异构枚举
enum Enum {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
  F,
}

/**
 * 7. Any类型
 * TypeScript 允许我们对 any 类型的值执⾏任何操作，⽽⽆需事先执⾏任何形式的检查。
 *
 **/

/**
 * 8. unknown类型
 */
// 就像所有类型都可以赋值给 any ，所有类型也都可以赋值给 unknown 。
// unknown 类型只能被赋值给 any 类型和 unknown 类型本身

/**
 * 9. tuple类型
 */
type TupleType = [string, number];
const tupleType: TupleType = ["abc", 123];

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
function error(message: string): never {
  throw new Error(message);
}
