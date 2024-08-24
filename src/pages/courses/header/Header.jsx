import CourseHeadingCard from "./CourseHeadingCard";
import "./header.scss";
const Header = () => {
  return (
    <div className="courseheading">
      <div className="head">
        <CourseHeadingCard title="Key Features" />
        <CourseHeadingCard title="Expert" />
        <CourseHeadingCard title="Curriculam" />
      </div>
    </div>
  );
};

export default Header;
