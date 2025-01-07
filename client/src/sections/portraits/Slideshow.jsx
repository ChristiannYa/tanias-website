import { useEffect, useRef, useState, useCallback } from 'react';
import { portraits } from '../../constants';

import icons from '../../assets/icons/index';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const startSlideShow = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === portraits.length - 1 ? 0 : prev + 1));
    }, 4000);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === portraits.length - 1 ? 0 : prev + 1));
    startSlideShow();
  }, [startSlideShow]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? portraits.length - 1 : prev - 1));
    startSlideShow();
  }, [startSlideShow]);

  useEffect(() => {
    startSlideShow();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startSlideShow]);

  return (
    <div ref={containerRef} className="screen1200 rowflex-center gap-x-4">
      <button onClick={prevSlide} className="rounded-full">
        <img src={icons.prev} className="w-8" width={21} height={21} alt=''/>
      </button>
      <div className="w-[360px] h-[360px] max-sm:h-[260px] relative rowflex-center">
        {portraits.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            className={`absolute object-contain h-full ${
              index === currentSlide ? 'block' : 'hidden'
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
      <button onClick={nextSlide} className="rounded-full">
        <img src={icons.next} className="w-8" width={21} height={21} alt=''/>
      </button>
    </div>
  );
};

export default Slideshow;
