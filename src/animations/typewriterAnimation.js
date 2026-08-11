import gsap from "gsap";

export const initTypewriter = (element) => {
  if (!element) return;

  const words = [
    "Jayesh Chaudhari",
    "Web Developer",
    "UI/UX Designer",
  ];

  // Prevent duplicate initialization
  if (element.dataset.typewriterInitialized === "true") {
    return;
  }

  element.dataset.typewriterInitialized = "true";

  // ==========================================
  // CREATE ELEMENTS ONCE
  // ==========================================

  const textElement = document.createElement("span");

  const cursorElement = document.createElement("span");

  cursorElement.textContent = "|";

  // Cursor styling
  cursorElement.style.color = "#888";
  cursorElement.style.marginLeft = "5px";


  // Add them to the heading
  element.textContent = "";

  element.appendChild(textElement);
  element.appendChild(cursorElement);


  // ==========================================
  // CURSOR BLINK
  // ==========================================

  const cursorAnimation = gsap.to(cursorElement, {
    opacity: 0,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "steps(1)",
  });


  // ==========================================
  // TYPEWRITER TIMELINE
  // ==========================================

  let wordIndex = 0;

  const timeline = gsap.timeline({
    repeat: -1,
  });


  words.forEach((word) => {

    // ----------------------------------------
    // TYPE
    // ----------------------------------------

    timeline.to(
      {},
      {
        duration: word.length * 0.08,

        ease: "none",

        onUpdate: function () {

          const progress = this.progress();

          const characters = Math.floor(
            progress * word.length
          );

          textElement.textContent =
            word.substring(0, characters);
        },
      }
    );


    // ----------------------------------------
    // WAIT
    // ----------------------------------------

    timeline.to(
      {},
      {
        duration: 1.8,
      }
    );


    // ----------------------------------------
    // DELETE
    // ----------------------------------------

    timeline.to(
      {},
      {
        duration: word.length * 0.04,

        ease: "none",

        onUpdate: function () {

          const progress = this.progress();

          const characters = Math.floor(
            word.length * (1 - progress)
          );

          textElement.textContent =
            word.substring(0, characters);
        },
      }
    );


    // ----------------------------------------
    // SMALL DELAY
    // ----------------------------------------

    timeline.to(
      {},
      {
        duration: 0.3,
      }
    );

  });


  // ==========================================
  // CLEANUP
  // ==========================================

  return () => {

    timeline.kill();

    cursorAnimation.kill();

    gsap.killTweensOf([
      textElement,
      cursorElement,
    ]);

    element.dataset.typewriterInitialized = "false";

    element.textContent = "";
  };
};