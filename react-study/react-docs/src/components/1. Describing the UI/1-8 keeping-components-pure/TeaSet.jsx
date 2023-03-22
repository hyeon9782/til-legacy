// let guest = 0;

function Cup({ guest }) {
  // Bad: changing a preexisting variable!
  // 이 컴포넌트는 외부에서 선언된 guest 변수를 읽고 쓰고 있습니다.
  // 즉 이 컴포넌트를 호출할 때 마다 다른 JSX가 생성된다는 뜻입니다.
  // guest = guest + 1;
  // gurst를 props로 전달 받음으로써 해당 문제를 해결할 수 있습니다.

  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}

// 순수 함수란?
// 1. 자신의 일에만 신경쓴다. => 호출되기 전에 존재했던 객체나 변수를 변경하지 않는다.
// 2. 동일 입력, 동일 출력 => 동일한 입력이 주어지면 항상 동일한 결과를 반환한다.

// StrictMode로 불순한 계산을 감지할 수 있습니다.
// React에서 렌더링하는 동안 읽을 수 있는 입력은 props / state / context 세 가지
// 사용자 입력에 대한 응답으로 무언가를 변경하려면 변수에 쓰는 대신 state를 설정해야 합니다.
// 컴포넌트가 렌더링되는 동안에는 기존 변수나 객체를 절대 변경해서는 안 됩니다.
// StrictMode는 컴포넌트 함수를 두 번 호출함으로써 이러한 규칙을 위반하는 컴포넌트를 찾는데 도움을 줍니다.
// 순수 함수는 계산만 하므로 두 번 호출해도 아무것도 바뀌지 않습니다.