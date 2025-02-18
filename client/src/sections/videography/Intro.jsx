import { Link } from 'react-router-dom';
import CtaButton from '../../components/CtaButton';

const Intro = () => {
  return (
    <section className="screen800 mx-auto">
      <div className="page-subheading">
        <h1 className="gradient-text">meet natalie!</h1>
      </div>
      <div className="page-info text-fc-4">
        <p>
          Her creativity and expertise will elevate your brand and captivate
          your audience. Whether you&apos;re looking for{' '}
          <span className="gradient-text">
            cinematic films, social media content, behind the scenes footage, or
            highlight videos,{' '}
          </span>
          she will ensure your project stands out.{' '}
          <span className="gradient-text">Inquire today</span> to learn more
          about custom videography packages and how she can bring your vision to
          life.
        </p>
      </div>
      <div className="flex justify-center py-4">
        <Link
          to={`${import.meta.env.BASE_URL}contact`}
          rel="noopener noreferrer"
        >
          <CtaButton simpleText="Inquire" fontFamily="" />
        </Link>
      </div>
    </section>
  );
};

export default Intro;
