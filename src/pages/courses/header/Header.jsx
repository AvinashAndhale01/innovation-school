import CourseHeadingCard from "./CourseHeadingCard";
import "./header.scss";
const Header = ({ onFeatureClick, onCurriculumClick, onMentorClick }) => {
  return (
    <div className="courseheading">
      <div className="head">
        <CourseHeadingCard title="Key Features" onClick={onFeatureClick} />
        <CourseHeadingCard title="Expert" onClick={onMentorClick} />
        <CourseHeadingCard title="Curriculam" onClick={onCurriculumClick} />
      </div>
    </div>
  );
};

export default Header;
