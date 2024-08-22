import { useNavigate } from "react-router-dom";
import "./card.scss";
const Card = ({ courses }) => {
  const history = useNavigate();
  const handleClick = () => {
    history(`/course/${courses.courseid}`);
  };
  return (
    <div className="card">
      <div
        style={{
          height: "200px",
          width: "350px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={courses.img} alt="Course 1" style={{ width: "350px" }} />
      </div>

      <div className="card-info">
        <h2>{courses.name}</h2>
        <p>Price &#x20B9; {courses.price}</p>
      </div>
      <div className="card-btn" onClick={handleClick}>
        Enroll Now
      </div>
    </div>
  );
};

export default Card;
