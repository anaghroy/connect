import { MoveUpRight } from "lucide-react";


const Leftarrow = () => {
  return (
    <>
      <div className="arrow">
        <button className="btn-left">
          <MoveUpRight size={32} />
        </button>
      </div>
    </>
  );
};

export default Leftarrow;
