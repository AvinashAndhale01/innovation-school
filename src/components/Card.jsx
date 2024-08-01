import "../styles/card.scss";
const Card = ({ lc }) => {
  return (
    <div className="card">
      <img src={lc} alt="Course 1" />
      <h2>Legal Course</h2>
      <p>Price &#x20B9; 1999</p>
      <button>Enroll Now</button>
    </div>
  );
};

export default Card;
