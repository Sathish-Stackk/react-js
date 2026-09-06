import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <h1>{seconds} seconds</h1>
    </div>
  );
}

export default CountdownTimer;
