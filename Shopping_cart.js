import React, { useState } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      <button onClick={() => addItem("Laptop")}>
        Add Laptop
      </button>

      <button onClick={() => addItem("Mobile")}>
        Add Mobile
      </button>

      <button onClick={() => addItem("Headphones")}>
        Add Headphones
      </button>

      <h3>Cart Items:</h3>

      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p>Total Items: {cart.length}</p>
    </div>
  );
}

export default ShoppingCart;
