import working from "../assets/images/video/working.mp4";
import SubCard from "./SubCard";

const Workmanship = () => {
  return (
    <section className="outer-wrap">
      <div className="video-wrapper">
        <video loop muted autoPlay src={working}></video>
      </div>
      <SubCard/>
    </section>
  );
};

export default Workmanship;
