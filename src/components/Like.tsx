import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface Props {
  liked: boolean;
  onclick: () => void;
}
const Like = ({ liked, onclick }: Props) => {
  return liked ? (
    <FaHeart color="red" size={30} onClick={onclick} />
  ) : (
    <FaRegHeart size={30} onClick={onclick} />
  );
};

export default Like;
