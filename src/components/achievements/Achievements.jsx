import React, { useState } from "react";
import "./achievements.css";

const Achievements = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="achivements section" id="achievements">
      <h2 className="section__title">What I Offer</h2>
      <span className="section__subtitle">Services</span>
      <div className="achievements__container container grid">
        <div className="achievements__content">
          <div>
            <i className="uil uil-window services__icon"></i>
            <h3 className="achievements__title">
              Full-Stack
              <br />
              Web Development
            </h3>
          </div>
          <span
            className="achievements__button"
            onClick={() => {
              toggleTab(1);
            }}
          >
            View More
            <i className="uil uil-arrow-right achievements__button-icon"></i>
          </span>
          <div
            className={
              toggleState == 1
                ? "achievements__modal active-modal"
                : "achievements__modal"
            }
          >
            <div className="achievements__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times achievements__modal-close"
              ></i>
              <h3 className="achievements__modal-title">
                Full-Stack Web Development
              </h3>
              <p className="achievements__modal-description">
                Developer proficient in both front-end and back-end technologies
              </p>
              <ul className="achievements__modal-achievement grid">
                <li className="achievements__modal-achievements">
                  <i className="uil uil-check-circle achievements__modal-icon"></i>
                  <p className="achievements__modal-info">
                    Custom Web Application Development
                  </p>
                </li>

                <li className="achievements__modal-achievements">
                  <i className="uil uil-check-circle achievements__modal-icon"></i>
                  <p className="achievements__modal-info">
                    E-Commerce Solutions
                  </p>
                </li>

                <li className="achievements__modal-achievements">
                  <i className="uil uil-check-circle achievements__modal-icon"></i>
                  <p className="achievements__modal-info">
                    Content Management Systems (CMS)
                  </p>
                </li>

                <li className="achievements__modal-achievements">
                  <i className="uil uil-check-circle achievements__modal-icon"></i>
                  <p className="achievements__modal-info">
                    Single Page Applications (SPA)
                  </p>
                </li>

                <li className="achievements__modal-achievements">
                  <i className="uil uil-check-circle achievements__modal-icon"></i>
                  <p className="achievements__modal-info">
                    Web Performance Optimization
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="achievements__content">
          <div>
            <i className="uil uil-robot services__icon"></i>
            <h3 className="achievements__title">
              Machine <br />
              Learning
            </h3>
          </div>
          <span
            className="achievements__button"
            onClick={() => {
              toggleTab(2);
            }}
          >
            View More
            <i className="uil uil-arrow-right achievements__button-icon"></i>
          </span>
          <div
            className={
              toggleState == 2
                ? "achievements__modal active-modal"
                : "achievements__modal"
            }
          >
            <div className="achievements__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times achievements__modal-close"
              ></i>
              <h3 className="achievements__modal-title">Machine Learning</h3>
              <p className="achievements__modal-description">
                Expert in building and deploying intelligent data-driven models
              </p>
              <ul className="achievements__modal-achievement grid">
                <li className="achievements__modal-achievements">
                  <i className="uil uil-check-circle achievements__modal-icon"></i>
                  <p className="achievements__modal-info">
                    Data Analysis and Visualization
                  </p>
                </li>

                <li className="achievements__modal-achievements">
                  <i className="uil uil-check-circle achievements__modal-icon"></i>
                  <p className="achievements__modal-info">
                    Predictive Modeling
                  </p>
                </li>

                <li className="achievements__modal-achievements">
                  <i className="uil uil-check-circle achievements__modal-icon"></i>
                  <p className="achievements__modal-info">
                    Natural Language Processing (NLP)
                  </p>
                </li>

                <li className="achievements__modal-achievements">
                  <i className="uil uil-check-circle achievements__modal-icon"></i>
                  <p className="achievements__modal-info">Computer Vision</p>
                </li>

                <li className="achievements__modal-achievements">
                  <i className="uil uil-check-circle achievements__modal-icon"></i>
                  <p className="achievements__modal-info">Sentiment Analysis</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="achievements__content">
          <div>
            <i className="uil uil-code-branch services__icon"></i>
            <h3 className="achievements__title">
              DevOps
              <br />
              Automation
            </h3>
          </div>
          <span
            className="achievements__button"
            onClick={() => {
              toggleTab(3);
            }}
          >
            View More
            <i className="uil uil-arrow-right achievements__button-icon"></i>
          </span>
          <div
            className={
              toggleState == 3
                ? "achievements__modal active-modal"
                : "achievements__modal"
            }
          >
            <div className="achievements__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times achievements__modal-close"
              ></i>
              <h3 className="achievements__modal-title">
                DevOps and Automation
              </h3>
              <p className="achievements__modal-description">
                Specialist in streamlining deployment through automation and
                continuous integration
              </p>
              <ul className="achievements__modal-achievement grid">
                <li className="achievements__modal-achievements">
                  <i className="uil uil-check-circle achievements__modal-icon"></i>
                  <p className="achievements__modal-info">
                    Continuous Integration/Continuous Deployment
                  </p>
                </li>

                <li className="achievements__modal-achievements">
                  <i className="uil uil-check-circle achievements__modal-icon"></i>
                  <p className="achievements__modal-info">
                    Cloud Infrastructure
                  </p>
                </li>

                <li className="achievements__modal-achievements">
                  <i className="uil uil-check-circle achievements__modal-icon"></i>
                  <p className="achievements__modal-info">Automated Testing</p>
                </li>

                <li className="achievements__modal-achievements">
                  <i className="uil uil-check-circle achievements__modal-icon"></i>
                  <p className="achievements__modal-info">Quality Assurance</p>
                </li>

                <li className="achievements__modal-achievements">
                  <i className="uil uil-check-circle achievements__modal-icon"></i>
                  <p className="achievements__modal-info">Version Control</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
