export default function Item({ name, isPacked, importance }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = (
      <del>{name + " ✔"}</del>
    )
  }
  return (
    <li className="item">
      {name} {importance > 0 && `(importance: ${importance})`}{isPacked ? ' ✔' : '❌'}
      {/* {itemContent} */}
    </li>
  )
}

// 1. React에서는 자바스크립트로 분기 로직을 제어한다.
// 2. if문으로 조건부로 JSX 표현식을 반환할 수 있다.
// 3. 중괄호를 사용하여 일부 JSX를 변수에 조건부로 저장한 다음 다른 JSX 안에 포함할 수 있다.
// 4. JSX에서{cond ? <A /> : <B />}는 “cond가 있으면 <A />를 렌더링하고, 그렇지 않으면 <B />를 렌더링하라”를 의미
// 5. JSX에서 {cond && <A />}는 "cond가 있으면 <A />를 렌더링하고, 그렇지 않으면 아무것도 렌더링하지 말라"를 의미
// 6. 이 단축용법은 흔히 쓰이지만, 만약 if를 선호한다면 굳이 사용하지 않아도 됩니다.