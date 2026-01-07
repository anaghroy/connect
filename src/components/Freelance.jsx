import {
  MoveRight,
  Search,
  Mic,
  Star,
  ScrollText,
  BadgeDollarSign,
} from "lucide-react";
import freelance from "../assets/images/freelance.png";
import profile3 from "../assets/images/users/profile3.jpg";
import profile4 from "../assets/images/users/profile4.jpg";
import profile5 from "../assets/images/users/profile5.jpg";
import profile7 from "../assets/images/users/profile7.jpg";
import profile1 from "../assets/images/users/profile1.jpg";
const Freelance = () => {
  return (
    <section className="main-freeclance">
      <div className="text">
        <p>freelance</p>
      </div>
      <div className="section-part">
        <div className="left">
          <div className="input-content">
            <Search className="icon search-icon" size={20} />
            <input type="text" placeholder="Search for any services..." />
            <Mic className="icon mic-icon" size={20} />
            <button className="search-btn">
              <MoveRight size={20} />
            </button>
          </div>
          <div className="skills">
            <span>Popular Skills:</span>
            <div className="card">
              <span>web design</span>
            </div>
            <div className="card">
              <span>ui/ux design</span>
            </div>
            <div className="card">
              <span>database</span>
            </div>
            <div className="card">
              <span>bussiness cards</span>
            </div>
          </div>
          <div className="text-contant">
            <p>
              A freelance service web portal connects businesses with
              freelancers, facilitating project collaboration and hiring.
            </p>
          </div>
          <div className="trust">
            <div className="left">
              <p>Trusted Freelancers</p>
              <div className="image-wrap">
                <div className="image">
                  <img src={profile3} alt="profile3" />
                </div>
                <div className="image">
                  <img src={profile4} alt="profile4" />
                </div>
                <div className="image">
                  <img src={profile5} alt="profile5" />
                </div>
                <div className="image">
                  <img src={profile7} alt="profile7" />
                </div>
              </div>
            </div>
            <div className="right">
              <div className="icons">
                <span>
                  <Star color="#EA8A48" />
                </span>
                <span>
                  <Star color="#EA8A48" />
                </span>
                <span>
                  <Star color="#EA8A48" />
                </span>
                <span>
                  <Star color="#EA8A48" />
                </span>
                <span>
                  <Star color="#EA8A48" />
                </span>
              </div>
              <div className="customers">
                <p>200+</p>
                <span>Satisfied Customers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="image-container">
            <img src={freelance} alt="freelance" />
          </div>
          <div className="cards">
            <div className="content">
              <div className="image-container">
                <img src={profile1} alt="profile1" />
              </div>
              <div className="flex">
                <span>@jenny</span>
                <span className="edit">UI/UX Designer</span>
              </div>
            </div>
            <div className="content">
              <div className="text-icons">
                <ScrollText className="scroll" size={32} color="#f6fbfa" />
              </div>
              <div className="flex">
                <span>80+ projects completed</span>
              </div>
            </div>
            <div className="content">
              <div className="text-icons">
                <BadgeDollarSign className="badge" size={32} color="#f6fbfa" />
              </div>
              <div className="flex">
                <span>$30 per hour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
