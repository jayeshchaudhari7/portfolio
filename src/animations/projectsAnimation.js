import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initProjectsAnimation = (page) => {

  if (!page) return;


  const ctx = gsap.context(() => {

    // =========================================
    // HERO TITLE
    // =========================================

    gsap.from(
      ".projects-hero-title",
      {
        y: 120,
        opacity: 0,
        duration: 1.3,
        ease: "power4.out",
      }
    );


    // =========================================
    // HERO DESCRIPTION
    // =========================================

    gsap.from(
      ".projects-hero-description",
      {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.25,
        ease: "power3.out",
      }
    );


    // =========================================
    // PROJECT LIST
    // =========================================

    gsap.from(
      ".project-list-item",
      {
        y: 70,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".project-list-item",
          start: "top 85%",
        },
      }
    );


    // =========================================
    // CTA
    // =========================================

    gsap.from(
      ".projects-cta",
      {
        y: 100,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
          trigger: ".projects-cta",
          start: "top 80%",
        },
      }
    );

  }, page);


  return () => {
    ctx.revert();
  };
};