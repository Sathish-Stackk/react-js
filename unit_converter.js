import { useState } from "react";

function App() {
  const [km, setKm] = useState("");
  const [miles, setMiles] = useState("");

  const convert = () => {
    setMiles((Number(km) * 0.621371).toFixed(2));
  };

  return (
    <div>
      <h2>KM to Miles Converter</h2>

      <input
        type="number"
        placeholder="Enter kilometers"
        value={km}
        onChange={(e) => setKm(e.target.value)}
      />

      <button onClick={convert}>Convert</button>

      <p>Miles: {miles}</p>
    </div>
  );
}

export default App;
