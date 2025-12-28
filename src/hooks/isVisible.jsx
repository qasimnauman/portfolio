"use client";

import { useEffect, useState } from 'react';

const useIsVisible = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const currentElement = ref.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};

export default useIsVisible;
