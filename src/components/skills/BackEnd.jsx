import React from "react";

const BackEnd = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Development</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-nodejs skill__icon"></i>
            <div>
              <h3 className="skills__name">Node</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-python skill__icon"></i>
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-table skill__icon"></i>
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-mongodb skill__icon"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-code-block skill__icon"></i>
            <div>
              <h3 className="skills__name">Express</h3>
              <span className="skill__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-java skill__icon"></i>
            <div>
              <h3 className="skills__name">Java</h3>
              <span className="skill__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
