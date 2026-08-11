// src/pages/ProjectsPage.jsx

import React, { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import ProjectShowcase from "../components/ProjectShowcase";
import { projects } from "../data/projects";

import {
  initProjectsAnimation,
} from "../animations/projectsAnimation";

const ProjectsPage = () => {

  const pageRef = useRef(null);

  useEffect(() => {

    const cleanup =
      initProjectsAnimation(
        pageRef.current
      );

    return cleanup;

  }, []);


  return (

    <main
      ref={pageRef}
      className="
        min-h-screen
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          projects-hero
          flex
          min-h-screen
          flex-col
          justify-between
          px-6
          pb-10
          pt-32
          md:px-10
          md:pb-12
          md:pt-40
          lg:px-16
        "
      >

        {/* MAIN TITLE */}

        <div>

          <h1
            className="
              projects-hero-title
              max-w-[1500px]
              text-[clamp(4rem,11vw,11rem)]
              font-normal
              leading-[0.82]
              tracking-[-0.075em]
            "
          >

            Selected
            <br />

            <span className="text-white/35">
              work.
            </span>

          </h1>


          <div
            className="
              mt-12
              flex
              justify-end
            "
          >

            <p
              className="
                projects-hero-description
                max-w-xl
                text-base
                leading-7
                text-white/40
                md:text-lg
              "
            >
              A collection of websites, interfaces and
              interactive experiences I've designed and
              developed while exploring the intersection
              of design, technology and motion.
            </p>

          </div>

        </div>


        {/* BOTTOM */}

        <div
          className="
            flex
            items-center
            gap-5
          "
        >

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-white/30
            "
          >
            Scroll to explore
          </span>


          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
            "
          >

            <ArrowDown
              size={15}
              className="
                animate-bounce
                text-white/50
              "
            />

          </div>

        </div>

      </section>


      <section
        className="
          bg-white
        "
      >

        <div
          className="
            px-4
            py-10
            md:px-8
            lg:px-12
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
            "
          >

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-black
              "
            >
              01 — Featured projects
            </span>


            <span
              className="
                text-[10px]
                text-black
              "
            >
              {String(
                projects.length
              ).padStart(2, "0")}{" "}
              projects
            </span>

          </div>

        </div>


        {/* YOUR EXISTING SHOWCASE */}

        <ProjectShowcase />

      </section>


      {/* =====================================================
          OTHER PROJECTS
      ===================================================== */}

      <section
        className="
          border-t
          border-white/10
          px-6
          py-24
          md:px-10
          md:py-32
          lg:px-16
        "
      >

        <div
          className="
            mb-16
            flex
            items-center
            gap-4
          "
        >

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-white/30
            "
          >
            02
          </span>

          <span
            className="
              h-px
              w-12
              bg-white/20
            "
          />

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-white/30
            "
          >
            More projects
          </span>

        </div>


        <div>

          {projects.map(
            (project, index) => (

              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  project-list-item
                  group
                  grid
                  gap-6
                  border-t
                  border-white/10
                  py-8
                  transition-colors
                  duration-300
                  md:grid-cols-[70px_1fr_auto]
                  md:items-center
                "
              >

                {/* NUMBER */}

                <span
                  className="
                    text-xs
                    text-white/25
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>


                {/* NAME */}

                <div>

                  <h2
                    className="
                      text-3xl
                      font-normal
                      tracking-[-0.04em]
                      transition-transform
                      duration-500
                      group-hover:translate-x-2
                      md:text-5xl
                    "
                  >
                    {project.title}
                  </h2>


                  <div
                    className="
                      mt-3
                      flex
                      flex-wrap
                      gap-2
                    "
                  >

                    <span
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.15em]
                        text-white/30
                      "
                    >
                      {project.category}
                    </span>

                    <span
                      className="
                        text-white/20
                      "
                    >
                      /
                    </span>

                    {project.technologies
                      .slice(0, 3)
                      .map((tech) => (

                        <span
                          key={tech}
                          className="
                            text-[10px]
                            text-white/30
                          "
                        >
                          {tech}
                        </span>

                      ))}

                  </div>

                </div>


                {/* ARROW */}

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:border-white/40
                  "
                >

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-500
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />

                </div>

              </a>

            )
          )}

        </div>

      </section>
    </main>

  );
};

export default ProjectsPage;