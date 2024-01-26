import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { useRouter } from "next/router";

const disable = ["/auth/login", "/auth/register"];

const Layout = (props) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <>
      {!disable.includes(pathname) && <Navbar />}
      <div>{children}</div>
      {!disable.includes(pathname) && <Footer />}
    </>
  );
};

export default Layout;