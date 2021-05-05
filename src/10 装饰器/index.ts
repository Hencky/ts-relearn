// 装饰器

// 装饰器是一个表达式
// 该表达式被执行后，返回一个函数
// 函数的入参分别为target name 和 descriptor
// 执行该函数后，可能返回descriptor对象，用于配置target对象

/**
 * 类装饰器声明
 */

// declare type ClassDecorator1 = <TFunction extends Function> {
//   target: TFunction
// } => TFunction | void;

function Greeter(target: Function): void {
  target.prototype.greet = function (): void {
    console.log('hello world');
  };
}

@Greeter
class Greeting {
  constructor() {}
}
