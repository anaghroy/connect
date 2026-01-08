import choose from "../assets/images/choose.png";
import radial from "../assets/images/radial.png";
import FeaturedCard from "./FeaturedCard";
import { features } from "../data/features";
import LeftRightArrow from "./LeftRightArrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Choose = () => {
  return (
    <section className="main-choose">
      <div className="radial">
        <img src={radial} alt="radial" />
      </div>
      <div className="para">
        <p>Why choose us?</p>
        <span>
          Choose us for unmatched quality, exceptional service, and a commitment
          to
          <br /> exceeding your exceptations every time.
        </span>
      </div>
      <div className="main-wrapper">
        <div className="left">
          <img src={choose} alt="choose" />
        </div>
        <div className="right">
          <FeaturedCard features={features} />
        </div>
      </div>
      <div className="video-content">
        <div className="left">
          <div className="for">
            <p>What our customers say</p>
          </div>
          <div className="outer-button">
            <LeftRightArrow />
          </div>
        </div>
        <div className="right">
          <div className="quote">
            <FontAwesomeIcon className="icon" size="2x" icon={faQuoteLeft} />
          </div>
          <p>
            "I recently hired a freelancer for a project, and I couldn't be
            happier with the results. Their work exceeded my expectations in
            every way. Communication was smooth, deadlines were met, and the
            quality was outstanding. I highly recommend this freelancer to
            anyone looking for top-notch skills and professionalism."
          </p>
          <div className="quote2">
            <FontAwesomeIcon size="2x" icon={faQuoteRight} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
