import React from "react";

const Title = ({ children }) => {
  return (
    <div className="container text-wrap">
      <h1 className="title">{children}</h1>
      <h1 className="display-1 bg-text">{children}</h1>
    </div>
  );
};

export default Title;
