import { useTheme } from "../context/ThemeContext";

const FeaturedCard = ({ features }) => {
  const { theme } = useTheme();
  return (
    <>
      {features.map((item, index) => {
        const Icon = item.icon;

        return (
          <div className="card" key={index}>
            <div className={`icons ${item.iconName}`}>
              <Icon
                className={`${item.contextName}`}
                size={50}
                color={theme === "dark" ? "#e2e8f0" : "#0f172a"}
              />
            </div>

            <div className="text">
              <span>{item.title}</span>
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FeaturedCard;
