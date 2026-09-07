import React, { useState } from "react";

function VotingApp() {
  const [votes, setVotes] = useState({
    Python: 0,
    Java: 0,
    JavaScript: 0
  });

  const vote = (language) => {
    setVotes({
      ...votes,
      [language]: votes[language] + 1
    });
  };

  return (
    <div>
      <h2>Favorite Programming Language</h2>

      <button onClick={() => vote("Python")}>Python</button>
      <button onClick={() => vote("Java")}>Java</button>
      <button onClick={() => vote("JavaScript")}>JavaScript</button>

      <h3>Results</h3>

      <p>Python: {votes.Python}</p>
      <p>Java: {votes.Java}</p>
      <p>JavaScript: {votes.JavaScript}</p>
    </div>
  );
}

export default VotingApp;
