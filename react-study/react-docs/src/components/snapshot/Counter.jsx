import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
    // number는 1씩 증가한다.
    // setNumber를 실행할 때는 0이 들어오기 때문에
    // state값은 고정이기 때문에 현재 렌더링에서는 반영되지 않는다. (다음 렌더링때 반영)
    // 
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
      <button onClick={() => {
        setNumber(number + 5);
        setTimeout(() => {
          alert(number);
        }, 3000);
    </>
  )
}
