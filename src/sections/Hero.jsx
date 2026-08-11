import React, { useEffect, useRef } from "react";
import { initTypewriter } from "../animations/typewriterAnimation";

const Hero = () => {

    const textRef = useRef(null);

    useEffect(() => {

        const cleanup = initTypewriter(
            textRef.current
        );

        return cleanup;

    }, []);


    return (
        <section className="flex min-h-screen w-full justify-center items-center px-10 flex-col gap-20 ">

            <h1
                ref={textRef}
                className="
          text-[clamp(3rem,9vw,8rem)]
          font-normal
          leading-[0.9]
          tracking-[-0.06em]
          text-white
        "
            />
            <div className="flex flex-col gap-10 items-center ">
                <p className="max-w-xl text-lg leading-relaxed text-white/60">
                    I’m Jayesh, a Web Developer and UI/UX Designer passionate about
                    turning ideas into engaging digital experiences.
                </p>
                <p className="flex gap-5 items-center">Scroll <span className="scroll-arrow text-red-400 font-extrabold text-2xl"> ↓</span></p>
            </div>


        </section>
    );
};

export default Hero;