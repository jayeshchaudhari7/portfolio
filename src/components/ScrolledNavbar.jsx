import React from "react";
import { NavLink } from "react-router";

import profile from "../assets/images/profile.png";
import linkedin from "../assets/icons/linkedin.png";
import mail from "../assets/icons/mail.png";

const ScrolledNavbar = () => {
  return (
    <nav
      id="scrolled-navbar"
      className="
        fixed
        top-2
        left-1/2
        z-50
        hidden
        w-105
        rounded-full
        border
        border-white/10
        bg-black/20
        px-3
        py-1
        text-white
        opacity-0
        backdrop-blur-xl
        overflow-hidden
      "
    >
      <div className="w-full h-12 relative">

        {/* PROFILE */}
        <div
          id="scrolled-profile"
          className="
            absolute
            left-0
            top-0
            flex
            h-12
            items-center
            gap-3
          "
        >
          <div className="relative">
            <img
              src={profile}
              alt="Jayesh Chaudhari"
              className="
                h-10
                w-10
                rounded-full
                object-cover
              "
            />
          </div>

          <h2 className="whitespace-nowrap text-sm font-medium">
            Jayesh Chaudhari.
          </h2>
        </div>


        {/* EXPANDED CONTENT */}
        <div
          id="expanded-navbar-content"
          className="
            absolute
            left-105
            right-5
            top-0
            flex
            h-12
            items-center
            justify-between
            opacity-0
          "
        >

          {/* NAVIGATION */}
          <div
            id="expanded-nav-links"
            className="
              flex
              items-center
              gap-7
              whitespace-nowrap
              text-[15px]
              font-medium
            "
          >

            <NavLink
              to="/"
              className="
          relative py-2
          whitespace-nowrap
          text-white/80
          hover:text-white

          after:absolute
          after:bottom-0
          after:left-0
          after:h-0.5
          after:w-0
          after:bg-white
          after:transition-all
          after:duration-300

          hover:after:w-full
        "
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="
          relative py-2
          whitespace-nowrap
          text-white/80
          hover:text-white

          after:absolute
          after:bottom-0
          after:left-0
          after:h-0.5
          after:w-0
          after:bg-white
          after:transition-all
          after:duration-300

          hover:after:w-full
        "
            >
              About
            </NavLink>

            <NavLink
              to="/work"
              className="
          relative py-2
          whitespace-nowrap
          text-white/80
          hover:text-white

          after:absolute
          after:bottom-0
          after:left-0
          after:h-0.5
          after:w-0
          after:bg-white
          after:transition-all
          after:duration-300
          hover:after:w-full
        "
            >
              Work ↗
            </NavLink>

          </div>


          {/* DIVIDER */}
          <div className="h-7 w-px bg-white/20" />


          {/* SOCIAL */}
          <div className="flex items-center gap-4">

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 transition-transform duration-300 hover:scale-110 hover:rotate-15"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="h-full w-full object-contain"
              />
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              className="h-8 w-8 transition-transform duration-300 hover:scale-110 hover:rotate-15"
            >
              <img
                src={mail}
                alt="Email"
                className="h-full w-full object-contain"
              />
            </a>

          </div>

        </div>


        {/* DOTS */}
        <div
          id="navbar-dots"
          className="
            absolute
            right-3
            top-1/2
            flex
            -translate-y-1/2
            items-center
            gap-2
          "
        >

          <span className="navbar-dot h-2 w-2 rounded-full bg-lime-400" />

          <span className="navbar-dot h-2 w-2 rounded-full bg-lime-400" />

          <span className="navbar-dot h-2 w-2 rounded-full bg-lime-400" />

        </div>

      </div>
    </nav>
  );
};

export default ScrolledNavbar;