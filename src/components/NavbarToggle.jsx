import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const NavbarToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-btn">
      <button
        className={`sun ${theme === "light" ? "active" : ""}`}
        onClick={() => toggleTheme("light")}
      >
        <Sun size={22} />
      </button>
      <button
        className={`sun ${theme === "dark" ? "active" : ""}`}
        onClick={() => toggleTheme("dark")}
      >
        <Moon size={22} />
      </button>
    </div>
  );
};

export default NavbarToggle;
