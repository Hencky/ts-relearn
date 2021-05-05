// 泛型 Generics

function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

console.log(identity<number, string>(18, 'hencky'));

// 泛型接口

interface GenericIdentityFn<T> {
  (arg: T): T;
}

// 泛型类

class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}

const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// 泛型工具类

interface Person3 {
  name: string;
  age: string;
}

const hencky: Person = { name: 'hencky', age: 20 };
console.log(typeof hencky);

// typeof
// keyof
// in
type Keys = 'a' | 'b' | 'c';
type obj = {
  [p in Keys]: any;
};

// infer
// 在条件类型语句中，可以用infer声明一个类型变量对它进行使用
type ReturnType1<T> = T extends (...args: any[]) => infer R ? R : any;

// extends
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// Partial 变为可选
type Partial1<T> = {
  [P in keyof T]?: T[P];
};

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'Learn TS',
  description: 'Learn TypeScript',
};

const todo2 = updateTodo(todo1, {
  description: 'Learn TypeScript Enum',
});
