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
          As a skilled <span className="gradient-text">videographer</span> and{' '}
          <span className="gradient-text">content creator</span>, Natalie is
          ready to work with you to perfectly craft engaging content that aligns
          with your brand&apos;s vision. Whether your are looking for{' '}
          <span className="gradient-text">
            behind the scenes footage, cinematic films, social media content, or
            highlight videos
          </span>
          , she will ensure your project stands out, her creativity and
          expertise will elevate your brand and captivate your audience.{' '}
          <span className="gradient-text">Contact her</span> today for more
          details about custom packages and how she can bring your vision to
          life.
        </p>
      </div>
      <div className="flex justify-center py-4">
        <Link
          to={`${import.meta.env.BASE_URL}contact`}
          rel="noopener noreferrer"
        >
          <CtaButton />
        </Link>
      </div>
    </section>
  );
};

export default Intro;
