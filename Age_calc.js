import { useState } from "react";

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();

    if (
      months < 0 ||
      (months === 0 && today.getDate() < birth.getDate())
    ) {
      years--;
    }

    setAge(years);
  };

  return (
    <div>
      <h2>Age Calculator</h2>

      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />

      <button onClick={calculateAge}>Calculate Age</button>

      {age !== null && <h3>Your Age: {age} years</h3>}
    </div>
  );
}

export default AgeCalculator;
