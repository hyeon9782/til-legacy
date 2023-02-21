"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('failed');
}
function infiniteLoop() {
    while (true) { }
}
if (typeof a !== 'string') {
    a;
    // a에는 string과 number가 들어갈 수 있지만, a의 타입이 string이 아니기 때문에 a는 number다
}
const b = ''; // Error 
