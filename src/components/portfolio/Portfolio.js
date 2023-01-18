import React from "react";
import "./Portfolio.css";
import IMG from "../../assets/projectPagination.png";
import IMG1 from "../../assets/projectHackerNews.png";
import IMG2 from "../../assets/cartFunctionality.png";

const data = [
  {
    id: 1,
    image: IMG,
    title: "Client Side Pagination",
    github: "https://github.com/AmanKunda09/pagination",
    demo: "https://pagination-client-side.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Cart Functionality",
    github: "https://github.com/AmanKunda09/Cart-Functionality",
    demo: "https://cart-functionality.vercel.app/",
  },
  {
    id: 3,
    image: IMG1,
    title: "Hacker News",
    github: "http://github.com",
    demo: "https://hacker-news-algolia-ivory.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
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
