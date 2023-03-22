const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}


// 1. 따옴표 안의 JSX 속성은 문자열로 전달된다.
// 2. 중괄호를 사용하면 JavaScript 로직과 변수를 마크업으로 가져올 수 있다.
// 3. 중괄호는 JSX 태그 콘텐츠 내부 또는 속성의 = 바로 뒤에서 작동한다.
// 4. {{}}는 특별한 구문이 아니라 JSX 중괄호 안에 들어있는 JavaScript 객체다.