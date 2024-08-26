import "./curriculam.scss";
import CurriculamCard from "./CurriculamCard";
import React from "react";

const Curriculam = React.forwardRef((props, ref) => {
  const { courseInfor = [] } = props;
  return (
    <div ref={ref} className="curriculam">
      <div className="curriculam-title">
        <h1>Course Curriculam</h1>
      </div>
      <div className="curriculam-info">
        {courseInfor.map((modules) => (
          <CurriculamCard module={modules} key={modules.id} />
        ))}
      </div>
    </div>
  );
});

Curriculam.displayName = "Curriculam";

export default Curriculam;
