import { useState } from "react";
import { useParams } from "react-router-dom";
import { courseInfo } from "../../utils/data";
import "./coursedescription.scss";
import Header from "./header/Header";
import CourseHero from "./coursehero/CourseHero";
import CourseAbout from "./coursehero/CourseAbout";
import KeyFeature from "./keyfeatures/KeyFeature";
import Mentor from "./mentor/Mentor";
import Curriculam from "./cuuriculam/Curriculam";
import CoursePerson from "./courseperson/CoursePerson";

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
        <Mentor courseInfor={courseDetail.Guide} />
        <Curriculam courseInfor={courseDetail.Curriculum} />
        <CoursePerson />
      </div>
    </>
  );
};

export default CourseDescription;
