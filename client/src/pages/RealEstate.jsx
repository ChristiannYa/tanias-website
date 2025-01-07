import Intro from "../sections/real-estate/Intro";
import Gallery from "../sections/real-estate/Gallery";
import BookButton from "../components/BookButton";
import WhyUs from "../sections/real-estate/WhyUs";

const RealEstate = () => {
  return (
    <div className="bg-white min-h-screen colflex-center gap-y-6 py-2">
      <Intro/>
      <Gallery/>
      <BookButton/>
      <WhyUs/>
    </div>
  )
}

export default RealEstate