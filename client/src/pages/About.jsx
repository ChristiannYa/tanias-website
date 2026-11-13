import Intro from "../sections/about/Intro";
import Carousel from "../sections/about/Carousel";

const About = () => {
    return (
        <div className="flex flex-col">
            <div className="bg-white py-2 flex flex-col justify-center items-center">
                <Intro />
            </div>
            <Carousel />
        </div>
    );
};

export default About;
