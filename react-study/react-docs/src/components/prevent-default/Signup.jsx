export default function Signup() {
    // e.preventDefault();를 사용하여 기본 동작 없애기
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!');
    }}>
      <input />
      <button>Send</button>
    </form>
  );
}