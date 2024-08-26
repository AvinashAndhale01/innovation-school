import { useRef, useState } from "react";
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
import EnrollNow from "./price/EnrollNow";

const CourseDescription = () => {
  const { id } = useParams();
  const [courseDetail, setCourseDetail] = useState(courseInfo);

  const featureRef = useRef(null);
  const curriculumRef = useRef(null);
  const mentorRef = useRef(null);

  const scrollToFeature = () =>
    featureRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToCurriculum = () =>
    curriculumRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToMentor = () =>
    mentorRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <div>
        <EnrollNow />
        <Header
          onFeatureClick={scrollToFeature}
          onCurriculumClick={scrollToCurriculum}
          onMentorClick={scrollToMentor}
        />
        <CourseHero courseInfor={courseDetail} />
        <CourseAbout courseInfor={courseDetail} />
        <KeyFeature ref={featureRef} />
        <Mentor courseInfor={courseDetail.Guide} ref={mentorRef} />
        <Curriculam courseInfor={courseDetail.Curriculum} ref={curriculumRef} />
        <CoursePerson />
      </div>
    </>
  );
};

export default CourseDescription;
