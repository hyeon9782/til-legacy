function returnAny(message: any): any {
    console.log(message);
}

const any1 = returnAny("리턴은 아무거나")

any1.toString();

// any는 말 그대로 어떠한 타입이라도 들어올 수 있다는 것
// any는 최대한 쓰지말아야하는 타입이지만, 쓸 수 밖에 없는 상황이 있다. (동적인 데이터가 들어올 때)

// any는 개체를 통해 전파된다 => 아래 코드 처럼 any에서 시작한 코드로 인해 타입 안전성을 잃을 수 있다
let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;


// 이런식으로 중간에 타입을 지정해주면 타입 누수를 방지할 수 있지만 이것보다는 앞에서 배우는 unknown을 활용하는 것을 추천한다.
function leakingAny(obj: any){
    const a: number = obj.num;
    const b = a + 1;
    return b;
}

const c = leakingAny({num: 0});
// c.indexOf("0");
