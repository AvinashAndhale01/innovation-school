import { useEffect, useState } from "react";
import { fileUpload } from "../../api/upload";
import "./addnewcourse.scss";
import { createCourse, getCourseById, updateCourseById } from "../../api/course";
import { useNavigate, useParams } from "react-router-dom";

const AddNewCourse = () => {

  const {id} = useParams()
  const [isEdit, setIsEdit] = useState(id)
  const navigate = useNavigate()

  const initReqBody = {
    title: "",
    about: "",
    img: "",
    price: "",
    guide: [],
    curriculum: []
  };

  const [numberOfGuides, setNumberOfGuides] = useState(0);
  const [numberOfModules, setNumberOfModules] = useState(0);
  const [reqBody, setReqBody] = useState(initReqBody);
  const [guides, setGuides] = useState([]);
  const [modules, setModules] = useState([]);

  useEffect(()=>{
    if (isEdit){
      getCourseById({ id: isEdit }).then((val) => {
        setReqBody(val.course);
        setGuides(val.course.guide);
        setModules(val.course.curriculum);
        console.log(val);
      });
    }
  },[isEdit])

  const handleAddGuides = () => {
    const newGuides = Array.from({ length: numberOfGuides }, () => ({
      name: "",
      img: "",
      identity: ""
    }));
    setGuides(newGuides);
  };

  const handleAddModules = () => {
    const newModules = Array.from({ length: numberOfModules }, () => ({
      module: "",
      name: "",
      description: ""
    }));
    setModules(newModules);
  };

  const handleChange = (name, value) => setReqBody({ ...reqBody, [name]: value });

  const handleGuideChange = (index, name, value) => {
    const updatedGuides = [...guides];
    updatedGuides[index] = { ...updatedGuides[index], [name]: value };
    setGuides(updatedGuides);
  };

  const handleModuleChange = (index, name, value) => {
    const updatedModules = [...modules];
    updatedModules[index] = { ...updatedModules[index], [name]: value };
    setModules(updatedModules);
  };

  const handleImageUpload = async (name, file, index = null) => {
    try {
      const result = await fileUpload({ file });
      const imageUrl = result.success ? result.imageUrl : "https://picsum.photos/300/200";
      if (name.startsWith("guideImage")) {
        const guideIndex = parseInt(name.replace("guideImage", ""), 10);
        handleGuideChange(guideIndex, "img", imageUrl);
      } else if (name.startsWith("moduleImage")) {
        const moduleIndex = parseInt(name.replace("moduleImage", ""), 10);
        handleModuleChange(moduleIndex, "img", imageUrl);
      } else {
        handleChange(name, imageUrl);
      }
    } catch (error) {
      console.error("Image upload failed", error);
      const imageUrl = "https://picsum.photos/300/200";
      if (name.startsWith("guideImage")) {
        const guideIndex = parseInt(name.replace("guideImage", ""), 10);
        handleGuideChange(guideIndex, "img", imageUrl);
      } else if (name.startsWith("moduleImage")) {
        const moduleIndex = parseInt(name.replace("moduleImage", ""), 10);
        handleModuleChange(moduleIndex, "img", imageUrl);
      } else {
        handleChange(name, imageUrl);
      }
    }
  };

  const handleCourseCreation = () => {
    for (const key in reqBody) {
      if (reqBody[key] === "" && key !== "guide" && key !== "curriculum") {
        alert(`Please fill in ${key}`);
        return;
      }
    }
    
    if (guides.some(({ name, img, identity }) => !name || !img || !identity)) {
      alert("Please fill in all guide details.");
      return;
    }

    if (modules.some(({ module, name, description }) => !module || !name || !description)) {
      alert("Please fill in all module details.");
      return;
    }

    const finalGuides = guides.map(guide => ({
      ...guide,
      img: guide.img || "https://picsum.photos/300/200",
    }));

    const finalReqBody = { ...reqBody, img: reqBody.img || "https://picsum.photos/300/200", guide: finalGuides, curriculum: modules };

    if(isEdit){
      updateCourseById({
        id:isEdit,
        payload:finalReqBody
      }).then(val => {
        console.log(val);
        navigate(-1)
      });

    }else{
      createCourse(finalReqBody).then(val => {
        console.log(val);
        navigate(-1)
      });
    }
   
  };

  return (
    <div className="addnewcourse">
      <h2>{isEdit ? "Edit Course" : "New Course"}</h2>
      <form className="new-course-form">
        <div className="new-course-editor">
          <label>Course Title:</label>
          <input
            type="text"
            value={reqBody.title}
            onChange={(e) => handleChange("title", e.target.value)}
            id="title"
          />

          <label>About:</label>
          <input
            type="text"
            value={reqBody.about}
            onChange={(e) => handleChange("about", e.target.value)}
            id="about"
          />

          <label>Course Image:</label>
          <input
            type="file"
            onChange={(e) => handleImageUpload("img", e.target.files[0])}
            id="image"
            accept=".jpg,.png"
          />

          <label>Price:</label>
          <input
            type="number"
            value={reqBody.price}
            onChange={(e) => handleChange("price", e.target.value)}
            id="price"
          />

          <label>Number of Guides:</label>
          <input
            type="number"
            name="numberOfGuides"
            id="numberOfGuides"
            value={numberOfGuides}
            onChange={(e) => setNumberOfGuides(parseInt(e.target.value, 10))}
          />
          <button
            className="add-number"
            type="button"
            onClick={handleAddGuides}
          >
            Add Guides
          </button>

          {guides.map((guide, index) => (
            <div key={index} className="guide numberof-input">
              <label>Guide Name {index + 1}:</label>
              <input
                type="text"
                value={guide.name}
                onChange={(e) => handleGuideChange(index, "name", e.target.value)}
                id={`guideName${index}`}
              />

              <label>Guide Image {index + 1}:</label>
              <input
                type="file"
                onChange={(e) => handleImageUpload(`guideImage${index}`, e.target.files[0], index)}
                className="guide-image"
              />

              <label>Guide Identity {index + 1}:</label>
              <input
                type="text"
                value={guide.identity}
                onChange={(e) => handleGuideChange(index, "identity", e.target.value)}
                id={`guideIdentity${index}`}
              />
            </div>
          ))}

          <label>Number of Curriculum Modules:</label>
          <input
            type="number"
            name="numberOfModules"
            id="numberOfModules"
            value={numberOfModules}
            onChange={(e) => setNumberOfModules(parseInt(e.target.value, 10))}
          />
          <button
            className="add-number"
            type="button"
            onClick={handleAddModules}
          >
            Add Curriculum Modules
          </button>

          {modules.map((module, index) => (
            <div key={index} className="curriculum numberof-input">
              <label>Module Number {index + 1}:</label>
              <input
                type="number"
                value={module.module}
                onChange={(e) => handleModuleChange(index, "module", e.target.value)}
                id={`moduleNumber${index}`}
              />

              <label>Module Name {index + 1}:</label>
              <input
                type="text"
                value={module.name}
                onChange={(e) => handleModuleChange(index, "name", e.target.value)}
                id={`moduleName${index}`}
              />

              <label>Module Description {index + 1}:</label>
              <input
                type="text"
                value={module.description}
                onChange={(e) => handleModuleChange(index, "description", e.target.value)}
                id={`moduleDescription${index}`}
              />
            </div>
          ))}
        </div>
        <div className="submit-data-btn">
          <button
            type="button"
            onClick={handleCourseCreation}
          >
            {isEdit ? "Edit" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewCourse;
