import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initFooterAnimation = (container) => {
  if (!container) return;

  const leftText = container.querySelector(".footer-left");
  const rightText = container.querySelector(".footer-right");

  if (!leftText || !rightText) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,

        start: "top 60%",
        // scrub:true,
        // repeat:-1,
        // yoyo:true,
        // Play only once
        toggleActions: "play none none none",
        // markers: true, 
      },
    });

    tl.fromTo(
      leftText,
      {
        x: "-100vw",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
      }
    );

    tl.fromTo(
      rightText,
      {
        x: "100vw",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
      },
      "<0.1"
    );
  }, container);

  return () => {
    ctx.revert();
  };
};