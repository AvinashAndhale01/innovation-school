import { useState } from "react";
import "./addnewcourse.scss";

const AddNewCourse = () => {
  const [numberOfGuides, setNumberOfGuides] = useState(0);
  const [numberOfModules, setNumberOfModules] = useState(0);
  const [guides, setGuides] = useState([]);
  const [modules, setModules] = useState([]);

  const handleAddGuides = () => {
    const newGuides = Array.from({ length: numberOfGuides }, () => ({
      name: "",
      image: null,
      linkedin: "",
      about: "",
    }));
    setGuides(newGuides);
  };

  const handleAddModules = () => {
    const newModules = Array.from({ length: numberOfModules }, () => ({
      moduleNumber: "",
      moduleName: "",
      moduleDescription: "",
    }));
    setModules(newModules);
  };

  return (
    <div className="addnewcourse">
      <h2>New Course</h2>
      <form className="new-course-form">
        <div className="new-course-editor">
          <label>Course Title:</label>
          <input type="text" name="title" id="title" />

          <label>About:</label>
          <input type="text" name="about" id="about" />

          <label>Course Image:</label>
          <input type="file" name="image" id="image" />

          <label>Price:</label>
          <input type="number" name="price" id="price" />

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
                name={`guideName${index}`}
                id={`guideName${index}`}
              />

              <label>Guide Image {index + 1}:</label>
              <input
                type="file"
                name={`guideImage${index}`}
                id={`guideImage${index}`}
                className="guide-image"
              />

              <label>Guide Linkedin Id {index + 1}:</label>
              <input
                type="text"
                name={`guideLinkedin${index}`}
                id={`guideLinkedin${index}`}
                className="guide-linkedin"
              />

              <label>About Guide {index + 1}:</label>
              <input
                type="text"
                name={`guideAbout${index}`}
                id={`guideAbout${index}`}
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
                name={`moduleNumber${index}`}
                id={`moduleNumber${index}`}
              />

              <label>Module Name {index + 1}:</label>
              <input
                type="text"
                name={`moduleName${index}`}
                id={`moduleName${index}`}
              />

              <label>Module Description {index + 1}:</label>
              <input
                type="text"
                name={`moduleDescription${index}`}
                id={`moduleDescription${index}`}
              />
            </div>
          ))}
        </div>
        <div className="submit-data-btn">
          <button>Create New Course</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewCourse;
