import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const taken = ["admin", "user", "student", "developer"];

  const available =
    name && !taken.includes(name.toLowerCase());

  return (
    <div>
      <h2>Username Checker</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter username"
      />

      {name && (
        <p>
          {available ? "Username Available ✓" : "Username Taken ✗"}
        </p>
      )}
    </div>
  );
}

export default App;
