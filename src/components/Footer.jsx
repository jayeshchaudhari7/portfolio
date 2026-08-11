import React, { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { NavLink } from "react-router";
import { initFooterAnimation } from "../animations/footerAnimation";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerTitleRef = useRef(null);

    useEffect(() => {
        const cleanup = initFooterAnimation(
            footerTitleRef.current
        );

        return cleanup;
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <footer className="relative bg-[#0b0c10] px-6 text-white md:px-12 lg:px-16">

            <div className="mx-auto max-w-375">

                <div ref={footerTitleRef} className="overflow-hidden py-15 md:py-16 lg:py-32">

                    <h2
                        className="
      footer-left
      text-center
      text-[clamp(4rem,11vw,11rem)]
      font-normal
      leading-[0.8]
      tracking-[-0.07em]
      text-white
    "
                    >
                        Let's
                    </h2>

                    <h2
                        className="
      footer-right
      text-center
      text-[clamp(4rem,11vw,11rem)]
      font-normal
      leading-[0.9]
      tracking-[-0.07em]
      text-white
    "
                    >
                        Collaborate!
                    </h2>

                </div>


                <div className="h-px w-full bg-white/10" />

                <div
                    className="
            grid
            gap-8
            py-12

            md:grid-cols-3
            md:gap-6

            lg:py-14
          "
                >
                    <div>

                        <p
                            className="
                mb-7
                text-[11px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/40
              "
                        >
                            Menu
                        </p>


                        <nav className="flex flex-col gap-4">

                            <NavLink
                                to="/"
                                className="
                  w-fit
                  text-lg
                  text-white/80
                  transition-colors
                  duration-300
                  hover:text-white
                "
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/work"
                                className="
                  w-fit
                  flex items-center gap-1
                  text-lg
                  text-white/80
                  transition-colors
                  duration-300
                  hover:text-white
                "
                            >
                                Work
                                <ArrowUpRight size={16} strokeWidth={1.5} />
                            </NavLink>

                            <NavLink
                                to="/about"
                                className="
                  w-fit
                  text-lg
                  text-white/80
                  transition-colors
                  duration-300
                  hover:text-white
                "
                            >
                                About
                            </NavLink>


                        </nav>

                    </div>

                    <div>

                        <p
                            className="
                mb-7
                text-[11px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/40
              "
                        >
                            Connect
                        </p>


                        <div className="flex flex-col gap-4">

                            <a
                                href="https://www.linkedin.com/in/jayesh-chaudhari-c018"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  flex
                  w-fit
                  items-center
                  gap-1
                  text-lg
                  text-white/80
                  transition-colors
                  duration-300
                  hover:text-white
                "
                            >
                                LinkedIn
                                <ArrowUpRight size={16} strokeWidth={1.5} />
                            </a>


                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=jayeshchaudhari354@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  w-fit
                  text-lg
                  text-white/80
                  transition-colors
                  duration-300
                  hover:text-white
                "
                            >
                                Email
                            </a>

                        </div>

                    </div>


                    {/* =================================
              CONTACT
          ================================= */}

                    <div>

                        <p
                            className="
                mb-7
                text-[11px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/40
              "
                        >
                            Say Hello
                        </p>


                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=jayeshchaudhari354@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                block
                w-fit
                text-[clamp(1rem,2vw,2rem)]
                font-normal
                tracking-[-0.04em]
                text-white
                transition-opacity
                duration-300
                hover:opacity-70
              "
                        >
                            jayeshchaudhari354@gmail.com
                        </a>


                        {/* AVAILABLE */}

                        <div className="mt-7 flex items-center gap-3">

                            <span
                                className="
                  h-2
                  w-2
                  rounded-full
                  bg-lime-400
                  shadow-[0_0_10px_rgba(190,242,100,0.5)]
                "
                            />

                            <span className="text-sm text-white/50">
                                Available for work
                            </span>

                        </div>

                    </div>

                </div>


                <div className="h-px w-full bg-white/10" />

                <div
                    className="
            flex
            flex-col
            gap-6
            py-7

            md:flex-row
            md:items-center
            md:justify-between
          "
                >

                    {/* COPYRIGHT */}

                    <p className="text-sm text-white/40">
                        ©{currentYear} Jayesh Chaudhari — All rights reserved
                    </p>


                    {/* BACK TO TOP */}

                    <button
                        onClick={scrollToTop}
                        className="
              group
              flex
              w-fit
              items-center
              gap-2
              text-[11px]
              uppercase
              tracking-[0.25em]
              text-white/50
              transition-colors
              duration-300
              hover:text-white
            "
                    >

                        Back to top

                        <span
                            className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
                        >
                            <ArrowUp size={14} strokeWidth={1.5} />
                        </span>

                    </button>

                </div>

            </div>

        </footer>
    );
};

export default Footer;