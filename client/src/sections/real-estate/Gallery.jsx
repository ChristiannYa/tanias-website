import { useRef, useEffect, useState, useMemo } from "react";
import { gsap } from "gsap";
import { reImages } from "../../constants/real-estate";

const getNumCols = (width) => {
	if (width > 1024) return 3;
	if (width > 684) return 2;
	if (width > 480) return 1;
	return 1;
};

const Gallery = () => {
	const containerRef = useRef(null);
	const [numCols, setNumCols] = useState(() => getNumCols(window.innerWidth));
	const isLargeScreen = numCols >= 3;

	useEffect(() => {
		const handleResize = () => {
			setNumCols(getNumCols(window.innerWidth));
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const columns = useMemo(() => {
		const cols = Array.from({ length: numCols }, () => []);
		reImages.forEach((img, i) => cols[i % numCols].push(img));
		return cols;
	}, [numCols]);

	useEffect(() => {
		if (!containerRef.current) return;

		const images = Array.from(containerRef.current.querySelectorAll(".rp"));

		images.forEach((img) => {
			gsap.set(img, { scale: 0.6, opacity: 0 });
		});

		const animatedElements = new Map();

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !animatedElements.get(entry.target)) {
						const index = images.indexOf(entry.target);
						const staggerDelay = isLargeScreen ? index * 0.02 : 0;

						gsap.to(entry.target, {
							opacity: 1,
							scale: 1,
							duration: 0.8,
							delay: staggerDelay,
							onComplete: () => {
								animatedElements.set(entry.target, true);
								observer.unobserve(entry.target);
							},
						});
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -10% 0px",
			}
		);

		images.forEach((img) => {
			animatedElements.set(img, false);
			observer.observe(img);
		});

		return () => {
			observer.disconnect();
			animatedElements.clear();
		};
	}, [isLargeScreen, columns]);

	return (
		<section className="screen1200 mx-auto">
			<div className="flex gap-4" ref={containerRef}>
				{columns.map((col, ci) => (
					<div key={ci} className="flex flex-col gap-4 flex-1">
						{col.map((img, ind) => (
							<img
								key={ind}
								src={img.default}
								className="shadow-bs-1 rp w-full"
								alt=""
							/>
						))}
					</div>
				))}
			</div>
		</section>
	);
};

export default Gallery;