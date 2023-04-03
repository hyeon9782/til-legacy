import { useState } from "react";

export default function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}

// State는 컴포넌트안에 존재하는게 아니다!
// 동일한 위치의 같은 컴포넌트는 state를 초기화하지 않는다. (이건 몰랐네)
// 동일한 위치의 다른 컴포넌트는 state를 초기화한다.
// 같은 위치에 다른 컴포넌트를 렌더링하면 전체 하위 트리의 state가 재설정됩니다 하위 컴포넌트가 같은 컴포넌트라도
// form을 재설정할 때 필요한 거 같습니다.
// state를 초기화하기 위해서는 key를 사용하는게 가장 편리
