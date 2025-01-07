import Intro from "../sections/about/Intro";
import Carousel from "../sections/about/Carousel";

const About = () => {
  return (
    <div className="min-h-screen py-2 colflex-center">
      <Intro/>
      <Carousel/>
    </div>
  )
}

export default About