import Intro from "../sections/videography/Intro";
import Card from "../sections/videography/Card";

const Videography = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col py-2">
      <Card />
      <Intro />
    </div>
  );
}

export default Videography