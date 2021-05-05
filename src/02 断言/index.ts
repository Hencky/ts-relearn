/**
 * 类型断言
 */

//  1. 尖括号语法
const stringValue: any = "string";
const stringLength: number = (<string>stringValue).length;

// 2. as 语法
const stringValue2: any = "string";
const stringLength2: number = (stringValue2 as string).length;

/**
 * 非空断言 !.
 */

/**
 * 确定赋值断言
 */

let x!: number;
initialize();
console.log(2 * x); // Ok
function initialize() {
  x = 10;
}
