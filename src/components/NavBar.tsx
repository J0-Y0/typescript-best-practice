import React from "react";

interface Props {
  cartNumber: number;
}
const NavBar = ({ cartNumber }: Props) => {
  return <div>NavBar: {cartNumber}</div>;
};

export default NavBar;
