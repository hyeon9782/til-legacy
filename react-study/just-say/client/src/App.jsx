import { useEffect, useState } from "react";
import Dictaphone from "./components/Dictaphone";
import SpeechRecognition from "./components/SpeechRecognition";
import SpeechSynthesis from "./components/SpeechSynthesis";

function App() {
  const [value, setValue] = useState('hi');

  return (
    <div>
      {/* <SpeechRecognition text={value} setText={setValue}/>
      <SpeechSynthesis text={value} /> */}
      {/* <Dictaphone /> */}
      <h1>안녕</h1>
    </div>
  )
}

export default App
