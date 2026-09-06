import React, { useState } from "react";

function Quiz() {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  const checkAnswer = () => {
    if (answer === "Paris") {
      setResult("Correct Answer!");
    } else {
      setResult("Wrong Answer!");
    }
  };

  return (
    <div>
      <h2>Simple Quiz</h2>

      <p>What is the capital of France?</p>

      <input
        type="text"
        placeholder="Enter your answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button onClick={checkAnswer}>Submit</button>

      <h3>{result}</h3>
    </div>
  );
}

export default Quiz;
