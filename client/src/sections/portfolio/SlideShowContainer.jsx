import PropTypes from 'prop-types';

import icons from '../../assets/icons';

const SlideShowContainer = ({
  images,
  currentSlide,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className="colflex-center gap-x-4">
      <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative rowflex-center">
        {images.map((slide, index) => (
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

      <div className="flex gap-x-4 mt-6">
        <button onClick={onPrevClick} className="slideshow-button">
          <img src={icons.prev} width={21} height={21} alt="" />
        </button>

        <button onClick={onNextClick} className="slideshow-button">
          <img src={icons.next} width={21} height={21} alt="" />
        </button>
      </div>
    </div>
  );
};

SlideShowContainer.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      srcSet: PropTypes.objectOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  currentSlide: PropTypes.number.isRequired,
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};

export default SlideShowContainer;
