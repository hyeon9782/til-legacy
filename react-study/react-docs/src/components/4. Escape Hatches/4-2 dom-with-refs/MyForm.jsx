import { useRef } from 'react';

function MyInput(props) {
  return <input {...props} />;
}

export default function MyForm() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}

// ref는 props가 아니다 => ref라는 이름으로 넘겨줄 수 없음
// 1. props로 ref가 아닌 이름으로 변수명을 변경해서 넘겨주는 방법
// 2. fowardRef()를 사용해 ref를 넘기는 방법
// useImperativeHandle를 사용해 내가 원하는 기능만 제공할 수 있다.
// 