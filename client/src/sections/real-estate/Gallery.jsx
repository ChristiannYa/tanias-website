import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { reImages } from "../../constants/real-estate";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (containerRef.current) {
      const images = containerRef.current.querySelectorAll(".rp");

      images.forEach((box) => {
        gsap.fromTo(
          box,
          {
            scale: 0.6,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: box,
              start: `top 80%`,
              type: "touch,pointer",
            },
            opacity: 1,
            scale: 1,
            duration: 0.8,
          }
        );
      });
    }
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
