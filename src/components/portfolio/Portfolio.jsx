import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Customer.png";
import IMG2 from "../../assets/resumeAuto.png";
import IMG3 from "../../assets/plmerger.png";
import IMG4 from "../../assets/vendor.png";
import IMG5 from "../../assets/dashboard.png";
import IMG6 from "../../assets/research.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Customer Segmentation",
    github: "https://github.com/insshubh/Customer-Segmentation.git",
    demo: "https://github.com/insshubh/Customer-Segmentation/blob/main/CustomerSegmentation.ipynb",
    brief:
      "https://github.com/insshubh/Customer-Segmentation/blob/main/README.md",
  },
  {
    id: 2,
    image: IMG2,
    title: "Resume Automation",
    github: "https://github.com/insshubh/ResumeAutomation.git",
    demo: "https://youtu.be/HMUDxB246uw",
    brief:
      "https://github.com/insshubh/ResumeAutomation/blob/main/README.md",
  },
  {
    id: 3,
    image: IMG3,
    title: "Playlist Merger",
    github: "https://github.com/insshubh/PlaylistMerger.git",
    demo: "https://github.com/insshubh/PlaylistMerger/blob/main/Ytmerger.ipynb",
    brief:
      "https://github.com/insshubh/PlaylistMerger/blob/main/README.md",
  },
  {
    id: 4,
    image: IMG4,
    title: "Vendor-Sales-Analysis",
    github: "https://github.com/insshubh/Vendor-Sales-Analysis.git",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7220463319327907841/",
    brief: "https://github.com/insshubh/Vendor-Sales-Analysis/blob/main/README.md",
  },
  {
    id: 5,
    image: IMG5,
    title: "Coffee-Shop-Sales-Analysis",
    github: "https://github.com/insshubh/Coffee-Shop-Sales-Analysis.git",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7219945028545069056/",
    brief: "https://github.com/insshubh/Coffee-Shop-Sales-Analysis/blob/main/README.md",
  },
  {
    id: 6,
    image: IMG6,
    title: "Research_PaperAnalyzer",
    github: "https://github.com/insshubh/Research_PaperAnalyzer.git",
    demo: "https://github.com/insshubh/Research_PaperAnalyzer/blob/main/chatbot_r%26danalyzer.ipynb",
    brief: "https://github.com/insshubh/Research_PaperAnalyzer/blob/main/README.md",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My most recent work can be found on YouTube</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, brief }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={brief} className="btn">
                  Project Brief
                </a>
              </div>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary">
                  Demo
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
