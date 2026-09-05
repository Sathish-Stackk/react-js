import React, { useState } from "react";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convert = () => {
    setFahrenheit((Number(celsius) * 9) / 5 + 32);
  };

  return (
    <div>
      <h2>Temperature Converter</h2>

      <input
        type="number"
        placeholder="Enter Celsius"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
      />

      <button onClick={convert}>Convert</button>

      <p>Fahrenheit: {fahrenheit}</p>
    </div>
  );
}

export default TemperatureConverter;
