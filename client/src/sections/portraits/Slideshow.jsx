import { useEffect, useRef, useState, useCallback } from 'react';
import { portraits } from '../../constants';
import { headshots } from '../../constants';

import icons from '../../assets/icons/index';

const Slideshow = () => {
  // Create separate states for each slideshow
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  // Create separate interval refs
  const intervalRef1 = useRef(null);
  const intervalRef2 = useRef(null);

  const startSlideShow1 = useCallback(() => {
    if (intervalRef1.current) {
      clearInterval(intervalRef1.current);
    }
    intervalRef1.current = setInterval(() => {
      setCurrentSlide1((prev) =>
        prev === portraits.length - 1 ? 0 : prev + 1
      );
    }, 4000);
  }, []);

  const startSlideShow2 = useCallback(() => {
    if (intervalRef2.current) {
      clearInterval(intervalRef2.current);
    }
    intervalRef2.current = setInterval(() => {
      setCurrentSlide2((prev) =>
        prev === headshots.length - 1 ? 0 : prev + 1
      );
    }, 4000);
  }, []);

  useEffect(() => {
    startSlideShow1();
    return () => {
      if (intervalRef1.current) {
        clearInterval(intervalRef1.current);
      }
    };
  }, [startSlideShow1]);

  useEffect(() => {
    startSlideShow2();
    return () => {
      if (intervalRef2.current) {
        clearInterval(intervalRef2.current);
      }
    };
  }, [startSlideShow2]);

  // Separate control functions for each slideshow
  const nextSlide1 = useCallback(() => {
    setCurrentSlide1((prev) => (prev === portraits.length - 1 ? 0 : prev + 1));
    startSlideShow1();
  }, [startSlideShow1]);

  const nextSlide2 = useCallback(() => {
    setCurrentSlide2((prev) => (prev === headshots.length - 1 ? 0 : prev + 1));
    startSlideShow2();
  }, [startSlideShow2]);

  const prevSlide1 = useCallback(() => {
    setCurrentSlide1((prev) => (prev === 0 ? portraits.length - 1 : prev - 1));
    startSlideShow1();
  }, [startSlideShow1]);

  const prevSlide2 = useCallback(() => {
    setCurrentSlide2((prev) => (prev === 0 ? headshots.length - 1 : prev - 1));
    startSlideShow2();
  }, [startSlideShow2]);

  return (
    <div className="flex flex-col gap-y-16 mt-8 lg:py-4 lg:flex-row lg:gap-x-8">
      {/* First slideshow */}
      <div className="rowflex-center gap-x-4">
        <button onClick={prevSlide1} className="rounded-full">
          <img src={icons.prev} className="w-8" width={21} height={21} alt="" />
        </button>
        <div className="w-[400px] h-[400px] relative rowflex-center">
          {portraits.map((slide, index) => (
            <img
              key={slide.id}
              src={slide.src}
              alt={slide.alt}
              className={`absolute object-contain h-full ${
                index === currentSlide1 ? 'block' : 'hidden'
              }`}
              srcSet={Object.entries(slide.srcSet)
                .map(([size, path]) => `${path} ${size}w`)
                .join(', ')}
              sizes="(max-width: 768px) 768px, (max-width: 1280px) 1280px, 1920px"
              loading="eager"
              decoding="async"
            />
          ))}
        </div>
        <button onClick={nextSlide1} className="rounded-full">
          <img src={icons.next} className="w-8" width={21} height={21} alt="" />
        </button>
      </div>

      {/* Second slideshow */}
      <div className="rowflex-center gap-x-4">
        <button onClick={prevSlide2} className="rounded-full">
          <img src={icons.prev} className="w-8" width={21} height={21} alt="" />
        </button>
        <div className="w-[400px] h-[400px] relative rowflex-center">
          {headshots.map((slide, index) => (
            <img
              key={slide.id}
              src={slide.src}
              alt={slide.alt}
              className={`absolute object-contain h-full ${
                index === currentSlide2 ? 'block' : 'hidden'
              }`}
              srcSet={Object.entries(slide.srcSet)
                .map(([size, path]) => `${path} ${size}w`)
                .join(', ')}
              sizes="(max-width: 768px) 768px, (max-width: 1280px) 1280px, 1920px"
              loading="eager"
              decoding="async"
            />
          ))}
        </div>
        <button onClick={nextSlide2} className="rounded-full">
          <img src={icons.next} className="w-8" width={21} height={21} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
