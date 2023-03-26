
const SpeechRecognition = ({ text, setText }) => {
    
    return (
        <>
            <div>{text}</div>
            <button onMouseDown={listen} onMouseUp={stop}>음성인식</button>
            {listening && <div>음성인식 중...</div>}
        </>
    )
}

export default SpeechRecognition;