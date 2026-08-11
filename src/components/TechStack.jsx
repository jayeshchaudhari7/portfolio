import React, { useEffect, useRef } from "react";
import { techStack } from "../data/techStack";
import { initTechStackAnimation } from "../animations/techStackAnimation";

const TechStack = () => {
  const dockRef = useRef(null);

  useEffect(() => {
    const cleanup = initTechStackAnimation(dockRef.current);

    return cleanup;
  }, []);

  return (
    <section className="flex w-full justify-center py-12">

      <div
        ref={dockRef}
        id="tech-stack-dock"
        className="
          relative
          flex
          h-[76px]
          items-end
          gap-2
          overflow-visible
          rounded-[20px]
          border
          border-white/60
          bg-white/25
          px-4
          pb-3
          pt-3
          shadow-[0_10px_40px_rgba(0,0,0,0.15)]
          backdrop-blur-xl
        "
      >

        {/* LABEL */}

        <div
          className="
            pointer-events-none
            absolute
            -top-15
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            text-[30px]
            font-medium
            tracking-widest
            text-white/70
          "
        >
          TECH STACK
        </div>


        {/* TECH ICONS */}

        {techStack.map((tech) => (
          <div
            key={tech.id}
            className="
              tech-stack-item
              relative
              h-12
              w-12
              shrink-0
            "
          >

            {/* ICON */}

            <div
              className="
                tech-stack-icon
                absolute
                bottom-0
                left-1/2
                flex
                h-12
                w-12
                -translate-x-1/2
                items-center
                justify-center
                overflow-hidden
                rounded-[13px]
                border
                border-black/10
                bg-white
                shadow-[0_4px_12px_rgba(0,0,0,0.18)]
              "
            >

              <img
                src={tech.icon}
                alt={tech.name}
                className="
                  h-full
                  w-full
                  object-contain
                  p-1
                "
              />

            </div>


            {/* TOOLTIP */}

            <div
              className="
                tech-stack-tooltip
                pointer-events-none
                absolute
                bottom-[58px]
                left-1/2
                z-[100]
                -translate-x-1/2
                whitespace-nowrap
                rounded-full
                border
                border-white/40
                bg-white/25
                px-3
                py-1.5
                font-mono
                text-[11px]
                text-white
                opacity-0
                shadow-lg
                backdrop-blur-xl
              "
            >

              {tech.name}

              {/* Arrow */}

              <span
                className="
                  absolute
                  -bottom-1
                  left-1/2
                  h-2
                  w-2
                  -translate-x-1/2
                  rotate-45
                  border-b
                  border-r
                  border-white/40
                  bg-white/25
                "
              />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default TechStack;