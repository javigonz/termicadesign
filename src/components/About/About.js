import React from "react";
import "./About.css";
import fotoJaviGonz from "../../images/fotoJaviGonz.png";

function About() {
  return (
    <div className="main-content_about">
      <div className="main-content_me">
        <h1>
          Hi,
          <br />
          I´m Javier González
          <br />
          JS <a className="highlight">developer</a>
        </h1>
        <div className="main-content_specialized">
          <p>
            I’m a FrontEnd Developer based in Spain (Málaga). A
            <b> passionate software developer</b>, expert in Javascript and
            latest web technology. Specialized in drawing and polishing FrontEnd
            architectures (with or without framework).
            <br /> I´ve got experience working with agile methodologies and full
            remote teams. I love working with teams that can inspire me or
            provide solutions to any problem or challenge. I constantly need to
            know about the latest technologies.
          </p>
          <p>
            Enthusiastic about outdoor sports, especially cycling and any
            activity in the sea. At home, I can&apos;t stop watching series or
            horror movies, reading autobiographical books and visiting any art
            gallery that exhibits impressionist paintings.
          </p>
        </div>
        <div className="main-content_skillsdetails">
          <div className="chart">
            <span>React / React native</span>
            <footer>
              <div data-width="90%" style={{ width: "95%" }}></div>
            </footer>
          </div>
          <div className="chart">
            <span>Next.js</span>
            <footer>
              <div data-width="90%" style={{ width: "75%" }}></div>
            </footer>
          </div>
          <div className="chart">
            <span>Jest / Testing-library / Cypress</span>
            <footer>
              <div data-width="90%" style={{ width: "85%" }}></div>
            </footer>
          </div>
          <div className="chart">
            <span>NodeJs</span>
            <footer>
              <div data-width="90%" style={{ width: "20%" }}></div>
            </footer>
          </div>
          <div className="chart">
            <span>AWS / Serveless</span>
            <footer>
              <div data-width="90%" style={{ width: "50%" }}></div>
            </footer>
          </div>
        </div>
      </div>
      <div className="main-content-skills">
        <div className="card-container">
          <span className="pro">JS developer</span>
          <img className="round" src={fotoJaviGonz} alt="user" />
          <h3>Javier González</h3>
          <h6>Málaga (Spain)</h6>
          <h5>Computer Engineering Degree</h5>
          <br />
          <div className="description">
            <p>
              <b>+15 years</b> of experience <br />
              in create full dinamic Web / Mobile content <br />
              in Javascript / HTML / CSS and integration with RESTful APIs
              <br />
              <br />
              Taking care about UI/UX, automated testing and performance. Full
              stack SW development knowledge <br />
              <br /> Focus in CI/CD and Cloud computing
            </p>
          </div>
          <div className="skills">
            <h6>Skills</h6>
            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>React / React Native</li>
              <li>Redux</li>
              <li>Angular</li>
              <li>Node</li>
              <li>Next.js</li>
              <li>AWS</li>
              <li>Serverless</li>
              <li>Adobe suit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
