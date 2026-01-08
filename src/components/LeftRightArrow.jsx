import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";

const LeftRightArrow = () => {
  return (
    <>
      <button className="btn-left">
        <MoveLeft size={32} />
      </button>
      <button className="btn-right">
        <MoveRight size={32} />
      </button>
    </>
  );
};

export default LeftRightArrow;
