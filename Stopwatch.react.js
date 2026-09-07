import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  const reset = () => {
    setSeconds(0);
    setRunning(false);
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <h1>{seconds} seconds</h1>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
