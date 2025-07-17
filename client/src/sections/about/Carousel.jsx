import { useEffect } from "react";
import { carousel } from "../../constants";

const Carousel = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <section className="py-5 mx-auto scroller-container flex flex-col justify-center items-center screen700">
      <p className="text-fc-3 text-[1.75rem] text-center font-ff-3 font-light uppercase" id="our-clients">
        Companies we&apos;ve proudly work with:
      </p>
      <div className="scroller" data-direction="left" data-speed="slow">
        <div className="tag-list scroller__inner">
          {carousel.map((logo) => (
            <img key={logo.id} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
