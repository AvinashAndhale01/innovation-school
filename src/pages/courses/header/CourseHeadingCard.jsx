import "./courseheadingcard.scss";

const CourseHeadingCard = ({ title, onClick }) => {
  return (
    <div className="courseheadingcard" onClick={onClick}>
      <div className="course-head">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default CourseHeadingCard;
