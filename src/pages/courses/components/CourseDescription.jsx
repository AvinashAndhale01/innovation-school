import { useState } from "react";
import { useParams } from "react-router-dom";
import { courseInfo } from "../../../utils/data";

const CourseDescription = () => {
  const { id } = useParams();
  const [courseDetail, setCourseDetail] = useState(courseInfo);
  return <div></div>;
};

export default CourseDescription;
