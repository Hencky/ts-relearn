// 接口是对行为的抽象，而具体行动需要由类去决定

interface Person {
  readonly name: string;
  age: number;
}

const hencky: Person = {
  name: 'hencky',
  age: 20,
};

/**
 * readonlyArray
 */

// hencky.name = 'h'; error
hencky.age = 27;

let arr1: number[] = [1, 2, 3, 4];
let arr2: ReadonlyArray<number> = [1, 2, 3, 4];

// arr2[1] = 12;  error

/**
 * 任意属性
 */

interface Person2 {
  name: string;
  age?: number;
  [propName: string]: any;
}

/**
 * 接口与类型别名的区别
 */
// 接口和类型别名都可以用来描述对象的形状或函数签名

// 与接口类型不一样，类型别名可以用于一些其他类型，比如原始类型、联合类型和元组

// 接口和类型别名都能够被扩展，但是语法有所不同。此外，接口和类型别名不是互斥的。接口可以扩展类型别名，而反过来是不行的。

interface Paritial2X {
  x: number;
}

interface Point2 extends Paritial2X {
  y: number;
}

type PartialPointX3 = { x: number };
type Point3 = PartialPointX3 & { y: number };

interface Point4 extends PartialPointX3 {
  y: number;
}

type Point5 = Paritial2X & { y: number };

/**
 * implements
 */

interface PointImp {
  x: number;
  y: number;
}

class SomePoint implements Point {
  x = 1;
  y = 2;
}

/**
 * 与类型别名不同，接口可以定义多次，会被自动合并为单个接口
 */

interface Point6 {
  x: number;
}
interface Point6 {
  y: number;
}

const point6: Point6 = { x: 123, y: 456 };
