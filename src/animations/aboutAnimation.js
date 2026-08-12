import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAboutAnimation = (page) => {
  if (!page) return;

  const ctx = gsap.context(() => {

    gsap.from(".about-word", {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.025,
      ease: "power4.out",
    });

    gsap.from(".about-image", {
      y: 100,
      opacity: 0,
      scale: 0.92,
      duration: 1.2,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".about-image",
        start: "top 80%",
      },
    });

    gsap.from(".about-heading", {
      y: 70,
      opacity: 0,
      duration: 1,

      scrollTrigger: {
        trigger: ".about-heading",
        start: "top 80%",
      },
    });

    gsap.from(".about-description", {
      y: 40,
      opacity: 0,
      duration: 0.9,

      scrollTrigger: {
        trigger: ".about-description",
        start: "top 85%",
      },
    });

    gsap.from(".service-item", {
      y: 70,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".services-section",
        start: "top 75%",
      },
    });


  }, page);

  return () => {
    ctx.revert();
  };
};