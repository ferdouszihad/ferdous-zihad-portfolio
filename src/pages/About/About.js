import React from "react";
import Title from "../shared/Title";

const About = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Title>About Me</Title>
      <div className="container">
        <div className="row g-5">
          <div className="col-md-5">
            <img
              src="https://ferdouszihad.github.io/fz-space/images/me1.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-7">
            <article>
              <p id="my-info">
                I am F M ZAHIDUL ISLAM.Age 25. A Fresh Graduate Software
                Engineer. I have recently completed my Bachelor's degree in{" "}
                <strong>Computer Science and Engineering</strong> from{" "}
                <strong>
                  Hajee Mohammad Danesh Science and Technology University.
                </strong>
              </p>
              <p>
                While achieving my Bachelor's degree at HSTU, I developed{" "}
                <strong>problem-solving skills</strong> ,{" "}
                <strong>web development skills</strong> , and{" "}
                <strong>teamwork abilities</strong> . With advanced knowledge of
                Web development technologies such as{" "}
                <strong>
                  JavaScript, React, API, MongoDB, Express, and Firebase,
                </strong>{" "}
                I have developed a lot of projects. Some of these have been
                mentioned on my resume.
              </p>
              <p>
                <i>
                  Mentioning some of my strengths that make me more valuable to
                  you:
                </i>
              </p>
              <ul>
                <li>
                  Compatible to work on tight deadlines to fulfill the assigned
                  responsibility.
                </li>
                <li>
                  Passionate about delivering the pixel-perfect implementation
                  of designs and functional requirements.
                </li>
                <li>
                  Enjoy being challenged and engaging with projects that require
                  me to work outside my comfort and knowledge set with quick
                  learning ability.
                </li>
                <li>
                  Exhibiting ideal teamwork traits, including reliability, good
                  communication, commitment, adaptability, and going above and
                  beyond what is asked.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
