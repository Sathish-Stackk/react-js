import { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running || seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds(s => s - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running, seconds]);

  const reset = () => {
    setRunning(false);
    setSeconds(60);
  };

  return (
    <div>
      <h2>Focus Timer</h2>
      <h1>{Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}</h1>
      <button onClick={() => setRunning(!running)}>
        {running ? "Pause" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
