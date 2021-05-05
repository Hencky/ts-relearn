// 交叉类型

type PartialPointX = { x: number };
type Point = PartialPointX & { y: number };

let point: Point = {
  x: 1,
  y: 1,
};

// 1. 同名基础属性的合并
interface X {
  c: string;
  d: string;
}

interface Y {
  c: number;
  e: string;
}

type XY = X & Y;
type YX = Y & X;

let p: XY;
let q: YX;

p = {
  // @ts-ignore
  c: 123, // c变成了never类型
  d: "a123",
  e: "e",
};

// 2. 同名非基础类型属性的合并

interface D {
  d: boolean;
}
interface E {
  e: string;
}
interface F {
  f: number;
}

interface A {
  x: D;
}
interface B {
  x: E;
}
interface C {
  x: F;
}

type ABC = A & B & C;

let abc: ABC = {
  x: {
    d: true,
    e: "str",
    f: 123,
  },
};
