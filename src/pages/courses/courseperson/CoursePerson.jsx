import "./courseperson.scss";
import PersonCard from "./PersonCard";
import { professional, student, freelancer1 } from "../../../assets/icons";

const CoursePerson = () => {
  return (
    <div className="course-person">
      <div className="course-person-head">
        <h1>Who should takes this course</h1>
      </div>
      <div className="course-person-card">
        <PersonCard
          img={student}
          name="Student"
          info="Law students passionate about deepening their understanding of legal principles and honing their skills for a successful legal career should take this course."
        />
        <PersonCard
          img={professional}
          name="Professional"
          info="Professionals seeking to strengthen their legal acumen and advance their career in the legal field should take this course."
        />
        <PersonCard
          img={freelancer1}
          name="Freelancer"
          info="Freelancers aiming to navigate legal complexities and protect their business interests should take this course."
        />
      </div>
    </div>
  );
};

export default CoursePerson;
