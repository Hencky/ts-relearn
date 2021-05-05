"use strict";
// 交叉类型
let point = {
    x: 1,
    y: 1,
};
let p;
let q;
p = {
    // @ts-ignore
    c: 123,
    d: "a123",
    e: "e",
};
let abc = {
    x: {
        d: true,
        e: "str",
        f: 123,
    },
};
