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
            If you aspire to become an Instagram influencer with the power of
            your content, but feel clueless when it comes to…
          </p>
          <p className="des-head">This course will guide you on</p>
          <p className="list">
            <ul>
              <li>Understanding the science behind going viral</li>
              <li>Creating unique content every single day</li>
              <li>Creating your own personal brand</li>
              <li>Monetising your Instagram content</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseAbout;
