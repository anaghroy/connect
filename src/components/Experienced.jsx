import profile1 from "../assets/images/users/profile1.jpg";
import profile2 from "../assets/images/users/profile2.jpg";
import profile3 from "../assets/images/users/profile3.jpg";
import profile4 from "../assets/images/users/profile4.jpg";
import profile5 from "../assets/images/users/profile5.jpg";
import profile6 from "../assets/images/users/profile6.jpg";
import profile7 from "../assets/images/users/profile7.jpg";
import profile8 from "../assets/images/users/profile8.jpg";
import profile9 from "../assets/images/users/profile9.jpg";
import profile10 from "../assets/images/users/profile10.jpg";
import profile11 from "../assets/images/users/profile11.jpg";
import profile12 from "../assets/images/users/profile12.jpg";
import profile13 from "../assets/images/users/profile13.jpg";
import profile14 from "../assets/images/users/profile14.jpg";
import profile15 from "../assets/images/users/profile15.jpg";
import profile16 from "../assets/images/users/profile16.jpg";
import profile17 from "../assets/images/users/profile17.jpg";
import profile18 from "../assets/images/users/profile18.jpg";
import radial from "../assets/images/radial.png";
import { Star } from "lucide-react";

const Experienced = () => {
  return (
    <div className="experience-wrapper">
      <div className="left">
        <div className="outer-star">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <div className="image-container">
          <div className="image-first">
            <img src={profile1} alt="profile1" />
          </div>
          <div className="image-first">
            <img src={profile2} alt="profile2" />
          </div>
          <div className="image-first">
            <img src={profile3} alt="profile3" />
          </div>
          <div className="image-first">
            <img src={profile4} alt="profile4" />
          </div>
          <div className="image-first">
            <img src={profile5} alt="profile5" />
          </div>
          <div className="image-first">
            <img src={profile6} alt="profile6" />
          </div>
        </div>
        <div className="image-container">
          <div className="image-first">
            <img src={profile7} alt="profile7" />
          </div>
          <div className="image-first">
            <img src={profile8} alt="profile8" />
          </div>
          <div className="image-first">
            <img src={profile9} alt="profile9" />
          </div>
          <div className="image-first">
            <img src={profile10} alt="profile10" />
          </div>
          <div className="image-first">
            <img src={profile11} alt="profile11" />
          </div>
          <div className="image-first">
            <img src={profile12} alt="profile12" />
          </div>
        </div>
        <div className="image-container">
          <div className="image-first">
            <img src={profile13} alt="profile13" />
          </div>
          <div className="image-first">
            <img src={profile14} alt="profile14" />
          </div>
          <div className="image-first">
            <img src={profile15} alt="profile15" />
          </div>
          <div className="image-first">
            <img src={profile16} alt="profile16" />
          </div>
          <div className="image-first">
            <img src={profile17} alt="profile17" />
          </div>
          <div className="image-first">
            <img src={profile18} alt="profile18" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="text">
          <p>Experienced freelancers</p>
          <span>
            Experiencd freelancers possess a deep understanding of their craft,
            delivering top-quality work that exceeds client expectations.
          </span>
        </div>
        <button>Start Finding</button>
        <div className="radial">
          <img src={radial} alt="radial" />
        </div>
      </div>
    </div>
  );
};

export default Experienced;
