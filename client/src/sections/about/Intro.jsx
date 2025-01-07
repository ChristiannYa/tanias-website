import people from '../../assets/images/people';
import icons from '../../assets/icons';

const Intro = () => {
  return (
    <section className="colflex-center screen800">
      <div className="w-full">
        <h2 className="page-subheading text-fc-3">Hi, I am Tania Gutti</h2>
        <p className="page-info text-fc-3">
          A professional photographer based in Houston, Texas. I specialize in{' '}
          <span className="gradient-text">corporate event photography</span>,{' '}
          <span className="gradient-text">real estate photography</span>,{' '}
          <span className="gradient-text">portraits</span>, and{' '}
          <span className="gradient-text">professional headshots</span>.
        </p>
        <p className="page-info text-fc-3">
          I have a <span className="underlined-1">passion</span> for capturing
          candid, authentic moments that tell a story, and I am here to make
          your vision a reality!
        </p>
        <p className="page-info text-fc-3">
          Every single photoshoot inspires me to tailor very unique{' '}
          <span className="underlined-1">photos</span>.
        </p>
        <p className="page-info text-fc-3">
          Take a look around, explore my galleries, and let&rsquo;s create
          something amazing together!
        </p>
      </div>

      <div className="colflex-center screen400">
        <img
          src={people.tania}
          alt="lead photographer"
          loading="lazy"
          className="w-[220px] max-md:w-[180px] my-4 shadow-bs-1"
        />
        <p className="small-text text-fc-3 text-center text-lg">
          &quot;Photography is the art of freezing time, keeping the essence of
          that very moment beyond life.&quot; <br />- Tania Gutti
        </p>
        <div className="my-4">
          <p className="small-text text-center font-ff-2 text-xs text-fc-3">
            Proud member of
          </p>
          <img
            src={icons.ppa}
            alt="Professional Photographers of America"
            className="w-32"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
