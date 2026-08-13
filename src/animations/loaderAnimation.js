import gsap from "gsap";

export const initLoaderAnimation = (
  loader,
  counter,
  onComplete
) => {
  if (!loader || !counter) return;

  const ctx = gsap.context(() => {

    const counterObject = {
      value: 0,
    };


    // =========================================
    // COUNTER
    // =========================================

    const counterTween = gsap.to(
      counterObject,
      {
        value: 100,

        duration: 2.5,

        ease: "power2.out",

        onUpdate: () => {

          counter.textContent =
            Math.floor(
              counterObject.value
            );

        },

        onComplete: () => {

          counter.textContent = "100";

          // Small pause at 100
          gsap.delayedCall(
            0.3,
            () => {

              // =================================
              // SLIDE LOADER UP
              // =================================

              gsap.to(loader, {
                yPercent: -100,

                duration: 1.1,

                ease: "power4.inOut",

                onComplete: () => {

                  if (onComplete) {
                    onComplete();
                  }

                },
              });

            }
          );

        },
      }
    );


  }, loader);


  return () => {
    ctx.revert();
  };
};