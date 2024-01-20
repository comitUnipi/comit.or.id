import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <div className="my-24">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
