import React from "react";
import Title from "../shared/Title";

const ProjectDetails = ({ project }) => {
  return (
    <section>
      <Title>{project.Name}</Title>
    </section>
  );
};

export default ProjectDetails;
