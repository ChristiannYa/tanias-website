import { portraits } from '../../constants';
import { headshots } from '../../constants';
import SlideShowContainer from './SlideShowContainer';
import { useSlideshow } from './hooks/useSlideshow';

const Slideshow = () => {
  const slideshow1 = useSlideshow(portraits);
  const slideshow2 = useSlideshow(headshots);

  return (
    <div className="flex flex-col gap-y-16 mt-8 lg:flex-row lg:gap-x-8">
      <SlideShowContainer
        images={portraits}
        currentSlide={slideshow1.currentSlide}
        onPrevClick={slideshow1.prevSlide}
        onNextClick={slideshow1.nextSlide}
        title="portraits"
      />
      <SlideShowContainer
        images={headshots}
        currentSlide={slideshow2.currentSlide}
        onPrevClick={slideshow2.prevSlide}
        onNextClick={slideshow2.nextSlide}
        title="Headshots"
      />
    </div>
  );
};

export default Slideshow;
