import "./card.scss";
const Card = ({ lc }) => {
  return (
    <div className="card">
      <img src={lc} alt="Course 1" />
      <div className="card-info">
      <h2>Legal Course</h2>
      <p>Price &#x20B9; 1999</p>
      </div>
      <div className="card-btn">Enroll Now</div>
    </div>
  );
};

export default Card;
