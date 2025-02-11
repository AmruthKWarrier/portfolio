import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Amruth</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="mailto:amruthkwarrier@gmail.com"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-envelope-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/amruth-warrier-037a63227/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/AmruthKWarrier"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Amruth K Warrier. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
