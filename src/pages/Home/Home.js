import React from "react";

import Contact from "../Contact/Contact";
import Projects from "../projects/Projects";
import Banner from "./Banner";

const Home = () => {
  return (
    <div id="home" className="d-flex flex-column gap-5">
      <Banner></Banner>

      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
