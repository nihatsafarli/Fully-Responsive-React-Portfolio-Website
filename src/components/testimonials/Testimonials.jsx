import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";


const data = [
  {
    avatar: AVTR1,
    name: "Milena Safarli",
    review: "Hizmetlerinden çok memnun kaldık",
  },
  {
    avatar: AVTR2,
    name: "Mateo Safarli",
    review: "Ben çok memnun kaldım",
  },
  {
    avatar: AVTR3,
    name: "Chris Safarli",
    review: "Sistem çok güzel kurulmuş",
  },
  {
    avatar: AVTR4,
    name: "Alvina Safarli",
    review: "Her şey çox güzeldi",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>{" "}
      <div
        className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar 1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
