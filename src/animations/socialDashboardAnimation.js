import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initSocialDashboardAnimation = (
  section
) => {

  if (!section) return;

  const title =
    section.querySelector(".social-title");

  const cards =
    section.querySelectorAll(".social-card");


  const ctx = gsap.context(() => {

    gsap.fromTo(
      title,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",

        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions:
            "play none none none",
        },
      }
    );


    gsap.fromTo(
      cards,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power4.out",

        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions:
            "play none none none",
        },
      }
    );

  }, section);


  return () => ctx.revert();
};