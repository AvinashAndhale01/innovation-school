import { useEffect } from "react";
import "./enrollnow.scss";

const EnrollNow = ({ courseDetail }) => {
  useEffect(()=>{
    console.log(courseDetail)
  },[])
  return (
    <div className="enroll-now">
      <div className="enroll-now-des">
        <p > Starting at INR {courseDetail?.price} /-</p>
      </div>
      <div className="enroll-now-button">
    
          <a href={courseDetail?.paymentUrl} style={{ color: "white", textDecoration: "none" }}> Enroll Now</a>
    
      </div>
    </div>
  );
};

export default EnrollNow;
