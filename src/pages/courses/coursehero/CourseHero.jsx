import "./coursehero.scss";

const CourseHero = ({ courseInfor }) => {
  return (
    <div className="course-hero">
      <div className="course-title">
        <h1>{courseInfor.Title}</h1>
      </div>
      <div className="course-title-des">
        <p>{courseInfor.Des}</p>
      </div>

      <div className="course-info">
        <div className="course-img">
          <img src={courseInfor.Img} alt={courseInfor.Title} />
        </div>
        <div className="c-info">
          <div className="hour">
            <p>
              30+ hours of <br /> content
            </p>
          </div>
          <div className="enroll">Enroll Now</div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
