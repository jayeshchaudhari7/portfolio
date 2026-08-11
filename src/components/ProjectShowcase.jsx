import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

import { projects } from "../data/projects";
import {
  initProjectShowcase,
} from "../animations/projectShowcaseAnimation";

const ProjectShowcase = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cleanup = initProjectShowcase(
      sectionRef.current
    );

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-[#ffffff]
        px-10
        pb-10
      "
    >
      <h1 className=' text-[30px] text-black/70 mb-5 '>My Work</h1>
        

      <div
        className="
          grid
          h-screen
          w-full
          grid-cols-[60%_40%]
        "
      >

        <div
          className="
            flex
            h-screen
            flex-col
            gap-2
            overflow-hidden
            bg-[#ffffff]
            p-2
          "
        >

          {projects.map((project, index) => (

            <div
              key={project.id}
              data-project={index}
              className="
                project-item
                relative
                h-[18vh]
                w-full
                shrink-0
                overflow-hidden
                rounded-[2px]
              "
            >

              <div
                className="
                  relative
                  h-full
                  w-full
                  overflow-hidden
                "
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    project-image
                    block
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:scale-[1.03]
                  "
                />
    

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-black/5
                    to-black/35
                  "
                />


                {/* PROJECT NUMBER */}

                <span
                  className="
                    absolute
                    left-6
                    top-5
                    text-xs
                    tracking-[0.15em]
                    text-white/70
                  "
                >
                  0{index + 1}
                </span>

              </div>

            </div>

          ))}

        </div>


        {/* =================================================
            RIGHT — PROJECT INFORMATION
        ================================================= */}

        <div
          className="
            relative
            h-screen
            bg-[#ffffff]
            text-black
          "
        >

          <div
            className="
              sticky
              top-0
              flex
              h-screen
              flex-col
              justify-center
              px-[70px]
              py-[50px]
            "
          >

            <div
              className="
                relative
                min-h-[500px]
                w-full
              "
            >

              {projects.map(
                (project, index) => (

                  <div
                    key={project.id}
                    data-detail={index}
                    className={`
                      project-detail
                      absolute
                      inset-0
                      flex
                      flex-col
                      justify-center
                      ${
                        index === 0
                          ? "opacity-100"
                          : "opacity-0"
                      }
                    `}
                  >

                    <div
                      className="
                        mb-[35px]
                        flex
                        items-center
                        gap-[18px]
                        text-[11px]
                        tracking-[0.16em]
                        text-black/40
                      "
                    >

                      <span
                        className="
                          text-black/80
                        "
                      >
                        0{index + 1}
                      </span>

                      <span>
                        {project.category}
                      </span>

                    </div>


                    {/* TITLE */}

                    <h2
                      className="
                        m-0
                        text-[clamp(3rem,5vw,6rem)]
                        font-normal
                        leading-[0.9]
                        tracking-[-0.07em]
                        text-black
                      "
                    >
                      {project.title}
                    </h2>


                    {/* META */}

                    <div
                      className="
                        mt-10
                        max-w-[420px]
                      "
                    >

                      <p
                        className="
                          text-[11px]
                          tracking-[0.18em]
                          text-black/45
                        "
                      >
                        {project.role}
                      </p>


                      <p
                        className="
                          mt-[18px]
                          text-[15px]
                          leading-[1.7]
                          text-black/50
                        "
                      >
                        {project.description}
                      </p>

                    </div>


                    {/* TECHNOLOGIES */}

                    <div
                      className="
                        mt-7
                        flex
                        flex-wrap
                        gap-2
                      "
                    >

                      {project.technologies.map(
                        (technology) => (

                          <span
                            key={technology}
                            className="
                              rounded-full
                              border
                              border-black/10
                              px-3
                              py-[7px]
                              text-[11px]
                              text-black/55
                              transition-colors
                              duration-300
                              hover:border-black/35
                              hover:text-black
                            "
                          >
                            {technology}
                          </span>

                        )
                      )}

                    </div>


                    {/* PROJECT LINK */}

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        mt-10   
                        flex
                        w-fit
                        items-center
                        gap-2
                        border-b
                        border-black/30
                        pb-[6px]
                        text-[13px]
                        text-black
                        transition-all
                        duration-300
                        hover:gap-3.5
                        hover:black-white
                      "
                    >

                      View project

                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        className="
                          transition-transform
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />

                    </a>
                    

                  </div>

                )
              )}

            </div>

              <div className="p-10"></div>
            {/* =================================================
                PROJECT COUNTER
            ================================================= */}

            {/* <div
              className="
                absolute
                bottom-[42px]
                left-[70px]
                flex
                items-center
                gap-[14px]
                text-[11px]
                tracking-[0.15em]
                text-white/30
              "
            >

              <span
                className="
                  current-project
                  text-white
                "
              >
                01
              </span>


              <span
                className="
                  h-px
                  w-[50px]
                  bg-white/20
                "
              />


              <span>
                0{projects.length}
              </span>

            </div> */}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProjectShowcase;