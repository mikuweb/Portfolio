import React, { useEffect, useRef, useState } from "react";

function useIsOnscreen() {
  const [isOnscreen, setIsOnscreen] = useState(false);

  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsOnscreen(entry.isIntersecting);
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return [isOnscreen, elementRef];
}

export default useIsOnscreen;
