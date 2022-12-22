import React from "react";
import { Button } from "react-bootstrap";
import ProjectDetails from "./ProjectDetails";

const ProjectCard = ({ project }) => {
  const { technology } = project;

  const tools = technology.split(",");
  return (
    <div className="col">
      <div className="card shadow h-100">
        <img
          src={project.image}
          className="card-body rounded-2"
          alt="..."
          style={{ minHeight: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold fs-3 text-center">
            {project.name}
          </h5>
          <p className="card-text text-center">{project.objective}</p>

          <div className="button-group justify-content-center d-flex flex-wrap gap-2 py-1 rounded-pill">
            {tools.map((t) => (
              <small className="btn btn-sm btn-dark">{t}</small>
            ))}
          </div>
          <div className="details">
            <Button variant="warning d-block w-100 my-2">See Details</Button>
            <a
              href={project.liveLink}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary d-block w-100 my-2"
            >
              Live Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
