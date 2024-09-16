import "./coursehero.scss";

const CourseHero = ({ courseInfor }) => {
  return (
    <div className="course-hero">
      <div className="course-title">
        <h1>{courseInfor?.title}</h1>
      </div>
      <div className="course-title-des">
        <p>{courseInfor?.about}</p>
      </div>

      <div className="course-info">
        <div className="course-img">
          <img src={courseInfor?.img} alt={courseInfor?.title} />
        </div>
        <div className="c-info">
          <div className="hour">

                {courseInfor?.duration}

          </div>
          <div className="enroll"> <a style={{color:"white", textDecoration: "none"}} href={courseInfor?.paymentUrl}> Enroll Now </a></div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
