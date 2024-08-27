import React from "react";
import MentorCard from "./MentorCard";
import "./mentor.scss";

const Mentor = React.forwardRef((props, ref) => {
  const { courseInfor } = props;
  return (
    <div ref={ref} className="mentor">
      <div className="guide-head">
        <h2>Meet Your</h2>
        <h1>Guide, Mentor</h1>
      </div>
      <div className="guide-card">
        {courseInfor?.map((guide) => (
          <MentorCard mentor={guide} key={guide._id} />
        ))}
      </div>
    </div>
  );
});

Mentor.displayName = "Mentor";

export default Mentor;
