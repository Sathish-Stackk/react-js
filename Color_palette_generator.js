import { useState } from "react";

function ColorPalette() {
  const [colors, setColors] = useState([]);

  const generateColors = () => {
    const newColors = Array.from({ length: 5 }, () =>
      "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
    );

    setColors(newColors);
  };

  return (
    <div>
      <h2>Color Palette Generator</h2>

      <button onClick={generateColors}>Generate Palette</button>

      <div>
        {colors.map((color, index) => (
          <div key={index}>
            <span
              style={{
                display: "inline-block",
                width: "80px",
                height: "40px",
                backgroundColor: color,
                margin: "10px"
              }}
            ></span>

            <p>{color}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorPalette;
