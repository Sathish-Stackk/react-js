import { useState } from "react";

function CharacterLimit() {
  const [text, setText] = useState("");
  const limit = 100;

  return (
    <div>
      <h2>Character Limit Checker</h2>

      <textarea
        value={text}
        maxLength={limit}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your message..."
      />

      <p>
        {text.length} / {limit} characters
      </p>

      {text.length === limit && (
        <p>Character limit reached!</p>
      )}
    </div>
  );
}

export default CharacterLimit;
