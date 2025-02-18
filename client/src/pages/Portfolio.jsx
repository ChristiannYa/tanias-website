import Slideshow from '../sections/portfolio/Slideshow';
import BookButton from '../components/BookButton';

const Portfolio = () => {
  return (
    <div className="colflex-center gap-y-8">
      <Slideshow />
      <div className="mb-8">
        <BookButton />
      </div>
    </div>
  );
};

export default Portfolio;
