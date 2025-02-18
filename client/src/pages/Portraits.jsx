import Slideshow from '../sections/portraits/Slideshow';
import BookButton from '../components/BookButton';

const Portraits = () => {
  return (
    <div className="colflex-center gap-y-8">
      <Slideshow />
      <div className="mb-8">
        <BookButton />
      </div>
    </div>
  );
};

export default Portraits;
