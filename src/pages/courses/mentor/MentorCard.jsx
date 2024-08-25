import "./mentorcard.scss";
import { linkedinTc } from "../../../assets/icons";
const MentorCard = ({ mentor }) => {
  const handleLinkedInClick = () => {
    if (mentor.LinkedinId) {
      window.open(`https://www.linkedin.com/in/${mentor.LinkedinId}`, "_blank");
    }
  };
  return (
    <div className="mentor-card">
      <div className="mcard">
        <div className="img">
          <img src={mentor.Img} />
        </div>
        <div className="card-info">
          <div className="name">
            <p>{mentor.Name}</p>
            <img src={linkedinTc} onClick={handleLinkedInClick} />
          </div>
          <div className="mentor-identity">
            <p className="mentor-info">{mentor.Identity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
