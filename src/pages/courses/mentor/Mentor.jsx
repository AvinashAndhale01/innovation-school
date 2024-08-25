import MentorCard from "./MentorCard";
import "./mentor.scss";

const Mentor = ({ courseInfor }) => {
  return (
    <div className="mentor">
      <div className="guide-head">
        <h2>Meet Your</h2>
        <h1>Guide, Mentor</h1>
      </div>
      <div className="guide-card">
        {courseInfor.map((guide) => (
          <MentorCard mentor={guide} key={guide.id} />
        ))}
      </div>
    </div>
  );
};

export default Mentor;
