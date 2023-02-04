import React from 'react';

export default function Example2() {

    const [count, setCount] = React.useState(0);

    // useState()라는 함수를 사용하게되면 count라는 현재 값과 setCount라는 count를 변경할 수 있는 함수를 준다.
    // 첫 번째 결과 값은 현재 데이터 / 두 번째 결과 값은 데이터를 변경할 수 있는 함수
    // setCount()가 하는 역할은 count라는 state를 변경하는것 + 자신이 속한 함수를 다시 실행하는 것이다.

    return (
        <div>
            <p>You click {count} times</p>
            <button onClick={click}>Click me</button>
        </div>
    )

    function click() {
        setCount(count + 1);
    }
};