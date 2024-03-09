import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      {/* header area */}
      <Header />
      {/* body part area */}
      <Outlet />

      {/* footer area */}
      <Footer />
    </>
  );
};

export default Layouts;
