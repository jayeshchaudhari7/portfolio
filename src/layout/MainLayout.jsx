import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";

import Navbar from "../components/Navbar";
import ScrolledNavbar from "../components/ScrolledNavbar";
import BackgroundDots from "../components/BackgroundDots";

import { initNavbarAnimation } from "../animations/navbarAnimation";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";

const MainLayout = () => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const cleanup = initNavbarAnimation();

    return cleanup;
  }, []);

  return (
    <>
    <Cursor/>
      {loading && (
        <Loader
          onComplete={() => {
            setLoading(false);
          }}
        />
      )}

      <ScrollToTop />
      <BackgroundDots />

      <Navbar />
      <ScrolledNavbar />

      <main className=" relative z-10">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;