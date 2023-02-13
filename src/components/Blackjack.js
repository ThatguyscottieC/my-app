import { useState } from "react";

export const Blackjack = () => {
  const [step, setStep] = useState(0);

  function renderStep(step) {
    const formSteps = [
      <div className="display">
        <img className="project" alt="BJ" src="/photos/blackjack1.png" />
      </div>,

      <div className="display">
        <img className="project" alt="Stock" src="/photos/blackjack2.png" />
      </div>,
    ];
    return step < formSteps.length ? formSteps[step] : null;
  }
  const next = (event) => {
    event.preventDefault();
    if (step >= 1) {
      setStep(0);
    } else {
      setStep(step + 1);
    }
  };
  const prev = (event) => {
    event.preventDefault();
    if (step <= 0) {
      setStep(1);
    } else {
      setStep(step - 1);
    }
  };
  return (
    <div className="description">
      <div className="no-margin">
        <h3> Project: Blackjack</h3>
        <h4> Python Developer</h4>
      </div>
      <div className="bottom">
        <p>
          Description: This is the project that I worked on to learn python. In
          this project, I wanted to stretch my legs and push the limits and to
          do that I even added a betting system to the game. This project is why
          I love working in python!
        </p>
      </div>
      <div className="bottom">
        <p> Skills: Python, Git</p>
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
