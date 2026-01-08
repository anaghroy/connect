import { useTheme } from "../context/ThemeContext";

const SubCard = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="video-content">
        <div className="left">
          <div className="for">
            <span
              style={{
                color: theme === "dark" ? "#fff" : "#0f172a",
              }}
            >
              For Talent
            </span>
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
    </>
  );
};

export default SubCard;
