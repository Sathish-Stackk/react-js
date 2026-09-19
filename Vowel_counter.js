import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const vowels = text.match(/[aeiou]/gi) || [];

  return (
    <div>
      <h2>Vowel Counter</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <p>Vowels: {vowels.length}</p>
    </div>
  );
}

export default App;
