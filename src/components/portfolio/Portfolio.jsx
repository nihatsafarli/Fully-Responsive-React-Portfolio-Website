import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project 1",
    github: "https://github.com/nihatsafarli",
    demo: "https://app.netlify.com/teams/safarlinihat/overview",
  },
  {
    id: 2,
    image: IMG2,
    title: "Project 2",
    github: "https://github.com/nihatsafarli",
    demo: "https://app.netlify.com/teams/safarlinihat/overview",
  },
  {
    id: 3,
    image: IMG3,
    title: "Project 3",
    github: "https://github.com/nihatsafarli",
    demo: "https://app.netlify.com/teams/safarlinihat/overview",
  },
  {
    id: 4,
    image: IMG4,
    title: "Project 4",
    github: "https://github.com/nihatsafarli",
    demo: "https://app.netlify.com/teams/safarlinihat/overview",
  },
  {
    id: 5,
    image: IMG5,
    title: "Project 5",
    github: "https://github.com/nihatsafarli",
    demo: "https://app.netlify.com/teams/safarlinihat/overview",
  },
  {
    id: 6,
    image: IMG6,
    title: "Project 6",
    github: "https://github.com/nihatsafarli",
    demo: "https://app.netlify.com/teams/safarlinihat/overview",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target={"_blank"} className="btn">
                  Github
                </a>
                <a href={demo} target={"_blank"} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
