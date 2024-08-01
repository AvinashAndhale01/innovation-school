import Card from "../components/Card";
import "../styles/courses.scss";
import { lc1, lc2 } from "../assets/images";

const Courses = () => {
  return (
    <>
      <section id="course" className="courses">
        <h1 className="course-heading">Courses</h1>
        <section className="card-section">
          <Card lc={lc1} />
          <Card lc={lc2} />
          <Card lc={lc1} />
          <Card lc={lc2} />
          <Card lc={lc1} />
          <Card lc={lc2} />
        </section>
      </section>
    </>
  );
};

export default Courses;
