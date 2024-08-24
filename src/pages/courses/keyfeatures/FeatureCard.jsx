import "./featurecard.scss";

const FeatureCard = ({ icon, text }) => {
  return (
    <div className="feature-card">
      <img src={icon} />
      <p>{text}</p>
      <div className="line"></div>
    </div>
  );
};

export default FeatureCard;
