import { useState } from "react";
import { useParams } from "react-router-dom";
import { courseInfo } from "../../utils/data";
import "./coursedescription.scss";
import Header from "./header/Header";
import CourseHero from "./coursehero/CourseHero";

const CourseDescription = () => {
  const { id } = useParams();
  const [courseDetail, setCourseDetail] = useState(courseInfo);
  return (
    <>
      <div>
        <Header />
        <CourseHero courseInfor={courseDetail} />
      </div>
    </>
  );
};

export default CourseDescription;
