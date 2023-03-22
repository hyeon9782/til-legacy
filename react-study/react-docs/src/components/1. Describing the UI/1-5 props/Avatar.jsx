import { getImageUrl } from './utils.js';
export default function Avatar({ size = 100, person }) {
    // 컴포넌트는 props라는 하나의 인자를 받고 해당 객체를 구조 분해하여 받는다.
    // Avatar(props) Avatar({ size, person })
    // props는 기본값을 지정할 수 있다. 해당 기본값은 값이 없거나 undefined일 때만 사용된다.
    // 0 또는 null은 기본값이 사용되지 않는다.
    const sizeValue = size > 90 ? "b" : "s"; 
  return (
    <img
      className="avatar"
      src={getImageUrl(person, sizeValue)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}