import icons from "../assets/icons";
// import Translate from '../components/Translate';

const Footer = () => {
  return (
    <footer className="shadow-bs-2 colflex-center w-full h-fit py-6">
      <div className="rowflex-center gap-x-16 gap-y-3 max-sm:flex-col">
        <aside className="colflex-center gap-y-2 gap-x-1 max-sm:flex-row max-sm:gap-x-3">
          <a
            href="https://www.instagram.com/taniaguttiphotography"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icons.instagram} alt="" width={24} height={24} />
          </a>
          <img src={icons.txFlag} alt="" width={30} height={30} />
          <a href="tel:+17138101895" className="sm:hidden">
            <img src={icons.phone} alt="" width={24} height={24} />
          </a>
        </aside>
        <div className="colflex-center gap-1">
          <p className="footer-text capitalize">
            ©2025 tania gutti photography
          </p>
          <p className="footer-text capitalize">all rights reserved</p>
        </div>
        <div className="colflex-center">
          <p className="footer-text">Designed by</p>
          <a
            href="https://christianwebdev.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="footer-text capitalize">chriswebdev</p>
          </a>
        </div>
        {/* <Translate /> */}
      </div>
    </footer>
  );
};

export default Footer;
