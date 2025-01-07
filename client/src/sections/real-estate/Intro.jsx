const Intro = () => {
  return (
    <section className="screen1200 mx-auto colflex-center text-center">
      <h1 className="capitalize page-subheading gradient-text">
        standard and deluxe packages available
      </h1>
      <div className='page-info'>
        <p>
          At TG photography, we specialize in providing professional real estate
          photography services for <span className='gradient-text'>residential</span> and 
          {' '}<span className="gradient-text">commercial</span> properties, so whether 
          you&apos;re selling a cozy home, listing an Airbnb or promoting a business, 
          we&apos;ve got you covered.
        </p>
        <p>Contact us today to schedule a free consultation.</p>
      </div>
    </section>
  );
};

export default Intro;
