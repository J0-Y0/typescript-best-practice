import React from "react";

interface Props {
  carts: String[];
}
const Cart = ({ carts }: Props) => {
  return (
    <>
      {" "}
      {carts && (
        <ul>
          cart list:
          {carts.map((cart) => (
            <li>{cart}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cart;
