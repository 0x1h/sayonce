import { useEffect, useState } from "react";

export const useWindow = () => {
  const [isTablet, setIsTablet] = useState(true);

  const handleScreenResize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1024) {
      setIsTablet(false);
      return;
    }

    setIsTablet(true);
  };

  useEffect(() => {
    handleScreenResize()
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);

    return () => window.removeEventListener("resize", handleScreenResize);
  });

  return { isTablet };
};
