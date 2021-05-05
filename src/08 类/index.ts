/**
 * 类的属性与方法
 */

// 私有字段
class Person {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  greet() {
    console.log(this.#name);
  }
}

const hen = new Person('Hencky');
hen.greet();

// 访问器 get set

// 抽象类

abstract class Person2 {
  constructor(public name: string) {}

  abstract say(words: string): void;
}

// 抽象类不能被实例化

class Developer extends Person {
  constructor(name: string) {
    super(name);
  }

  say(words: string): void {
    console.log(`${this.name} says ${words}`)
  }
}