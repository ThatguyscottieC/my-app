import { useState } from "react";

export const MyTunes = () => {
  const [step, setStep] = useState(0);

  function renderStep(step) {
    const formSteps = [
      <div className="display">
        <img className="project" alt="Homepage" src="/photos/mytunesH.png" />
      </div>,

      <div className="display">
        <img className="project" alt="Beyonce" src="/photos/mytunesB.png" />
      </div>,

      <div className="display">
        <img className="project" alt="Mac" src="/photos/mytunesM.png" />
      </div>,

      <div className="display">
        <img className="project" alt="Mac" src="/photos/Itunes_AG.png" />
      </div>,
    ];
    return step < formSteps.length ? formSteps[step] : null;
  }
  const next = (event) => {
    event.preventDefault();
    if (step >= 3) {
      setStep(0);
    } else {
      setStep(step + 1);
    }
  };
  return (
    <div className="description">
      <div className="no-margin">
        <h3> Project: Mytunes</h3>
        <h4> Front End Developer</h4>
        <p>
          Description: This is the first time working with API, bringing in JSON
          from the Itunes API and using Javascript to build the HTML. For this
          project I gave myself I time limit on how long I had to work on it, to
          simulate real world work environments. I had early ideas about how I
          wanted it to look especially in the nav bar but turned my attention to
          how I wanted the albums to be layed out. I stretched my talents with
          the album cover and the album cover background as well. I believe that
          I captured the vision I was going for with this project.
        </p>
        <p className=" m-5">
          {" "}
          Skills: HTML5, , Javascript, JSON, API, CSS, Git
        </p>
      </div>

      <div onClick={next}>{renderStep(step)}</div>
    </div>
  );
};
