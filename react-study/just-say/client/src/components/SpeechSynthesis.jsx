import { useSpeechSynthesis } from 'react-speech-kit';
const SpeechSynthesis = ({ text = "Hi" }) => {
    const { speak } = useSpeechSynthesis();
    console.log(text);
    
    return (
        <button onClick={() => speak({ text })}>Speak</button>
    )
}

export default SpeechSynthesis;