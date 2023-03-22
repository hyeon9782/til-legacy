import Profile from "./Profile";

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

// 1. React를 사용하면 앱의 재사용 가능한 UI 요소인 컴포넌트를 만들 수 있다.
// 2. React 앱에서는 모든 UI는 컴포넌트다.
// 3. React 컴포넌트는 다음 몇 가지를 제외하고는 일반적인 자바스크립트 함수다.
//  3-1 컴포넌트의 이름은 항상 대문자로 시작
//  3-2 JSX 마크업을 반환한다.