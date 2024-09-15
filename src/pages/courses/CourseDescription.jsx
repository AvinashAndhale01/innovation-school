import { useEffect, useRef, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd"; // Ensure Spin is imported
import { getCourseById } from "../../api/course";
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
  const [courseDetail, setCourseDetail] = useState(null);
  const [courseId, setCourseId] = useState(id || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    if (courseId !== null) {
      setLoading(true);
      getCourseById({ id: courseId })
        .then((val) => {
          setCourseDetail(val.course);
          console.log(val);
        })
        .catch((err) => {
          setError(err.message); // Handle error
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [courseId]);

  const featureRef = useRef(null);
  const curriculumRef = useRef(null);
  const mentorRef = useRef(null);

  const scrollToFeature = useCallback(() => {
    featureRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollToCurriculum = useCallback(() => {
    curriculumRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollToMentor = useCallback(() => {
    mentorRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  if (loading) {
    return (
      <div style={{ height: "90vh", display: "grid", placeContent: "center" }}>
        <Spin spinning={loading} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error if any
  }

  return (
    <div>
      <EnrollNow courseDetail={courseDetail} />
      <Header
        onFeatureClick={scrollToFeature}
        onCurriculumClick={scrollToCurriculum}
        onMentorClick={scrollToMentor}
      />
      <CourseHero courseInfor={courseDetail} />
      <CourseAbout courseInfor={courseDetail} />
      <KeyFeature ref={featureRef} />
      <Mentor courseInfor={courseDetail?.guide} ref={mentorRef} />
      <Curriculam
        courseInfor={courseDetail?.curriculum}
        ref={curriculumRef}
      />
      <CoursePerson />
    </div>
  );
};

export default CourseDescription;
