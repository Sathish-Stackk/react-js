import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = () => {
    const result = weight / ((height / 100) ** 2);
    setBmi(result.toFixed(2));
  };

  return (
    <div>
      <h2>BMI Calculator</h2>

      <input
        placeholder="Weight (kg)"
        onChange={(e) => setWeight(e.target.value)}
      />

      <input
        placeholder="Height (cm)"
        onChange={(e) => setHeight(e.target.value)}
      />

      <button onClick={calculateBMI}>Calculate</button>

      <p>BMI: {bmi}</p>
    </div>
  );
}

export default App;
