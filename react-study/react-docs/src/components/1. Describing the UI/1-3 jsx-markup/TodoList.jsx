export default function TodoList() {
  return (
    <>
        <h1>Hedy Lamarr's Todos</h1>
        <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        class="photo"
        />
        <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum technology</li>
        </ul>
    </>
  );
}

// 1. 하나의 루트 엘리먼트를 반환해라 => JSX은 html이 아니라 JavaScript 하나의 함수에서는 두 개의 객체를 반환 할 수 없기 떄문
// 2. 모든 태그를 닫아라 => html보다 엄격하다
// 3. 대부분이 캐멀 케이스다! => class = className , stroke-width = strokeWidth
