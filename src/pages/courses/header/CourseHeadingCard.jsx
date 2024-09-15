import "./courseheadingcard.scss";

const CourseHeadingCard = ({ title, onClick }) => {
  return (
    <div className="courseheadingcard" onClick={onClick}>
      <div className="course-head">
       {title}
      </div>
    </div>
  );
};

export default CourseHeadingCard;
