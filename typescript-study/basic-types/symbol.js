"use strict";
console.log(Symbol('foo') === Symbol('foo')); // false
const sym = Symbol();
const obj = {
    [sym]: "value"
};
// obj["sym"] // 접근 불가
obj[sym]; // 접근 가능
