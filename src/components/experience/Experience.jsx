import React from "react";
import "./experience.css";
import { ImCloudCheck } from "react-icons/im";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {/* Frontend Starter */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <ImCloudCheck className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <ImCloudCheck className="experience__details-icon" />
              <div>
                {" "}
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <ImCloudCheck className="experience__details-icon" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <ImCloudCheck className="experience__details-icon" />
              <div>
                <h4>TAILWIND</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <ImCloudCheck className="experience__details-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <ImCloudCheck className="experience__details-icon" />
              <div>
                <h4>REACT JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend Starter  */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <ImCloudCheck className="experience__details-icon" />
              <div>
                <h4>C#</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <ImCloudCheck className="experience__details-icon" />
              <div>
                <h4>.NET</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <ImCloudCheck className="experience__details-icon" />
              <div>
                <h4>ADO.NET</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <ImCloudCheck className="experience__details-icon" />
              <div>
                <h4>ENTITY FRAMEWORK</h4>
                <small className="text-light">BASIC</small>
              </div>
            </article>
            <article className="experience__details">
              <ImCloudCheck className="experience__details-icon" />
              <div>
                {" "}
                <h4>MS SQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <ImCloudCheck className="experience__details-icon" />
              <div>
                <h4>OOP</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
