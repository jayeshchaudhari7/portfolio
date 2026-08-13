import React, { useEffect, useRef } from "react";
import { initCursorAnimation } from "../animations/cursorAnimation";

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cleanup = initCursorAnimation(
      cursorRef.current,
      followerRef.current
    );

    return cleanup;
  }, []);

  return (
    <>
      {/* SMALL DOT */}

      <div
        ref={cursorRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[99999]
          hidden
          h-2
          w-2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
          mix-blend-difference
          md:block 
        "
      />


      {/* FOLLOWER */}

      <div
        ref={followerRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[99998]
          hidden
          h-10
          w-10
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          mix-blend-difference
          border-white/40
          md:flex
          md:items-center
          md:justify-center
        "
      >

        <span
          className="
            cursor-text
            text-[8px]
            uppercase
            tracking-[0.15em]
            text-white
            opacity-0
          "
        >
          View
        </span>

      </div>
    </>
  );
};

export default Cursor;