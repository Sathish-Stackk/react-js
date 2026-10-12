import { useState } from "react";

function QuoteCard() {
  const quotes = [
    "Keep learning.",
    "Build something useful.",
    "Small progress matters.",
    "Code every day."
  ];

  const colors = ["lightblue", "lightgreen", "lavender", "lightyellow"];

  const [index, setIndex] = useState(0);

  const changeQuote = () => {
    setIndex((index + 1) % quotes.length);
  };

  return (
    <div
      style={{
        padding: "30px",
        background: colors[index],
        textAlign: "center"
      }}
    >
      <h2>{quotes[index]}</h2>

      <button onClick={changeQuote}>
        New Quote
      </button>
    </div>
  );
}

export default QuoteCard;
