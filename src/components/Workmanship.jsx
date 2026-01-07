import working from "../assets/images/video/working.mp4";

const Workmanship = () => {
  return (
    <section className="outer-wrap">
      <div className="video-wrapper">
        <video loop muted autoPlay src={working}></video>
      </div>
      <div className="video-content">
        <div className="left">
          <div className="for">
            <span>For Talent</span>
          </div>
          <p>Find outstanding workmanship.</p>
        </div>
        <div className="right">
          <p>
            The outstanding workmanship displayed in the intricate craftsmanship
            of the hand-carved wooden furniture, meticulously detailed with
            ornate patterns and flawless finishes, is a testament to the
            artisan's exceptional skill and dedication to their craft.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Workmanship;
