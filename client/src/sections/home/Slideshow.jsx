import { useEffect, useRef, useState } from 'react';
import { landing } from '../../constants';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    console.log('Current image class:', landing[currentSlide].class);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === landing.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="landing-slideshow"
      ref={containerRef}
      className="slideshow-container wh-screen fixed top-0 left-0 right-0"
    >
      {landing.map((slide, index) => (
        <img
          key={slide.class}
          src={slide.src}
          srcSet={Object.entries(slide.srcset)
            .map(([size, path]) => `${path} ${size}w`)
            .join(', ')}
          sizes="(max-width: 768px) 768px, (max-width: 1280px) 1280px, 1920px"
          alt={slide.alt}
          className={`slide w-full h-full object-cover ${slide.class} ${
            index === currentSlide ? 'active' : ''
          }`}
          loading="eager"
          decoding="async"
        />
      ))}
    </div>
  );
};

export default Slideshow;
