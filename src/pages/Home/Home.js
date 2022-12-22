import React from "react";
import About from "../About/About";
import Projects from "../projects/Projects";
import Header from "../shared/Header";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="d-flex flex-column gap-5">
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
    </div>
  );
};

export default Home;
