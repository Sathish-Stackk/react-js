import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { name: "Notebook", price: 50 },
    { name: "Pen", price: 20 },
    { name: "Bag", price: 500 }
  ];

  const addItem = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Mini Shopping Cart</h2>

      {products.map((product) => (
        <button onClick={() => addItem(product)}>
          {product.name} ₹{product.price}
        </button>
      ))}

      <h3>Items: {cart.length}</h3>
      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default App;
