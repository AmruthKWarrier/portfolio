import React from "react";

const Info = () => {
  return (
    <div className="about__info">
      <div className="about__box">
        <i className="uil uil-book about__icon"></i>
        <h3 className="about__title">Who</h3>
        <span className="about__subtitle">Computer Science Enthusiast</span>
      </div>
      <div className="about__box">
        <i className="uil uil-bag about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">
          Intern at Fidelity, Samsung, and Reinvent.
        </span>
      </div>
      <div className="about__box">
        <i className="uil uil-brain about__icon"></i>
        <h3 className="about__title">Strengths</h3>
        <span className="about__subtitle">
          Embracing challenges and Constant learning.
        </span>
      </div>
    </div>
  );
};

export default Info;
