import {useState, useMemo, useCallback} from 'react';

function sum(persons) {
    console.log('sum...');
    return persons.map(person => person.age).reduce((l, r) => l + r, 0);
}

export default function Example7() {
    const [value, setValue] = useState('');
    const [persons] = useState([
        {name: 'Mark', age: 39},
        {name: 'Hana', age: 28}
    ])

    // const count = sum(persons);
    // count는 persons에 의존적으로 계산이 된다.
    // 즉 persons가 똑같다면 다시 계산할 필요가 없다.
    // 이럴경우 쓸데없는 계산과정이 반복되지 않게 하기위해
    // sum을 persons에 의존적으로 구해서 사용하겠다는 의미로 useMemo를 사용가능

    const count = useMemo(() => {
        return sum(persons);
    }, [persons]);

    // useMemo에 두번째 인자로 persons를 넣어주게 되면 persons가 변경 되었을 때만 useMemo를 다시 실행

    // 두 번째 인자로 넣는 디펜더시에 있는 조건에 맞춰서 해당 함수를 새롭게 할당할 수 있도록 만들어 준다.
    // 빈 배열로 넣을 경우 해당 함수 안에 있는 내용은 최초 실행했을 때와 동일하다 (value의 값이 변경되어도)
    const click = useCallback(() => {
        console.log(value);
    }, [])

    return (
        <div>
            <input value={value} onChange={change}/>
            <p>{count}</p>
            <button onClick={click}>click</button>
        </div>
    )
    function change(e) {
        setValue(e.target.value)
    }
}