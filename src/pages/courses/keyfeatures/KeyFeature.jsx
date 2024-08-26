import React from "react";
import FeatureCard from "./FeatureCard";
import "./keyfeature.scss";
import {
  internship,
  certificate,
  freelancer,
  play,
} from "../../../assets/icons";

const KeyFeature = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="feature-header">
      <div className="key-feature">
        <div className="feature-heading">
          <h2>Key Features</h2>
        </div>
        <div className="card-head">
          <div className="cards">
            <FeatureCard icon={play} text="Live and Recording Classes" />
            <FeatureCard icon={certificate} text="Certificate of Completion" />
            <FeatureCard
              icon={internship}
              text="Internship and Placement Opportunity"
            />
            <FeatureCard
              icon={freelancer}
              text="Guidance on building a Freelance Career"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

KeyFeature.displayName = "KeyFeature";

export default KeyFeature;
