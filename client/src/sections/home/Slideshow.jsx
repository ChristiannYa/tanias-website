import { useEffect, useRef, useState } from 'react';
import { landing } from '../../constants';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const nextIndex =
      currentSlide === landing.length - 1 ? 0 : currentSlide + 1;
    const nextImage = new Image();

    nextImage.onload = () => {
      console.log('Next image preloaded:', nextImage.src);
    };

    nextImage.onerror = () => {
      console.error('Failed to preload next image:', nextImage.src);
    };

    nextImage.src = landing[nextIndex].src;
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
      className="slideshow-container"
    >
      {landing.map((slide, index) => (
        <img
          key={slide.id}
          src={slide.src}
          srcSet={Object.entries(slide.srcset)
            .map(([size, path]) => `${path} ${size}w`)
            .join(', ')}
          sizes="(max-width: 768px) 768px, (max-width: 1280px) 1280px, 1920px"
          alt={slide.alt}
          className={`slide ${slide.class} ${
            index === currentSlide ? 'active' : ''
          }`}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
};

export default Slideshow;
