import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { reImages } from "../../constants/real-estate";

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const images = containerRef.current.querySelectorAll(".rp");

    images.forEach((img) => {
      gsap.set(img, { scale: 0.6, opacity: 0 });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              onComplete: () => observer.unobserve(entry.target),
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

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
