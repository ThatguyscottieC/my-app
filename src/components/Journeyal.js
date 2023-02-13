import { useState } from "react";

export const Journeyal = () => {
  const [step, setStep] = useState(0);

  function renderStep(step) {
    const formSteps = [
      <div className="display">
        <img className="Jproject" alt="Homepage" src="/photos/Homepage.PNG" />
      </div>,

      <div className="display">
        <img className="Jproject" alt="Stock" src="/photos/Users.PNG" />
      </div>,

      <div className="display">
        <img className="Jproject" alt="Footer" src="/photos/Cal.PNG" />
      </div>,
      <div className="display">
        <img className="Jproject" alt="Footer" src="/photos/Post.PNG" />
      </div>,
      <div className="display">
        <img className="Jproject" alt="Footer" src="/photos/Day.PNG" />
      </div>,
      <div className="display">
        <img className="Jproject" alt="Footer" src="/photos/Search.PNG" />
      </div>,
    ];
    return step < formSteps.length ? formSteps[step] : null;
  }
  const next = (event) => {
    event.preventDefault();
    if (step >= 4) {
      setStep(0);
    } else {
      setStep(step + 1);
    }
  };
  const prev = (event) => {
    event.preventDefault();
    if (step <= 0) {
      setStep(4);
    } else {
      setStep(step - 1);
    }
  };
  return (
    <div className="description">
      <div className="no-margin">
        <h3> Project: Journeyal</h3>
        <h4> Backend Developer</h4>
        <p>
          Description: This is a real world ready to use project that I
          partnered on with 3 other Developers in my program. We wanted to build
          an ready to go application and that is exactly what we made. This is a
          usable product ready for day to day use. For this project we use an
          Agile work environment with about 5 different sprints, as well as
          updates using Trello. The purpose of the APP is to be able to document
          events in your everyday life to have and comeback to, with the ability
          to save pictures and add your own customized tags.
        </p>
        <p> Skills: Django, Python, Trello, Postgres, SQL, Teamwork, Git</p>
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
