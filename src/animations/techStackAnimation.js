import gsap from "gsap";

export const initTechStackAnimation = (dock) => {
  if (!dock) return;

  const items = [
    ...dock.querySelectorAll(".tech-stack-item"),
  ];

  const icons = [
    ...dock.querySelectorAll(".tech-stack-icon"),
  ];

  const tooltips = [
    ...dock.querySelectorAll(".tech-stack-tooltip"),
  ];

  if (!items.length) return;

  // ==========================================
  // SETTINGS
  // ==========================================

  const NORMAL_SCALE = 1;

  // Only slightly bigger
  const HOVER_SCALE = 1.18;

  // Move upward
  const HOVER_Y = -15;


  // ==========================================
  // INITIAL STATE
  // ==========================================

  gsap.set(icons, {
    scale: NORMAL_SCALE,
    y: 0,
    transformOrigin: "center center",
  });

  gsap.set(tooltips, {
    opacity: 0,
    y: 5,
    scale: 0.9,
  });


  // ==========================================
  // HOVER HANDLERS
  // ==========================================

  const handlers = [];


  items.forEach((item, index) => {

    const icon = icons[index];
    const tooltip = tooltips[index];


    // ========================================
    // MOUSE ENTER
    // ========================================

    const handleEnter = () => {

      // Reset all other icons
      icons.forEach((otherIcon, otherIndex) => {

        if (otherIndex !== index) {

          gsap.to(otherIcon, {
            scale: NORMAL_SCALE,
            y: 0,
            duration: 0.25,
            ease: "power3.out",
          });

          gsap.to(tooltips[otherIndex], {
            opacity: 0,
            y: 5,
            scale: 0.9,
            duration: 0.15,
            ease: "power2.out",
          });

        }

      });


      // ========================================
      // MOVE + SLIGHTLY SCALE CURRENT ICON
      // ========================================

      gsap.to(icon, {
        scale: HOVER_SCALE,
        y: HOVER_Y,
        duration: 0.3,
        ease: "power3.out",
      });


      // ========================================
      // SHOW TOOLTIP
      // ========================================

      gsap.to(tooltip, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.25,
        ease: "power3.out",
      });

    };


    // ========================================
    // MOUSE LEAVE
    // ========================================

    const handleLeave = () => {

      gsap.to(icon, {
        scale: NORMAL_SCALE,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(tooltip, {
        opacity: 0,
        y: 5,
        scale: 0.9,
        duration: 0.18,
        ease: "power2.out",
      });

    };


    item.addEventListener(
      "mouseenter",
      handleEnter
    );

    item.addEventListener(
      "mouseleave",
      handleLeave
    );


    handlers.push({
      item,
      handleEnter,
      handleLeave,
    });

  });


  // ==========================================
  // CLEANUP
  // ==========================================

  return () => {

    handlers.forEach(
      ({
        item,
        handleEnter,
        handleLeave,
      }) => {

        item.removeEventListener(
          "mouseenter",
          handleEnter
        );

        item.removeEventListener(
          "mouseleave",
          handleLeave
        );

      }
    );

    gsap.killTweensOf([
      ...icons,
      ...tooltips,
    ]);

  };
};