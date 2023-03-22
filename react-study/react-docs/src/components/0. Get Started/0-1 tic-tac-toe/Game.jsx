import { useState } from "react";
import Board from './Board'

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // 사용자가 현재 어떤 단계를 보고 있는지 추적하는 state
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        // state에 종속된 계산값 + state 변경에 의해 무조건 같이 변경되지는 않는 경우...
        // const isOver10 = useMemo(() => num >= 10. [num]);
        const description = move > 0 ? `Go to move #${move}` : `Go to game start`
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })
    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>

    )
}