import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

interface LikeProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikeProps) => {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus((s) => !s);
    onClick();
  };

  if (status) return <FaHeart color="green" size={20} onClick={toggle} />;
  return <FaRegHeart size={20} onClick={toggle}></FaRegHeart>;
};
export default Like;
