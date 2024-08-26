import Card from "../../../components/customCard/Card";
import { courses } from "../../../utils/data";
import "./courses.scss";
import { useState } from "react";

const Courses = () => {
  const [course, setCourse] = useState(courses);
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
