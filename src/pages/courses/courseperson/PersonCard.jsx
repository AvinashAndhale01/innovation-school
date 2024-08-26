import "./personcard.scss";

const PersonCard = ({ img, name, info }) => {
  return (
    <div className="person-card">
      <div className="person-card-img">
        <img src={img} />
      </div>
      <div className="person-card-name">
        <p>{name}</p>
      </div>
      <div className="person-card-info">
        <p>{info}</p>
      </div>
      <div className="horizontal-card-line"></div>
    </div>
  );
};

export default PersonCard;
