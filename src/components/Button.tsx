import { ReactNode } from "react";

interface Props {
  color?: "primary" | "secondary" | "success";
  children: ReactNode;
  onclick: () => void;
}

const Button = ({ color = "primary", children, onclick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;
