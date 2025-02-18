import Slideshow from '../sections/home/Slideshow';
import SlideshowText from '../sections/home/SlideshowText';

const Home = () => {
  return (
    <div className="wh-screen overflow-hidden fixed inset-0 touch-none">
      <Slideshow />
      <SlideshowText />
    </div>
  );
};

export default Home;
