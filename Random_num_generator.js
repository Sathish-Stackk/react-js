import React, { useState } from "react";

function RandomNumber() {
  const [number, setNumber] = useState(0);

  const generateNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setNumber(random);
  };

  return (
    <div>
      <h2>Random Number Generator</h2>

      <button onClick={generateNumber}>
        Generate Number
      </button>

      <h3>Number: {number}</h3>
    </div>
  );
}

export default RandomNumber;
