import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [total, setTotal] = useState("");

  const calculate = () => {
    const tipAmount = Number(bill) * Number(tip) / 100;
    setTotal((Number(bill) + tipAmount).toFixed(2));
  };

  return (
    <div>
      <h2>Tip Calculator</h2>

      <input
        type="number"
        placeholder="Bill Amount"
        onChange={(e) => setBill(e.target.value)}
      />

      <input
        type="number"
        placeholder="Tip %"
        onChange={(e) => setTip(e.target.value)}
      />

      <button onClick={calculate}>Calculate</button>

      <p>Total Amount: ₹{total}</p>
    </div>
  );
}

export default App;
