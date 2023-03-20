export default function Toolbar() {
    // 클릭이 일어난 곳보다 상위 이벤트는 모두 이벤트가 실행된다.
    // Play Movie를 클릭하면 Playing!이 먼저 나오고 You clicked on the toolbar!이 나온다
    // e.stopPropagation();를 사용하여 이벤트를 막을 수 있다.
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <button onClick={(e) => alert('Playing!')}>
        Play Movie
      </button>
      <button onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
    </div>
  );
}