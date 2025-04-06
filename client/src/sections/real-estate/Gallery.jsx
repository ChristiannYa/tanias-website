import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { reImages } from "../../constants/real-estate";

const Gallery = () => {
  const containerRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 684);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 684);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const images = Array.from(containerRef.current.querySelectorAll(".rp"));

    images.forEach((img) => {
      gsap.set(img, { scale: 0.6, opacity: 0 });
    });

    const animatedElements = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedElements.get(entry.target)) {
            const index = images.indexOf(entry.target);
            const staggerDelay = isLargeScreen ? index * 0.02 : 0;

            gsap.to(entry.target, {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: staggerDelay,
              onComplete: () => {
                animatedElements.set(entry.target, true);
                observer.unobserve(entry.target);
              },
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    images.forEach((img) => {
      animatedElements.set(img, false);
      observer.observe(img);
    });

    return () => {
      observer.disconnect();
      animatedElements.clear();
    };
  }, [isLargeScreen]);

  return (
    <section className="screen1200 mx-auto">
      <div className="columns-[300px]" ref={containerRef}>
        {reImages.map((img) => (
          <img
            key={img.id}
            src={img.default}
            className="mb-4 shadow-bs-1 rp"
            alt=""
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
