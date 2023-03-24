import { useState } from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export default function List() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    // 배열을 변이하고 싶을 때는 배열을 먼저 복사한 다음에 변이하면 된다.
    // 배열을 복사하더라도 배열 내부의 기존 항목을 직접 변이할 수는 없습니다.
    // 이는 얕은 복사가 이루어져 새배열에는 원래 배열과 동일한 항목이 포함되기 때문입니다.
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
    <>
      <button onClick={handleClick}>
        Reverse
      </button>
      <ul>
        {list.map(artwork => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  );
}
