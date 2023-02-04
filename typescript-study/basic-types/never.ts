function error(message: string): never {
    throw new Error(message)
}

function fail(){
    return error('failed');
}

function infiniteLoop(): never {
    while(true){}
}

// let a: string = 'hello';

// if (typeof a !== 'string'){
//     a;
// }

declare const a: string | number;

if (typeof a !== 'string'){
    a;
    // a에는 string과 number가 들어갈 수 있지만, a의 타입이 string이 아니기 때문에 a는 number다
}

// 조건부 타입
// T가 만약에 string이면 T를 다음과 같이 만들어서 리턴하고 그게 아니면 never를 리턴한다.
type Indexable<T> = T extends string ? T & {[index: string]: any} : never;

type ObjectIndexable = Indexable<{}>; // never가 뜬다.

const b: Indexable<{}> = ''; // Error 