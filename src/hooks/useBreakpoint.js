import { useState, useEffect } from "react";

const defaultBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const useBreakpoint = (breakpoint, customBreakpoints = {}) => {
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };
  const [isBelow, setIsBelow] = useState(
    window.innerWidth < breakpoints[breakpoint],
  );

  useEffect(() => {
    const handleResize = () => {
      setIsBelow(window.innerWidth < breakpoints[breakpoint]);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isBelow;
};

export default useBreakpoint;
