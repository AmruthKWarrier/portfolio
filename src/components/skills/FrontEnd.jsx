import React from "react";

const FrontEnd = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Development</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-html5 skill__icon"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skill__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-css3 skill__icon"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-javascript skill__icon"></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skill__level">Advanced</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-tailwind-css skill__icon"></i>
            <div>
              <h3 className="skills__name">Tailwind</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-react skill__icon"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-angular skill__icon"></i>
            <div>
              <h3 className="skills__name">Angular</h3>
              <span className="skill__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
