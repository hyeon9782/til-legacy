import Clock from './Clock.js';
const Time = () => {
    
    return (
        <div>
        <p>
            Pick a color:{' '}
            <select value={color} onChange={e => setColor(e.target.value)}>
            <option value="lightcoral">lightcoral</option>
            <option value="midnightblue">midnightblue</option>
            <option value="rebeccapurple">rebeccapurple</option>
            </select>
        </p>
        <Clock color={color} time={time.toLocaleTimeString()} />
        </div>
    )
}

export default Time;