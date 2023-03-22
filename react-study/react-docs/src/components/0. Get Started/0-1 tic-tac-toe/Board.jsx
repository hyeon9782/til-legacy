import Square from './Square';

export default function Board({ xIsNext, squares, onPlay }) {

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    // squares의 사본을 만든다
    // slice()에 아무 인자도 넣지 않으면 내용이 동일한 새로운 배열을 반환함
    // slice() 보다는 스프레드 문법으로 배열의 사본을 만드는 것을 추천한다.
    // 사본을 만드는 이유는? => 데이터의 불변성을 지키기 위해
    // 참조형 데이터인 배열은 내부 프로퍼티가 변경되어도, React가 변경되었다고 인지하지 못한다.
    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? 'X' : 'O'

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);

  const status = winner
    ? `Winner : ${winner}`
    : `Next player : ${xIsNext ? "X" : "O"}`

  



  return (
    <>
      <div className="status">{status}</div>
      {/* {Array.from(Array(3).keys()).map(() => {
        return {
          
        }
      })} */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  // 한 줄인지 확인
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}