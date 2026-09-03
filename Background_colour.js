import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, padding: "50px" }}>
      <h2>Background Color Changer</h2>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
    </div>
  );
}

export default ColorChanger;
