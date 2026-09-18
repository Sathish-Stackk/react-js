import { useState } from "react";

function App() {
  const [n, setN] = useState(5);

  const pattern = Array.from({ length: n }, (_, i) =>
    "★ ".repeat(i + 1)
  );

  return (
    <div>
      <h2>Pattern Generator</h2>
      <input
        type="number"
        min="1"
        value={n}
        onChange={(e) => setN(+e.target.value)}
      />
      <pre>{pattern.join("\n")}</pre>
    </div>
  );
}

export default App;
