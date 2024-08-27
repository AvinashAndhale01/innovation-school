import { useNavigate } from "react-router-dom";
import "./card.scss";
const Card = ({ courses }) => {
  const history = useNavigate();
  const handleClick = () => {
    history(`/course/${courses._id}`);
    window.scrollTo(0, 0);
  };
  return (
    <div className="card">
      <div className="card-img">
        <img src={courses.img} alt="Course 1" />
      </div>
      <div className="card-info">
        <h2>{courses.title}</h2>
        <p>Price &#x20B9; {courses.price}</p>
      </div>
      <div className="card-btn" onClick={handleClick}>
        Enroll Now
      </div>
    </div>
  );
};

export default Card;
