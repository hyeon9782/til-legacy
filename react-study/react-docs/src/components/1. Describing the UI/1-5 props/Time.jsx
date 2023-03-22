import Clock from './Clock.js';
import { useEffect, useState } from "react";

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
      const id = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(id);
    }, []);
    return time;
}

const Time = () => {
    const time = useTime();
    const [color, setColor] = useState('lightcoral');
    return (
        <div>
        <p>
            Pick a color:{' '}
            <select value={color} onChange={e => setColor(e.target.value)}>
            <option value="lightcoral">lightcoral</option>
            <option value="midnightblue">midnightblue</option>
            <option value="rebeccapurple">rebeccapurple</option>
            </select>
        </p>
        <Clock color={color} time={time.toLocaleTimeString()} />
        </div>
    )
}

export default Time;

// 1. Props를 전달하려면 HTML 속성 사용할 때와 마찬가지로 JSX에 props를 추가한다.
// 2. Props를 읽을 때 구조 분해 구문을 사용할 수 있다.
// 3. size = 100 과 같은 기본값을 지정할 수 있으며, 값이 없거나 undefined인 props에만 사용된다.
// 4. 모든 props를 {...props} JSX 스프레드 구문을 사용할 수 있지만, 과도하게 사용하지 마라
// 5. <Card><Avatar /></Card>와 같이 중첩된 JSX는 Card 컴포넌트의 자식 컴포넌트로 표시된다.
// 6. Props는 읽기 전용 스냅샷으로, 렌더링할 때마다 새로운 버전의 props를 받는다.
// 7. Props를 변경할 수 없다. 상호작용이 필요한 경우 state를 설정해야한다.