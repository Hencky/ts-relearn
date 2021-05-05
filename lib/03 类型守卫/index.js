"use strict";
// 类型保护是可执⾏运⾏时检查的⼀种表达式，⽤于确保该类型在⼀定的范围内。
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
// 2. typeof关键字
function addPx(num) {
    if (typeof num === "number") {
        return num + "px";
    }
    return Number.parseInt(num) + "px";
}
class SpaceRepeatingPadder {
    constructor(numSpaces) {
        this.numSpaces = numSpaces;
    }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}
class StringPadder {
    constructor(value) {
        this.value = value;
    }
    getPaddingString() {
        return this.value;
    }
}
let padder = new SpaceRepeatingPadder(6);
if (padder instanceof SpaceRepeatingPadder) {
    // padder的类型收窄为 'SpaceRepeatingPadder'
}
// 4. 自定义类型保护
