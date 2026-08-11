import React from "react";
import { NavLink } from "react-router";

import profile from "../assets/images/profile.png";
import linkedin from "../assets/icons/linkedin.png";
import mail from "../assets/icons/mail.png";

const Navbar = () => {
  return (
    <nav
      id="main-navbar"
      className="
        fixed
        top-2
        left-1/2
        z-50
        w-[calc(100%-200px)]
        rounded-full
        border
        border-white/10
        bg-black/20
        px-3
        py-1
        text-white
        backdrop-blur-xl
      "
    >
      <div className="flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-2">

          <div className="relative">
            <img
              src={profile}
              alt="Jayesh Chaudhari"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>

          <h2 className="text-sm font-medium tracking-tight">
            Jayesh Chaudhari.
          </h2>

        </div>


        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">

          {/* NAV LINKS */}
          <div className="flex items-center gap-8 text-[15px] font-medium">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `
                relative
                py-2
                text-white/80
                transition-colors
                duration-300
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

                ${isActive ? "text-white" : ""}
                `
              }
            >
              Home
            </NavLink>


            <NavLink
              to="/about"
              className={({ isActive }) =>
                `
                relative
                py-2
                text-white/80
                transition-colors
                duration-300
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

                ${isActive ? "text-white" : ""}
                `
              }
            >
              About
            </NavLink>


            <NavLink
              to="/work"
              className={({ isActive }) =>
                `
                relative
                py-2
                text-white/80
                transition-colors
                duration-300
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

                ${isActive ? "text-white" : ""}
                `
              }
            >
              Work ↗
            </NavLink>

          </div>


          {/* DIVIDER */}
          <div className="h-7 w-px bg-white/20" />


          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5">

            <a
              href="https://www.linkedin.com/in/jayesh-chaudhari-c018"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-md
                transition-transform
                duration-300
                hover:scale-105
                hover:rotate-15
              "
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="h-full w-full object-contain"
              />
            </a>


            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jayeshchaudhari354@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-md
                transition-transform
                duration-300
                hover:scale-105
                hover:rotate-15
              "
            >
              <img
                src={mail}
                alt="Email"
                className="h-full w-full object-contain"
              />
            </a>

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;