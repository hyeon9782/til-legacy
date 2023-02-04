import React from 'react';

// uesState => count
// useState => {count : 0}
export default function Example3() {

    const [state, setState] = React.useState({count : 0});

    // useState()라는 함수를 사용하게되면 count라는 현재 값과 setCount라는 count를 변경할 수 있는 함수를 준다.
    // setCount()가 하는 역할은 count라는 state를 변경하는것 + 자신이 속한 함수를 다시 실행하는 것이다.

    return (
        <div>
            <p>You click {state.count} times</p>
            <button onClick={click}>Click me</button>
        </div>
    )

    function click() {
        // setState({count: state.count + 1});
        // 함수로도 사용할 수 있다. (기존 state 값에 의존적으로 변경하고 싶다면)
        // 위에서 한 객체 형식과 차이점은?
        // setState만 사용하는 것이 아니라 setState가 어떤 것을 의존해서 사용하고 있는지 중요해지기 때문에
        // 이전에 사용한 방식은 디펜더시가 외부의 state의 것을 가지고 있지만
        // state를 인자로 받는 것을 새로운 state로 리턴하게 되면 외부의 state에 의존적이지 않고 처리할 수 있다
        setState(state => ({
            count: state.count + 1,
        }));
    }
};