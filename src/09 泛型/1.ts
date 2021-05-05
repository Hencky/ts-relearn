// 什么是泛型
function identity<T>(value: T): T {
  return value;
}

const a: number = identity<number>(123);
const b: string = identity<string>('abc');

// 泛型可以引入多个变量
function identity2<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

identity2<number, string>(123, '45');

/**
 * 泛型接口
 */
interface Identities<V, M> {
  value: V;
  message: M;
}

function identity<T, U>(value: T, message: U): Identities<T, U> {
  const identities: Identities<T, U> = {
    value,
    message,
  };
  return identities;
}

/**
 * 泛型类
 */
interface GenericInterface<U> {
  value: U;
  getIdentity: () => U;
}

class IdentityClass<T> implements GenericInterface<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getIdentity(): T {
    return this.value;
  }
}

const myNumberClass = new IdentityClass<number>(80);

/**
 * 泛型约束
 */

interface LenProps {
  length: number;
}

function identity<T extends LenProps>(arg: T): T {
  console.log(arg.length);
  return arg;
}

function idendity2<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

/**
 * 检查对象上的键是否存在
 */
interface Person1 {
  name: string;
  age: number;
  location: string;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

enum Diffculty {
  Easy,
  Middle,
  Hard,
}

function getProperty2<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const tsInfo = {
  name: 'Typescript',
  supersetOf: 'Javascript',
  difficulty: Diffculty.Middle,
};

const diffculty: Diffculty = getProperty(tsInfo, 'difficulty');

/**
 * 泛型参数默认类型
 */
interface Ident<T = string> {
  name: T;
}

const strA: Ident = { name: 'A' };

/**
 * 泛型条件类型
 */
// T extneds U ? X : Y;
interface Dictionary<T = any> {
  [key: string]: T;
}

type StrDict = Dictionary<string>;

type DictMember<T> = T extends Dictionary<infer V> ? V : never;

type StrDictMember = DictMember<StrDict>;

/**
 * 泛型工具类函数
 */
type IPartial<T> = {
  [P in keyof T]?: T[P];
};

type IPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// 将某个类型中属于另一个的类型移除掉
type IExclude<T, U> = T extends U ? never : T;

// 获取函数T的返回类型
type IReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

/**
 * 使用泛型创建对象
 */
interface IPoint {
  x: number;
  y: number;
}

interface IPointConstructor {
  new (x: number, y: number): Point;
}

class IPoint2D implements IPoint {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

function newPoint(
  pointConstructor: IPointConstructor,
  x: number,
  y: number
): Point {
  return new pointConstructor(x, y);
}

/**
 * 使用泛型创建对象
 */
class GenericCreator<T> {
  create(c: { new (): T }): T {
    return new c();
  }
}
