"use strict";
/**
 * 类型断言
 */
//  1. 尖括号语法
const stringValue = "string";
const stringLength = stringValue.length;
// 2. as 语法
const stringValue2 = "string";
const stringLength2 = stringValue2.length;
/**
 * 非空断言 !.
 */
/**
 * 确定赋值断言
 */
let x;
initialize();
console.log(2 * x); // Ok
function initialize() {
    x = 10;
}
