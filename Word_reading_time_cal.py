import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const time = Math.ceil(words / 200);

  return (
    <div>
      <h2>Reading Time Calculator</h2>
      <textarea
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text..."
      />
      <p>Words: {words}</p>
      <p>Reading time: {time} minute(s)</p>
    </div>
  );
}

export default App;
