import { Sun, Moon } from "lucide-react";

const NavbarToggle = () => {
  return (
    <div className="theme-btn">
      <button className="sun">
        <Sun size={22} />
      </button>
      <button className="moon">
        <Moon size={22} />
      </button>
    </div>
  );
};

export default NavbarToggle;
