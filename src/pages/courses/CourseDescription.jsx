import { useState } from "react";
import { useParams } from "react-router-dom";
import { courseInfo } from "../../utils/data";
import "./coursedescription.scss";
import Header from "./header/Header";
import CourseHero from "./coursehero/CourseHero";
import CourseAbout from "./coursehero/CourseAbout";
import KeyFeature from "./keyfeatures/KeyFeature";

const CourseDescription = () => {
  const { id } = useParams();
  const [courseDetail, setCourseDetail] = useState(courseInfo);
  return (
    <>
      <div>
        <Header />
        <CourseHero courseInfor={courseDetail} />
        <CourseAbout courseInfor={courseDetail} />
        <KeyFeature />
      </div>
    </>
  );
};

export default CourseDescription;
