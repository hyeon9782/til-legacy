import { useState } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  let timeoutID = null;

  function handleSend() {
    setIsSending(true);
    timeoutID = setTimeout(() => {
      alert('Sent!');
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID);
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
      {isSending &&
        <button onClick={handleUndo}>
          Undo
        </button>
      }
    </>
  );
}

// 함수가 실행되면 컴포넌트가 다시 생성?
// ref로 사용?

// 디바운스 스로틀
// 이벤트가 굉장히 많이 발생
// 스크롤 or 마우스 무브
// mouseMove -> 10ms~15ms(대략)에 한 번 발생
// -> 성능 저하를 조금이라도 줄일 수 있을까?
// 스로틀 => 일정 시간 간격으로 딱 한번씩만 함수 실행 (interval) => 100ms에 한 번씩 
// 디바운스 => 모든 동작이 종료되면 그제서야 한 번 실행 (timeout) => 스크롤, resize
// 
