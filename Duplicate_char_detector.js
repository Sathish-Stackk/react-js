import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const chars = text.toLowerCase().replace(/\s/g, "").split("");
  const duplicates = [...new Set(
    chars.filter((c, i) => chars.indexOf(c) !== i)
  )];

  return (
    <div>
      <h2>Duplicate Character Detector</h2>
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <p>Duplicates: {duplicates.join(", ") || "None"}</p>
    </div>
  );
}

export default App;
