import React from "react";
import { Link } from "react-router-dom";

const BLog = () => {
  return (
    <section>
      <div className="d-flex align-items-center justify-content-center">
        <h2 className="display-1">Blog will be comming soon</h2>
      </div>
      <p className="text-center">Please Explore my Others</p>
      <div className="buttons d-flex align-items-center justify-content-center gap-3 ">
        <Link to="/home" className="btn btn-primary">
          Home-page
        </Link>
      </div>
    </section>
  );
};

export default BLog;
