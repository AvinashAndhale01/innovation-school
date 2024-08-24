import "./courseheadingcard.scss";
const CourseHeadingCard = ({ title }) => {
  return (
    <div className="courseheadingcard">
      <div className="course-head">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default CourseHeadingCard;
