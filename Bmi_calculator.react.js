import React, { useState } from "react";

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = () => {
    const h = Number(height) / 100;
    const result = Number(weight) / (h * h);
    setBmi(result.toFixed(2));
  };

  return (
    <div>
      <h2>BMI Calculator</h2>

      <input
        type="number"
        placeholder="Weight (kg)"
        onChange={(e) => setWeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Height (cm)"
        onChange={(e) => setHeight(e.target.value)}
      />

      <button onClick={calculateBMI}>Calculate BMI</button>

      <h3>BMI: {bmi}</h3>
    </div>
  );
}

export default BMICalculator;
