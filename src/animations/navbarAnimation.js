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


    // ==========================================
    // CONFIG
    // ==========================================

    const COMPACT_WIDTH = 420;
    const EXPANDED_WIDTH = 800;
    const SCROLL_DISTANCE = 80;


    // ==========================================
    // INITIAL STATE
    // ==========================================

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
    // ==========================================
    // STATE
    // ==========================================

    let isScrolled = false;
    let isExpanded = false;


    // ==========================================
    // SCROLL HANDLER
    // ==========================================

    const handleScroll = () => {

        const shouldBeScrolled =
            window.scrollY > SCROLL_DISTANCE;


        // Don't run the same animation repeatedly
        if (shouldBeScrolled === isScrolled) {
            return;
        }


        isScrolled = shouldBeScrolled;


        // ========================================
        // SCROLL DOWN
        // ========================================

        if (isScrolled) {

            // -------------------------------
            // Hide normal navbar
            // -------------------------------

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


            // -------------------------------
            // Show scrolled navbar
            // -------------------------------

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


        // ========================================
        // BACK TO TOP
        // ========================================

        else {
            isExpanded = false;
            
            dotWiggle.pause();
            gsap.set(dotElements, {
                y: 0,
            });

            // -------------------------------
            // Reset expanded content
            // -------------------------------

            gsap.to(expandedContent, {
                opacity: 0,
                duration: 0.2,
            });


            // -------------------------------
            // Show dots
            // -------------------------------

            gsap.to(dots, {
                opacity: 1,
                duration: 0.2,
            });


            // -------------------------------
            // Reset width
            // -------------------------------

            gsap.to(scrolledNavbar, {
                width: COMPACT_WIDTH,
                duration: 0.3,
                ease: "power3.out",
            });


            // -------------------------------
            // Hide scrolled navbar
            // -------------------------------

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


            // -------------------------------
            // Show normal navbar
            // -------------------------------

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


    // ==========================================
    // EXPAND NAVBAR
    // ==========================================

    const expandNavbar = () => {

        // Only expand after scrolling
        if (!isScrolled) {
            return;
        }

        if (isExpanded) {
            return;
        }

        isExpanded = true;


        // -------------------------------
        // Expand width
        // -------------------------------

        gsap.to(scrolledNavbar, {
            width: EXPANDED_WIDTH,
            duration: 0.55,
            ease: "power3.out",
        });


        // -------------------------------
        // Hide dots
        // -------------------------------

        gsap.to(dots, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out",
        });


        // -------------------------------
        // Show navigation
        // -------------------------------

        gsap.to(expandedContent, {
            opacity: 1,
            duration: 0.35,
            delay: 0.12,
            ease: "power3.out",
        });

    };


    // ==========================================
    // COLLAPSE NAVBAR
    // ==========================================

    const collapseNavbar = () => {

        if (!isExpanded) {
            return;
        }

        isExpanded = false;


        // -------------------------------
        // Hide navigation
        // -------------------------------

        gsap.to(expandedContent, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out",
        });


        // -------------------------------
        // Show dots
        // -------------------------------

        gsap.to(dots, {
            opacity: 1,
            duration: 0.25,
            delay: 0.12,
            ease: "power2.out",
        });


        // -------------------------------
        // Shrink navbar
        // -------------------------------

        gsap.to(scrolledNavbar, {
            width: COMPACT_WIDTH,
            duration: 0.55,
            ease: "power3.out",
        });

    };


    // ==========================================
    // HOVER EVENTS
    // ==========================================

    scrolledNavbar.addEventListener(
        "mouseenter",
        expandNavbar
    );

    scrolledNavbar.addEventListener(
        "mouseleave",
        collapseNavbar
    );


    // ==========================================
    // CLEANUP
    // ==========================================

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