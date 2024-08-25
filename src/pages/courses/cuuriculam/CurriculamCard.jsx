import React, { useState } from "react";
import "./curriculamcard.scss";
import { modules, arrow } from "../../../assets/icons";

const CurriculamCard = ({ module }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="curriculam-card-main">
      <div className="curriculam-head">
        <div className="curriculam-card">
          <div className="c-img">
            <img src={modules} alt="module-img" />
          </div>
          <div className="c-module">
            <p>
              Module {module.Module}: {module.Name}
            </p>
          </div>
          <div
            className={`down-arrow ${isDescriptionVisible ? "rotate" : ""}`}
            onClick={toggleDescription}
          >
            <div className="arrow-img">
              <img src={arrow} alt="arrow-img" />
            </div>
          </div>
        </div>
        <div className={`curriculam-des ${isDescriptionVisible ? "show" : ""}`}>
          <p>{module.Description}</p>
        </div>
      </div>
    </div>
  );
};

export default CurriculamCard;
