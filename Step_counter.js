import { useState } from "react";

function StepCounter() {
  const [steps, setSteps] = useState(0);

  return (
    <div>
      <h2>Daily Steps</h2>
      <h1>{steps}</h1>

      <button onClick={() => setSteps(steps + 500)}>
        +500 Steps
      </button>

      <button onClick={() => setSteps(0)}>
        Reset
      </button>
    </div>
  );
}

export default StepCounter;
