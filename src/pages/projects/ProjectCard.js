import React from "react";
import { Button } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  return (
    <div className="col">
      <div className="card shadow h-100">
        <img
          src={project.image}
          className="card-body rounded-3"
          alt="..."
          style={{ minHeight: "220px" }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{project.name}</h5>
          <p className="card-text">{project.objective}</p>

          <div className="button-group text-center gap-3">
            <a href="#" className="btn m-2 btn-dark">
              Client
            </a>
            <a href="#" className="btn m-2 btn-primary">
              Live-Link
            </a>
            <a href="#" className="btn m-2 btn-dark">
              Server
            </a>
          </div>
          <div className="details">
            <Button variant="warning d-block w-100">See Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
