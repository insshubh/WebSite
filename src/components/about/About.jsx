import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to learn</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="pic" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article class="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                1+ Years in <span className="special-text">Python Programming</span>
              </small>
              <br />
              <small>
                14,000+ LOC
              </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                Bachelor of Technology in Computer Science and Engineering.

              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                <span className="special-text">
                  10+ </span> Completed
                <br />
                and Counting
              </small>


            </article>
          </div>
          <p>
          I'm a Computer Science and Engineering student with a focus on Python development, data analytics, and problem-solving. During my internship, I've enhanced my skills in AI 🤖, data analysis, and streamlined user interactions with data scraping tools &#128797;. I've led projects like a Research Paper Analyzer &#128439;, a Financial Statistics Dashboard &#128164;, and Resume Automation demonstrating my ability to deliver efficient solutions.
          . With over 300 DSA problems solved on top coding platforms, I excel at crafting scalable code for complex challenges.
          </p>
          <p>
          <h3>Beyond coding:</h3> Traveling broadens my perspective, while sports like cricket, volleyball, etc. keep me fit and foster teamwork. My interest in world politics sharpens my critical thinking, and space exploration fuels my curiosity. This balance keeps me well-rounded and constantly growing.
          </p>
          
          <p></p>
          <a href="#contact" className="btn btnn-primary vanish-on-hover">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
