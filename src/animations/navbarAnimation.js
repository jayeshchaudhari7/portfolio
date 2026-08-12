import gsap from "gsap";

export const initNavbarAnimation = () => {
    const normalNavbar = document.querySelector("#main-navbar");
    const scrolledNavbar = document.querySelector("#scrolled-navbar");

    const expandedContent = document.querySelector(
        "#expanded-navbar-content"
    );

    const dots = document.querySelector("#navbar-dots");
    const dotElements = document.querySelectorAll(".navbar-dot");

    if (
        !normalNavbar ||
        !scrolledNavbar ||
        !expandedContent ||
        !dots
    ) {
        return;
    }

    const COMPACT_WIDTH = 420;
    const EXPANDED_WIDTH = 800;
    const SCROLL_DISTANCE = 80;

    gsap.set(normalNavbar, {
        xPercent: -50,
    });

    gsap.set(scrolledNavbar, {
        display: "none",
        xPercent: -50,
        y: -15,
        opacity: 0,
        scale: 0.95,
        width: COMPACT_WIDTH,
    });

    gsap.set(expandedContent, {
        opacity: 0,
    });

    gsap.set(dots, {
        opacity: 1,
    });

    const dotWiggle = gsap.to(dotElements, {
        y: -3,
        duration: 0.25,
        stagger: 0.12,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        paused: true,
    });

    let isScrolled = false;
    let isExpanded = false;

    const handleScroll = () => {

        const shouldBeScrolled =
            window.scrollY > SCROLL_DISTANCE;

        if (shouldBeScrolled === isScrolled) {
            return;
        }


        isScrolled = shouldBeScrolled;

        if (isScrolled) {

            gsap.to(normalNavbar, {
                y: -20,
                opacity: 0,
                scale: 0.95,
                duration: 0.35,
                ease: "power3.out",

                onComplete: () => {
                    normalNavbar.style.pointerEvents = "none";
                },
            });

            gsap.set(scrolledNavbar, {
                display: "block",
                xPercent: -50,
            });

            gsap.fromTo(
                scrolledNavbar,
                {
                    y: -20,
                    opacity: 0,
                    scale: 0.95,
                    width: COMPACT_WIDTH,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    width: COMPACT_WIDTH,
                    duration: 0.45,
                    ease: "power3.out",
                }
            );
            dotWiggle.restart();
        }

        else {
            isExpanded = false;
            
            dotWiggle.pause();
            gsap.set(dotElements, {
                y: 0,
            });

            gsap.to(expandedContent, {
                opacity: 0,
                duration: 0.2,
            });

            gsap.to(dots, {
                opacity: 1,
                duration: 0.2,
            });

            gsap.to(scrolledNavbar, {
                width: COMPACT_WIDTH,
                duration: 0.3,
                ease: "power3.out",
            });

            gsap.to(scrolledNavbar, {
                y: -15,
                opacity: 0,
                scale: 0.95,
                duration: 0.3,
                ease: "power3.out",

                onComplete: () => {
                    scrolledNavbar.style.display = "none";
                },
            });

            gsap.to(normalNavbar, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "power3.out",

                onStart: () => {
                    normalNavbar.style.pointerEvents = "auto";
                },
            });

        }
    };


    window.addEventListener(
        "scroll",
        handleScroll
    );

    const expandNavbar = () => {
        if (!isScrolled) {
            return;
        }
        if (isExpanded) {
            return;
        }
        isExpanded = true;

        gsap.to(scrolledNavbar, {
            width: EXPANDED_WIDTH,
            duration: 0.55,
            ease: "power3.out",
        });

        gsap.to(dots, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out",
        });

        gsap.to(expandedContent, {
            opacity: 1,
            duration: 0.35,
            delay: 0.12,
            ease: "power3.out",
        });

    };

    const collapseNavbar = () => {

        if (!isExpanded) {
            return;
        }
        isExpanded = false;

        gsap.to(expandedContent, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out",
        });

        gsap.to(dots, {
            opacity: 1,
            duration: 0.25,
            delay: 0.12,
            ease: "power2.out",
        });

        gsap.to(scrolledNavbar, {
            width: COMPACT_WIDTH,
            duration: 0.55,
            ease: "power3.out",
        });

    };

    scrolledNavbar.addEventListener(
        "mouseenter",
        expandNavbar
    );

    scrolledNavbar.addEventListener(
        "mouseleave",
        collapseNavbar
    );

    return () => {

        window.removeEventListener(
            "scroll",
            handleScroll
        );
        scrolledNavbar.removeEventListener(
            "mouseenter",
            expandNavbar
        );
        scrolledNavbar.removeEventListener(
            "mouseleave",
            collapseNavbar
        );
        gsap.killTweensOf([
            normalNavbar,
            scrolledNavbar,
            expandedContent,
            dots,
        ]);
    };
};