const FeaturedCard = ({ features }) => {
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
                color={item.iconcolor}
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
