import { useState } from "react";

function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <h2>Click Counter</h2>
      <p>Total Clicks: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>
        Click Me
      </button>
      <button onClick={() => setClicks(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;
