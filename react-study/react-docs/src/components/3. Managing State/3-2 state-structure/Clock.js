export default function Clock({ color, time }) {
  return <h1 style={{ color: color }}>{ time }</h1>;
}

// useState를 사용해서 문제가 생기고 있던 상황
// 해당 방법을 유지하고 싶다면 useEffect()를 사용하여 color를 트래킹하여 setColor()를 실행
// 또는 Clock 컴포넌트에 key를 부여하여 컴포넌트를 다시 그리는 방법도 있으나 추천하지 않는다.
// useEffect 방법은 마운트가 완료된 상태에서 데이터만 변경
// key 방법은 언마운트후 다시 마운트하는 방식
