"use strict";
/**
 * 类的属性与方法
 */
// 私有字段
class Person {
    constructor(name) {
        this.#name = name;
    }
    #name;
    greet() {
        console.log(this.#name);
    }
}
const hen = new Person('Hencky');
hen.greet();
// 访问器 get set
// 抽象类
class Person2 {
    constructor(name) {
        this.name = name;
    }
}
// 抽象类不能被实例化
class Developer extends Person {
    constructor(name) {
        super(name);
    }
    say(words) {
        console.log(`${this.name} says ${words}`);
    }
}
