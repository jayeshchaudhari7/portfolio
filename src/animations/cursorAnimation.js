import gsap from "gsap";

export const initCursorAnimation = (
  cursor,
  follower
) => {
  if (!cursor || !follower) return;

  const moveX = gsap.quickTo(
    cursor,
    "x",
    {
      duration: 0.1,
      ease: "power3.out",
    }
  );

  const moveY = gsap.quickTo(
    cursor,
    "y",
    {
      duration: 0.1,
      ease: "power3.out",
    }
  );


  const followerX = gsap.quickTo(
    follower,
    "x",
    {
      duration: 0.35,
      ease: "power3.out",
    }
  );

  const followerY = gsap.quickTo(
    follower,
    "y",
    {
      duration: 0.35,
      ease: "power3.out",
    }
  );


  // =========================================
  // MOUSE MOVE
  // =========================================

  const handleMouseMove = (event) => {

    moveX(event.clientX);
    moveY(event.clientY);

    followerX(event.clientX);
    followerY(event.clientY);

  };


  window.addEventListener(
    "mousemove",
    handleMouseMove
  );


  // =========================================
  // HOVER ELEMENTS
  // =========================================

  const interactiveElements =
    document.querySelectorAll(
      "a, button, [data-cursor]"
    );


  const handleEnter = (event) => {

    const element =
      event.currentTarget;

    const cursorType =
      element.dataset.cursor;


    // VIEW CURSOR

    if (cursorType === "view") {

      gsap.to(follower, {
        width: 90,
        height: 90,
        backgroundColor:
          "rgba(255,255,255,0.08)",
        borderColor:
          "rgba(255,255,255,0.5)",
        duration: 0.4,
        ease: "power3.out",
      });


      gsap.to(
        follower.querySelector("span"),
        {
          opacity: 1,
          duration: 0.3,
        }
      );

      gsap.to(cursor, {
        scale: 0,
        duration: 0.3,
      });

      return;
    }


    // NORMAL CLICKABLE

    gsap.to(follower, {
      width: 60,
      height: 60,
      borderColor:
        "rgba(255,255,255,0.7)",
      duration: 0.35,
      ease: "power3.out",
    });

  };


  const handleLeave = () => {

    gsap.to(follower, {
      width: 40,
      height: 40,
      backgroundColor:
        "transparent",
      borderColor:
        "rgba(255,255,255,0.4)",
      duration: 0.35,
      ease: "power3.out",
    });


    gsap.to(
      follower.querySelector("span"),
      {
        opacity: 0,
        duration: 0.2,
      }
    );


    gsap.to(cursor, {
      scale: 1,
      duration: 0.3,
    });

  };


  interactiveElements.forEach(
    (element) => {

      element.addEventListener(
        "mouseenter",
        handleEnter
      );

      element.addEventListener(
        "mouseleave",
        handleLeave
      );

    }
  );


  // =========================================
  // CLEANUP
  // =========================================

  return () => {

    window.removeEventListener(
      "mousemove",
      handleMouseMove
    );


    interactiveElements.forEach(
      (element) => {

        element.removeEventListener(
          "mouseenter",
          handleEnter
        );

        element.removeEventListener(
          "mouseleave",
          handleLeave
        );

      }
    );

  };
};