import gsap from "gsap";

export const initBackgroundDots = (container) => {
  if (!container) return;

  const DOT_COUNT = 30;

  const dots = [];

  // ==========================================
  // CREATE DOTS
  // ==========================================

  for (let i = 0; i < DOT_COUNT; i++) {
    const dot = document.createElement("span");

    dot.classList.add("background-dot");

    const size = gsap.utils.random(1, 2.5);

    const x = gsap.utils.random(0, window.innerWidth);
    const y = gsap.utils.random(0, window.innerHeight);

    gsap.set(dot, {
      width: size,
      height: size,
      x,
      y,
      opacity: gsap.utils.random(0.15, 0.5),
    });

    container.appendChild(dot);

    dots.push(dot);
  }


  dots.forEach((dot) => {
    dot.style.position = "absolute";
    dot.style.borderRadius = "50%";
    dot.style.backgroundColor = "#C8F400";
  });


  const animateDot = (dot) => {

    const newX = gsap.utils.random(
      0,
      window.innerWidth
    );

    const newY = gsap.utils.random(
      0,
      window.innerHeight
    );

    const duration = gsap.utils.random(4, 10);

    gsap.to(dot, {
      x: newX,
      y: newY,
      duration,
      ease: "none",

      onComplete: () => {
        animateDot(dot);
      },
    });
  };


  dots.forEach((dot, index) => {

    gsap.delayedCall(
      gsap.utils.random(0, 5),
      () => {
        animateDot(dot);
      }
    );
  });


  dots.forEach((dot) => {

    gsap.to(dot, {
      opacity: gsap.utils.random(0.1, 0.45),
      duration: gsap.utils.random(1.5, 3),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: gsap.utils.random(0, 3),
    });

  });


  const handleResize = () => {

    dots.forEach((dot) => {

      const x = gsap.utils.random(
        0,
        window.innerWidth
      );

      const y = gsap.utils.random(
        0,
        window.innerHeight
      );

      gsap.to(dot, {
        x,
        y,
        duration: 1,
        ease: "power2.out",
      });

    });

  };


  window.addEventListener(
    "resize",
    handleResize
  );

  return () => {
    window.removeEventListener(
      "resize",
      handleResize
    );

    dots.forEach((dot) => {
      gsap.killTweensOf(dot);
      dot.remove();
    });

  };
};