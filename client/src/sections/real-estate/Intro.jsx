const Intro = () => {
	return (
		<section className="screen1200 mx-auto colflex-center text-center">
			<h1 className="uppercase page-subheading gradient-text !font-fBodoni !font-[700]">
				Make Your Listing Stand Out
			</h1>
			<div className="page-info">
				<p>
					At TG photography, we specialize in providing professional{' '}
					<span className="gradient-text">interior and exterior</span>{' '}
					photography services for{' '}
					<span className="gradient-text">residential and commercial</span>{' '}
					properties. From <span className="gradient-text font-[800]">Har</span> and { ' ' }
					<span className="gradient-text font-[800]">Zillow</span> listings to <span className="gradient-text">Airbnb</span> rentals and
					business properties, we capture your space with clean,
					high-quality images designed to showcase the property at its best.
				</p>
				<p>Contact us today to schedule a free consultation.</p>
			</div>
		</section>
	);
};

export default Intro;
