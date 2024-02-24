import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../pages/HeaderPage";
import Footer from "../../pages/FooterPage";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
