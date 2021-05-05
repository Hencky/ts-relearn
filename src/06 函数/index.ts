let IdGenerator: (chars: string, nums: number) => string;

function createUserId(name: string, id: number): string {
  return name + id;
}

IdGenerator = createUserId;

// 函数重载
// 函数重载或方法重载时使用相同名称和不同参数数量或类型创建多个方法的能力

function add2(a: number, b: number): number;

function add2(a: string, b: string): string;

function add2(a: string, b: number): string;

function add2(a: number, b: string): string;

type Combinable = string | number;

function add2(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

// 方法重载是指在同一类中方法同名，参数不同，调用时根据实参的形式，选择与它匹配的方法执行操作的一种技术。
// 所以类中成员方法满足重载的条件是：在同一个类中，方法名相同且参数列表不同。

class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: string, b: number): string;
  add(a: number, b: string): string;
  add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
      return a.toString() + b.toString();
    }

    return a + b;
  }
}

const calculator = new Calculator();
const result = calculator.add("Hencky", "goog");
const result2 = calculator.add(123, 456);
