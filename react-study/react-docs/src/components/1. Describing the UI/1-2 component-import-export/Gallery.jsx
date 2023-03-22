import { Profile } from "./Profile";

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

// Default Export => export defulat function Button() {}
// Default Import => import Button from './button.js';
// 원하는 이름으로 가져올 수 있다.
// 하나의 파일에서는 하나의 Default Export를 설정할 수 있다.

// Named Export => export function Button() {}
// Named Import => import { Button } from './button.js';
// 반드시 파일안에 지정한 함수 이름으로 가져와야 한다.
// 하나의 파일에서 여러 컴포넌트를 내보내기 위해서는 Named Export를 사용해야한다.

