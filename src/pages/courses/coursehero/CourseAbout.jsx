import "./courseabout.scss";
import vectorimg from "..//../../assets/images/courseabout.svg";

const CourseAbout = ({ courseInfor }) => {
  return (
    <div className="courseabout">
      <div className="heading">
        <h2>About the Course</h2>
      </div>
      <div className="aboutdes">
        <div className="vector-img">
          <img src={vectorimg} />
        </div>
        <div className="description">
          <p>
            {courseInfor?.aboutCourse?.title}
          </p>
          <p className="des-head">This course will guide you on</p>
          <p className="list">
            <ul>
              {
                courseInfor?.aboutCourse?.points?.map(val=>{
                  return (
                      <li className="list-item">
                        {val}
                      </li>
                  )
                })
              }
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseAbout;
