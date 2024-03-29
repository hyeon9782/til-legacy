import { useState } from 'react';
export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 100,
    y: 100
  });
  return (
    <div
      onPointerMove={e => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        });
        // setPosition(prev => { 예전 값을 가지고 있기 때문에 react가 변화를 알아채지 못한다.
        //    prev.x = e.clientX
        //    prev.y = e.clientY
        // });
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  );
}

// 불변성을 유지하는 규칙을 만들어서, 그 규칙을 따르는 한, 해당 객체는 영원히 불변하다
// 
// 뭔가 바꾸고 싶으면, 세로 만드세요!
// -> 이렇게해야 react가 변경사항을 파악하고 리랜더링을 한다.
