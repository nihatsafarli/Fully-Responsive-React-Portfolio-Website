import React from "react";
import "./contact.css";
import { MdAlternateEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_u1k4w9y",
      "template_ybqllum",
      form.current,
      "M1GN632Y2GtRQnXhs"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdAlternateEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>safarlinihat@gmail.com</h5>
            <a href="mailto:safarlinihat@gmail.com" target={"_blank"}>Send a Message</a>
          </article>
          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+905358979477</h5>
            <a href="https://api.whatsapp.com/send?phone=905358979477" target={"_blank"}>
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Nihat Safarli</h5>
            <a href="https://m.me/nihatshahinoglu" target={"_blank"}>Send a Message</a>
          </article>
         
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
