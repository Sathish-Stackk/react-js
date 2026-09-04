import React, { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h2>Like Counter</h2>

      <button onClick={() => setLikes(likes + 1)}>
        👍 Like
      </button>

      <p>Total Likes: {likes}</p>
    </div>
  );
}

export default LikeButton;
