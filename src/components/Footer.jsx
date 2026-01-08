import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import footerlogo from "../assets/images/footerlogo.png";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="outer">
        <div className="logo-section">
          {/** LOGO */}
          <div className="svg-logo">
            <img src={footerlogo} alt="footerlogo" />
            <h1>Connect</h1>
          </div>
          <div className="text">
            <p>
              A freelance service web site connects businesses with freelancers,
              making project collaboration more efficient.
            </p>
          </div>
          <div className="icons">
            <Instagram color="#f6fbfa" />
            <Facebook color="#f6fbfa" />
            <Twitter color="#f6fbfa" />
            <Linkedin color="#f6fbfa" />
          </div>
        </div>
        <div className="product">
          <p>Product</p>
          <a href="#">About</a>
          <a href="#">Team</a>
          <a href="#">Careers</a>
        </div>

        <div className="product">
          <p>Support</p>
          <a href="#">How It Works</a>
          <a href="#">Trust & Safety</a>
          <a href="#">Help Centre</a>
        </div>
        <div className="product">
          <p>Resources</p>
          <a href="#">Customer Stories</a>
          <a href="#">Cost Calculator</a>
          <a href="#">Startup Cities</a>
        </div>
      </div>
      <div className="underline"></div>
      <div className="copy">
        <span>&copy; 2025 Connect Pvt. Ltd.</span>
        <div className="links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Sitemap</a>
          <a href="#">Company</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
