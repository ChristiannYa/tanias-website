import { Link } from "react-router-dom";
import CtaButton from "../../components/CtaButton";

const Card = () => {
  const handleInteraction = (e) => {
    const card = e.currentTarget.querySelector('.tilting-card-content');
    const rect = e.currentTarget.getBoundingClientRect();

    // Coordinates for both mouse and touch events
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 2.5;
    const rotateY = (x - centerX) / 2.5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleLeave = (e) => {
    const card = e.currentTarget.querySelector('.tilting-card-content');
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  return (
    <section className="screen800 mx-auto colflex-center mt-12 py-2 gap-y-4">
      <div
        className="tilting-card-wrapper"
        onMouseMove={handleInteraction}
        onTouchMove={handleInteraction}
        onMouseLeave={handleLeave}
        onTouchEnd={handleLeave}
      >
        <div className="tilting-card-content">
          <div className="flex flex-col justify-end items-end">
            <h1 className="page-sub-subheading text-xl text-white">
              creative genius behind the lens
            </h1>
          </div>
        </div>
      </div>
      <div>
        <Link
          to={`${import.meta.env.BASE_URL}contact`}
          rel="noopener noreferrer"
        >
          <CtaButton />
        </Link>
      </div>
    </section>
  );
};

export default Card;
