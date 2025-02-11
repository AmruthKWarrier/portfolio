import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9ix1t4n", "template_lwq1mu8", form.current, {
        publicKey: "QkrRH5XuT7cUA1PNK",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">Reach out to me</span>
      <div className="contact__container container">
        <div className="contact__content">
          <h3 className="contact__title">Ping Me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                amruthkwarrier@gmail.com
              </span>
              <a
                href="mailto:amruthkwarrier@gmail.com"
                className="contact__button"
              >
                Send{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-phone contact__card-icon"></i>
              <h3 className="contact__card-title">Phone</h3>
              <span className="contact__card-data">+91-9488200354</span>
              <a href="tel:+91-9488200354" className="contact__button">
                Send{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Send me you idea</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Enter your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Enter your Email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Idea</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Enter your project idea"
              ></textarea>
            </div>
            <button className="button button--flex">Contact Me</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
