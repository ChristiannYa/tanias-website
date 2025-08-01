import people from '../../assets/images/people';
import icons from '../../assets/icons';

const Intro = () => {
  return (
    <section className="flex flex-col justify-center items-center screen800">
      <div className="font-fCormorant text-fc-1 text-center text-2xl font-light w-full">
        <p>
          Hi, I am Tania! A professional photographer, specializing in{' '}
          <span className="gradient-text capitalize">
            corporate event photography,
          </span>{' '}
          <span className="gradient-text capitalize">
            real estate photography,
          </span>{' '}
          <span className="gradient-text capitalize">
            professional headshots,
          </span>{' '}
          and <span className="gradient-text capitalize">XV.</span>
        </p>
        <p>
          I have a <span className="underlined-1">passion</span> for capturing
          candid, authentic moments that tell a story, and I am here to make
          your vision a reality!
        </p>
        <p>
          Every single photoshoot inspires me to tailor very unique{' '}
          <span className="underlined-1">photos</span>.
        </p>
        <p>
          Take a look around and explore my galleries. I am excited to create
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
        <p className="small-text text-fc-1 text-center text-lg">
          &quot;Photography is the art of freezing time, keeping the essence of
          that very moment beyond life.&quot; <br />- Tania Gutti
        </p>
        <div className="my-4">
          <p className="small-text text-center font-ff-2 text-xs text-fc-2">
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
