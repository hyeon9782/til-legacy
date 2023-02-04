import React from 'react';

export default function Example5() {

    const [count, setCount] = React.useState(0);

    // useEffect는 componentDidMount와 componentDidUpdate에 둘다 실행된다.
    // 하지만 두 번째 인자로 빈 배열을 놓게되면 componentDidMount일 때만 실행된다.
    // 그 이유는 useEffect에서 두 번째 인자로 넣는 배열의 의미가 해당 배열 안에 있는
    // 값이 변해서 렌더가 될 때 그 직후에 useEffect를 실행하라는 의미이기 때문에
    // 빈 배열이라면 최초에만 실행되게 된다.
    React.useEffect(() => {
        console.log("componentDidMount");

        // componentWillUnmount의 역할을 하기 위해서는 어떻게?
        return () => {
            // cleanup
            // componentWillUnmount의 역할
        }
    }, [])

    // 만약 두 번째 인자로 특정 count를 넣게 된다면 count라는 변수가 변경되었을 때 uesEffect가 실행된다.
    React.useEffect(() => {
        console.log("componentDidMount & componentDidUpdate by count", count);

        return () => {
            // cleanup
            // componentWillUnmount와 완전히 같은 것이 아니라
            // useEffect함수가 다시 실행될 때 변경된 count의 값으로 다시 실행하기 전에
            // 변경전의 count값으로 return 부분에 있는 함수를 한 번 실행해주고 넘어가는 것이다.
            console.log('cleanup by count', count);
        }
    }, [count])

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