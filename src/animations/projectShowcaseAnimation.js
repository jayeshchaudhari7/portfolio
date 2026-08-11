import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initProjectShowcase = (section) => {
  if (!section) return;

  const items = section.querySelectorAll(
    "[data-project]"
  );

  const details = section.querySelectorAll(
    "[data-detail]"
  );

  const currentProject =
    section.querySelector(
      ".current-project"
    );

  const ctx = gsap.context(() => {

    // =========================================
    // INITIAL STATE
    // =========================================

    gsap.set(items, {
      height: "18vh",
    });

    gsap.set(items[0], {
      height: "64vh",
    });


    // Images

    gsap.set(
      items
        .item(0)
        ?.querySelector(".project-image"),
      {
        scale: 1,
      }
    );

    items.forEach((item, index) => {

      if (index !== 0) {

        gsap.set(
          item.querySelector(
            ".project-image"
          ),
          {
            scale: 1.08,
          }
        );

      }

    });


    // Details

    gsap.set(details, {
      opacity: 0,
      y: 35,
    });

    gsap.set(details[0], {
      opacity: 1,
      y: 0,
    });


    // =========================================
    // MAIN TIMELINE
    // =========================================

    const timeline = gsap.timeline({

      scrollTrigger: {

        trigger: section,

        start: "top top",

        end: () =>
          `+=${items.length * 1000}`,

        scrub: 1,

        pin: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,

        // markers: true,

      },

    });


    // =========================================
    // EACH PROJECT
    // =========================================

    items.forEach(
      (item, index) => {

        if (index === 0) return;

        const previousItem =
          items[index - 1];

        const previousImage =
          previousItem.querySelector(
            ".project-image"
          );

        const currentImage =
          item.querySelector(
            ".project-image"
          );


        // =====================================
        // PREVIOUS IMAGE SHRINKS
        // =====================================

        timeline.to(
          previousItem,
          {
            height: "18vh",

            duration: 1,

            ease: "power2.inOut",
          }
        );


        // =====================================
        // CURRENT IMAGE GROWS
        // =====================================

        timeline.to(
          item,
          {
            height: "64vh",

            duration: 1,

            ease: "power2.inOut",
          },
          "<"
        );


        // =====================================
        // PREVIOUS IMAGE SCALE
        // =====================================

        timeline.to(
          previousImage,
          {
            scale: 1.08,

            duration: 1,

            ease: "power2.inOut",
          },
          "<"
        );


        // =====================================
        // CURRENT IMAGE SCALE
        // =====================================

        timeline.to(
          currentImage,
          {
            scale: 1,

            duration: 1,

            ease: "power2.out",
          },
          "<"
        );


        // =====================================
        // PREVIOUS TEXT
        // =====================================

        timeline.to(
          details[index - 1],
          {
            opacity: 0,

            y: -35,

            duration: 0.45,

            ease: "power2.out",
          },
          "<"
        );


        // =====================================
        // CURRENT TEXT
        // =====================================

        timeline.to(
          details[index],
          {
            opacity: 1,

            y: 0,

            duration: 0.55,

            ease: "power3.out",
          },
          "<0.2"
        );


        // =====================================
        // COUNTER
        // =====================================

        timeline.call(
          () => {

            if (currentProject) {

              currentProject.textContent =
                String(index + 1)
                  .padStart(2, "0");

            }

          },
          null,
          "<"
        );

      }
    );

  }, section);


  // =========================================
  // CLEANUP
  // =========================================

  return () => {
    ctx.revert();
  };
};