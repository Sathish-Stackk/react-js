import React, { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Character Counter</h2>

      <textarea
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Characters: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;
