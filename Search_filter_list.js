import React, { useState } from "react";

function SearchList() {
  const [search, setSearch] = useState("");

  const items = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Search List</h2>

      <input
        type="text"
        placeholder="Search fruit"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchList;
