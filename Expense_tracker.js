import { useState } from "react";

function ExpenseSplitter() {
  const [amount, setAmount] = useState("");
  const [people, setPeople] = useState("");
  const [result, setResult] = useState(null);

  const calculateSplit = () => {
    if (amount > 0 && people > 0) {
      setResult((amount / people).toFixed(2));
    }
  };

  return (
    <div>
      <h2>Expense Splitter</h2>

      <input
        type="number"
        placeholder="Total amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="number"
        placeholder="Number of people"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />

      <button onClick={calculateSplit}>Split Expense</button>

      {result && <h3>Each Person Pays: ₹{result}</h3>}
    </div>
  );
}

export default ExpenseSplitter;
