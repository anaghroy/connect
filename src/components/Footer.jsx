import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import footerlogo from "../assets/images/footerlogo.png";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className="main-footer">
      <div className="outer">
        <div className="logo-section">
          {/** LOGO */}
          <div className="svg-logo">
            <img src={footerlogo} alt="footerlogo" />
            <h1 style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}>
              Connect
            </h1>
          </div>
          <div className="text">
            <p style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}>
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
          <p style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}>
            Product
          </p>
          <a
            style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}
            href="#"
          >
            About
          </a>
          <a
            style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}
            href="#"
          >
            Team
          </a>
          <a
            style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}
            href="#"
          >
            Careers
          </a>
        </div>

        <div className="product">
          <p style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}>
            Support
          </p>
          <a
            style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}
            href="#"
          >
            How It Works
          </a>
          <a
            style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}
            href="#"
          >
            Trust & Safety
          </a>
          <a
            style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}
            href="#"
          >
            Help Centre
          </a>
        </div>
        <div className="product">
          <p style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}>
            Resources
          </p>
          <a
            style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}
            href="#"
          >
            Customer Stories
          </a>
          <a
            style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}
            href="#"
          >
            Cost Calculator
          </a>
          <a
            style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}
            href="#"
          >
            Startup Cities
          </a>
        </div>
      </div>
      <div className="underline" style={{color: theme === "light" ? "#ffffff" : "#f6fbfa"}}></div>
      <div className="copy">
        <span style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}>
          &copy; 2025 Connect Pvt. Ltd.
        </span>
        <div className="links">
          <a
            style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}
            href="#"
          >
            Terms
          </a>
          <a
            style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}
            href="#"
          >
            Privacy
          </a>
          <a
            style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}
            href="#"
          >
            Sitemap
          </a>
          <a
            style={{ color: theme === "light" ? "#ffffff" : "#f6fbfa" }}
            href="#"
          >
            Company
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
