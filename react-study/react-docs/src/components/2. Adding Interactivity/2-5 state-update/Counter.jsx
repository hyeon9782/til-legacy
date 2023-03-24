import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}

// state를 업데이터하라는 내용을 쌓았다가 차례대로 실행한다.
// setNumber(number + 1) number의 초기값은 1이다.
// setNumber(prev => prev + 1) prev에는 2가 넘어온다 
// 
