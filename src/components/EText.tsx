import { Children, ReactNode, useState } from "react";
import { IoIosExpand } from "react-icons/io";

interface Props {
  maxChar: number;
  children: String;
}

const EText = ({ children, maxChar = 10 }: Props) => {
  const [isExpand, setExpand] = useState(false);

  if (maxChar > children.length) return children;
  const text = isExpand ? children : children.substring(0, maxChar);

  return (
    <div>
      {text}...{" "}
      <button onClick={() => setExpand(!isExpand)}>
        {isExpand ? "less" : "more"}
      </button>
    </div>
  );
};

export default EText;
