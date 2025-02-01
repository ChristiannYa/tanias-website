import { Fragment, useEffect } from 'react';
import { packages } from '../../constants/index';

const Packages = () => {
  useEffect(() => {
    const blurDivs = document.querySelectorAll('.pck__blur');

    blurDivs.forEach((div) => {
      const img = div.querySelector('img');

      const loaded = () => {
        div.classList.add('loaded');
      };

      if (img.complete) {
        loaded();
      } else {
        img.addEventListener('load', loaded);
      }
    });
  }, []);

  return (
    <section className="pck">
      <div className="pck__grid">
        {packages.map((pck) => (
          <div key={pck.id} id={`${pck.id}`} className="pck__pck">
            <div>
              <h2 className="package-title capitalize text-center">
                {pck.title}
              </h2>
            </div>
            <div className="relative rounded-sm overflow-hidden shadow-bs-1">
              <div
                className="pck__blur"
                style={{ backgroundImage: `url(${pck.small})` }}
              >
                <img
                  src={pck.default}
                  id={`pck__${pck.id}-img`}
                  srcSet={`
                    ${pck.sizes[768].default} 768w,
                    ${pck.sizes[1280].default} 1280w,
                    ${pck.sizes[1920].default} 1920w
                  `}
                  sizes="(max-width: 768px) 768px, (max-width: 1280px) 1280px, 1920px"
                  alt={pck.title}
                  loading="lazy"
                />
              </div>
              <div className="package-desc blur-3 w-full rowflex-center gap-x-1 absolute bottom-0 left-0">
                {pck.desc.map((desc, index) => (
                  <Fragment key={index}>
                    <p>{desc}</p>
                    {index < pck.desc.length - 1 && <span>|</span>}
                  </Fragment>
                ))}
                <span>|</span>
                <p>${pck.price.toLocaleString()} usd</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
