import "./curriculam.scss";
import CurriculamCard from "./CurriculamCard";

const Curriculam = ({ courseInfor }) => {
  return (
    <div className="curriculam">
      <div className="curriculam-title">
        <h1>Course Curriculam</h1>
      </div>
      <div className="curriculam-info">
        {courseInfor?.map((modules) => (
          <CurriculamCard module={modules} key={modules.id} />
        ))}
      </div>
    </div>
  );
};

export default Curriculam;
