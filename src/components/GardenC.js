import { useState } from "react";
import { motion } from "framer-motion";

export const GardenC = () => {
  const [step, setStep] = useState(0);

  function renderStep(step) {
    const formSteps = [
      <div className="display">
        <img className="project" alt="Homepage" src="/photos/gardenhome.png" />
      </div>,

      <div className="display">
        <img className="project" alt="Stock" src="/photos/garden_stock.png" />
      </div>,

      <div className="display">
        <img className="project" alt="Footer" src="/photos/garden_footer.png" />
      </div>,
    ];
    return step < formSteps.length ? formSteps[step] : null;
  }
  const next = (event) => {
    event.preventDefault();
    if (step >= 2) {
      setStep(0);
    } else {
      setStep(step + 1);
    }
  };
  const prev = (event) => {
    event.preventDefault();
    if (step <= 0) {
      setStep(2);
    } else {
      setStep(step - 1);
    }
  };
  return (
    <div className="description">
      <div className="no-margin">
        <h3> Project: Garden Website</h3>
        <h4> Front Developer</h4>
        <p>Description: My first website testing the basics of HTML and CSS.</p>
        <p> Skills: HTML5, CSS, Git</p>
      </div>

      <div className="Steps">
        {renderStep(step)}
        <div className="carousel">
          <button className="carousel-button prev" onClick={prev}>
            ⇠
          </button>
          <button className="carousel-button next" onClick={next}>
            ⇢
          </button>
        </div>
      </div>
    </div>
  );
};
