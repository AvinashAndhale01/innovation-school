import { getAllCourses } from "../../../api/course";
import Card from "../../../components/customCard/Card";
import { courses } from "../../../utils/data";
import "./courses.scss";
import { useEffect, useState } from "react";

const Courses = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    getAllCourses().then((val) => {
      setCourse(val.courses);
      console.log(val);
    });
  }, []);
  return (
    <>
      <section id="course" className="courses">
        <h1 className="course-heading">
          Co<span style={{ color: "#17a2b8" }}>urs</span>es
        </h1>
        <section className="card-section">
          {course?.map((course) => (
            <Card courses={course} key={course.courseid} />
          ))}
        </section>
       
      </section>
    </>
  );
};

export default Courses;
