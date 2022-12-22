import React from "react";
import { useLoaderData } from "react-router-dom";
import Title from "../shared/Title";

const ProjectDetails = () => {
  const project = useLoaderData();
  const { features, technology } = project;
  const tools = technology.split(",");
  return (
    <section>
      <Title>{project.name}</Title>
      <div className="container">
        <p className="fst-italic mb-3 p-1 ps-2 border-5 border-dark bg-ash  border-start d-inline-block">
          {project.objective}
        </p>

        <div className="project-img p-4 pb-0 mb-5  rounded-top bg-dark">
          <img src={project.image} alt="" className="img-fluid rounded-top" />
        </div>
        <div className="links d-flex flex-wrap justify-content-center mb-5 gap-3">
          <a
            className="btn btn-warning "
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live-Link
          </a>
          <a
            className="btn btn-primary"
            href={project.client}
            target="_blank"
            rel="noopener noreferrer"
          >
            Client-Side-Code
          </a>
          <a
            className="btn btn-dark"
            href={project.server}
            target="_blank"
            rel="noopener noreferrer"
          >
            Server-Side-Code
          </a>
        </div>

        <div className="">
          <Title>Project Details</Title>
          <ul className="my-4">
            {features.map((ftr) => (
              <li className="mb-2">{ftr}</li>
            ))}
          </ul>
        </div>

        <div className="tools my-5">
          <Title>Technologies</Title>

          <div className="tools py-3 d-flex flex-wrap gap-3">
            {tools.map((t) => (
              <div class="btn shadow bg-ash ">{t}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
