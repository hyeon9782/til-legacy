import { useState } from 'react';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    alert("안녕") // 둘의 차이가 없다 
    setWalk(!walk); // 다음 렌더에 변화를 준다
    alert("안녕") // 왜냐? state는 snapshot이기 때문에 
  }

  return (
    <>
      <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}

// 1회 렌더
// 클릭 -> 이벤트 핸들러 실행
// alert
// walk -> false로 바뀜
// alert
// 2회 렌더
