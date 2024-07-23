import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

const App = () => {
  const [carts, setCart] = useState(["product 1", "product 2", "product 3"]);
  return (
    <>
      <NavBar cartNumber={carts.length} />
      <Cart carts={carts} />
      <button onClick={() => setCart(["product 4", ...carts])}>add cart</button>
      <button onClick={() => setCart([])}>clear cats</button>
    </>
  );
};

export default App;
