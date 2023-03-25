import { useEffect, useState } from "react";
import SpeechRecognition from "./components/SpeechRecognition";
import SpeechSynthesis from "./components/SpeechSynthesis";

function App() {
  const [value, setValue] = useState('hi');

  return (
    <div>
      {/* <SpeechRecognition text={value} setText={setValue}/>
      <SpeechSynthesis text={value} /> */}
    </div>
  )
}

export default App
