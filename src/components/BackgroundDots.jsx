import React, { useEffect, useRef } from "react";
import { initBackgroundDots } from "../animations/backgroundDotsAnimation";

const BackgroundDots = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = initBackgroundDots(containerRef.current);
    return cleanup;
  }, []);

  return (
    <div
      ref={containerRef}
      id="background-dots"
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        overflow-hidden
      "
    />
  );
};

export default BackgroundDots;