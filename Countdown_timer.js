import { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((time) => time - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <h1>{seconds} Seconds</h1>

      <button onClick={() => setSeconds(60)}>Restart</button>
    </div>
  );
}

export default App;
