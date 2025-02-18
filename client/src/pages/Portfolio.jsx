import Slideshow from '../sections/portfolio/Slideshow';
import BookButton from '../components/BookButton';
import Paragraph from '../sections/portfolio/Paragraph';

const Portfolio = () => {
  return (
    <div className="colflex-center gap-y-4">
      <Slideshow />
      <Paragraph />
      <div className="mb-8">
        <BookButton />
      </div>
    </div>
  );
};

export default Portfolio;
