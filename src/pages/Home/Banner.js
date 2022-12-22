import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
const Banner = () => {
  return (
    <section
      id="top-banner"
      class="d-flex flex-column flex-md-row container align-items-center"
    >
      <div class="d-flex flex-column gap-2">
        <h1 className="display-1 fw-bold letter-spacing-1">
          F M ZAHIDUL ISLAM
        </h1>
        <p className="text-bg-dark fs-5 p-2 px-3 rounded-1 ls-2 d-inline-block">
          FULL STACK DEVELOPER (MERN)
        </p>
        <p className="text-justify">
          To gain utmost competence in the{" "}
          <strong>"Software Engineering"</strong> industry through enthusiasm,
          hard work, potentiality, and sincerity. Moreover, to express my
          innovative, creative skills for self and company growth through the
          assigned responsibility.
        </p>
        <div className="links d-flex flex-md-row gap-3">
          <a
            href="https://drive.google.com/file/d/1YXpsDr58qw2zmTqCvSxmLMzuUvwdlyND/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn btn-warning"
          >
            My Resume <FaDownload></FaDownload>
          </a>
          <a
            href="https://linkedin.com/in/ferdouszihad"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Connect with <BsLinkedin></BsLinkedin>
          </a>
          <a
            href="https://github.com/ferdouszihad"
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            Explore Code <BsGithub></BsGithub>
          </a>
        </div>
      </div>

      <div class="" style={{ minWidth: "50%" }}>
        <img
          src="https://c.tenor.com/flflC6GFzO8AAAAd/sultan-alrefaei-programmer.gif"
          alt=""
          className="img-fluid"
        />
      </div>
    </section>
  );
};

export default Banner;
