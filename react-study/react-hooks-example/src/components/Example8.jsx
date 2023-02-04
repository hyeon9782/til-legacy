import {useState, useRef, createRef} from 'react';

export default function Example8() {
    const [value, setValue] = useState('');
    const input1Ref = createRef();
    const input2Ref = useRef();

    console.log(input1Ref.current, input2Ref.current);

    // createRef로 만들어진 input1Ref는 렌더가 될 때 마다 레퍼런스를 새롭게 만들어진다.
    // useRef로 만들어진 input2Ref는 렌더가 돌아도 계속 유지하는 것이다 (이해 부족)
    // 최추 렌더를 했을 때는 input이 진행된 적이 없기 때문에 언디파인드가 나오는 것이다.

    return (
        <div>
            <input value={value} onChange={change}/>
            <input ref={input1Ref}/>
            <input ref={input2Ref}/>
        </div>
    )
    function change(e) {
        setValue(e.target.value)
    }
}