// src/components/Loader.jsx

import React, { useEffect, useRef } from "react";
import { initLoaderAnimation } from "../animations/loaderAnimation";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const cleanup = initLoaderAnimation(
      loaderRef.current,
      counterRef.current,
      onComplete
    );

    return cleanup;
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="
        fixed
        inset-0
        z-9999
        flex
        flex-col
        justify-between
        bg-[#ffffff]
        p-6
        text-black
        md:p-10
        lg:p-16
      "
    >

      {/* TOP */}

      <div
        className="
          flex
          items-center
          justify-between
        "
      >

        <span
          className="
            text-xs
            tracking-[0.2em]
            text-black/40
          "
        >
          JAYESH
        </span>

        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-black/30
          "
        >
          Portfolio
        </span>

      </div>


      {/* CENTER */}

      <div
        className="
          flex
          flex-col
          items-center
          justify-center
        "
      >

        <div
          ref={counterRef}
          className="
            text-[clamp(5rem,15vw,14rem)]
            font-normal
            leading-none
            tracking-[-0.08em]
          "
        >
          0
        </div>

        <span
          className="
            mt-4
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-black/30
          "
        >
          Loading experience
        </span>

      </div>


      {/* BOTTOM */}

      <div
        className="
          flex
          items-end
          justify-between
        "
      >

        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-black/30
          "
        >
          Creative Developer
        </span>


        <span
          className="
            text-xs
            text-black/40
          "
        >
          © 2026
        </span>

      </div>

    </div>
  );
};

export default Loader;