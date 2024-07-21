import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";

const Contact = () => {
  const [emailIsSent, setEmailIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailIsSent(true);
        },
        (error) => {
          console.error("Failed to send email: ", error.text);
          setErrorMessage("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h5>Shubham Kumar</h5>
            <a href="https://www.linkedin.com/in/insshubh/"><button className="btn btn-primary">Let Connect</button></a>


          </article>
        </div>
        {emailIsSent ? (
          <h2 id="Contact__sent-message">Your Message was successfully sent!</h2>
        ) : (
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;
