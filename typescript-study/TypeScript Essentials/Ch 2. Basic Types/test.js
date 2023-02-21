"use strict";
// sub1 타입은 sup1 타입의 서브 타입이다.
let sub1 = 1;
let sup1 = sub1;
sub1 = sup1; // error! Type 'number' is not assignable to type '1';
// sub2 타입은 sup2 타입의 서브 타입이다.
let sub2 = [1];
let sup2 = sub2;
sub2 = sup2; // error! Type '{}' is missing the following properties from type 'number[]': length, pop, push, concat, and 25 more.
// sub3 타입은 sup3 타입의 서브 타입이다.
let sub3 = [1, 2];
let sup3 = sub3;
sub3 = sup3; // error! Type 'number[]' is not assignable to type '[number, number]' Target requires 2 element(s) but source may have fewer.
// sub4 타입은 sup4 타입의 서브 타입이다.
let sub4 = 1;
let sup4 = sub4;
sub4 = sup4;
// sub5 타입은 sup5 타입의 서브 타입이다.
let sub5 = 0;
let sup5 = sub5;
sub5 = sup5; // error!
class Animal {
}
class Dog extends Animal {
    eat() { }
}
// sub6 타입은 sup6 타입의 서브 타입이다.
let sub6 = new Dog();
let sup6 = sub6;
sub6 = sup6; // error! Type 'number[]' is not assignable to type '[number, number]' Target requires 2 element(s) but source may have fewer.
