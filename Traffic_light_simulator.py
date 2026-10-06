import { useState } from "react";

function TrafficLight() {
  const [light, setLight] = useState("Red");

  const changeLight = () => {
    if (light === "Red") setLight("Green");
    else if (light === "Green") setLight("Yellow");
    else setLight("Red");
  };

  return (
    <div>
      <h2>Traffic Light</h2>
      <h3>{light}</h3>

      <button onClick={changeLight}>
        Change Light
      </button>
    </div>
  );
}

export default TrafficLight;
