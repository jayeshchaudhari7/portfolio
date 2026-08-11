import React, { useEffect } from "react";
import { Outlet } from "react-router";

import Navbar from "../components/Navbar";
import ScrolledNavbar from "../components/ScrolledNavbar";
import BackgroundDots from "../components/BackgroundDots";

import { initNavbarAnimation } from "../animations/navbarAnimation";
import Footer from "../components/Footer";

const MainLayout = () => {

  useEffect(() => {
    const cleanup = initNavbarAnimation();

    return cleanup;
  }, []);

  return (
    <>
      <BackgroundDots />

      <Navbar />
      <ScrolledNavbar />

      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer/>
    </>
  );
};

export default MainLayout;