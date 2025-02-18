import { useState, useRef, useCallback, useEffect } from 'react';

export const useSlideshow = (images, interval = 4000) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const startSlideShow = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);
  }, [images.length, interval]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    startSlideShow();
  }, [images.length, startSlideShow]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    startSlideShow();
  }, [images.length, startSlideShow]);

  useEffect(() => {
    startSlideShow();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startSlideShow]);

  return { currentSlide, nextSlide, prevSlide };
};
