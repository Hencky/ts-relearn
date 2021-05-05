"use strict";
let IdGenerator;
function createUserId(name, id) {
    return name + id;
}
IdGenerator = createUserId;
function add2(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
// 方法重载是指在同一类中方法同名，参数不同，调用时根据实参的形式，选择与它匹配的方法执行操作的一种技术。
// 所以类中成员方法满足重载的条件是：在同一个类中，方法名相同且参数列表不同。
class Calculator {
    add(a, b) {
        if (typeof a === "string" || typeof b === "string") {
            return a.toString() + b.toString();
        }
        return a + b;
    }
}
const calculator = new Calculator();
const result = calculator.add("Hencky", "goog");
const result2 = calculator.add(123, 456);
