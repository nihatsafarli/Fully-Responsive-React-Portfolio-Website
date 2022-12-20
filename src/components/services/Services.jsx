import React from "react";
import "./services.css";
import { BsJournalCheck } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsJournalCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                inventore.
              </p>
            </li>
            <li>
              <BsJournalCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                inventore.
              </p>
            </li>
            <li>
              <BsJournalCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                inventore.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsJournalCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                inventore.
              </p>
            </li>
            <li >
              <BsJournalCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                inventore.
              </p>
            </li>
            <li >
              <BsJournalCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                inventore.
              </p>
            </li>
            <li>
              <BsJournalCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                inventore.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>CONTENT CREATION</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsJournalCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                inventore.
              </p>
            </li>
            <li>
              <BsJournalCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                inventore.
              </p>
            </li>
            <li>
              <BsJournalCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                inventore.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
