import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Header from "../pages/shared/Header";

const LayoutMain = () => {
  return (
    <div>
      <Header></Header>
      <main className="mb-4">
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default LayoutMain;
