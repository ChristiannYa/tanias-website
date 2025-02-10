import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import icons from '../assets/icons';
import { navLinks } from '../constants';
import { useState, useEffect } from 'react';
import CustomPointer from './CustomPointer';

const Nav = ({ isFixed }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const location = useLocation();
  const currentPage = navLinks.find((link) => link.path === location.pathname);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    // Tab title
    document.title = currentPage ? `${currentPage.title}` : 'TG';
  }, [location, currentPage]);

  return (
    <header
      className={`bg-slate-800 z-50 ${
        isFixed ? 'page-header page-header-fixed' : 'page-header'
      }`}
    >
      <div
        id="links-container"
        className={isNavVisible ? 'active' : ''}
        onClick={toggleNav}
      >
        <img src={icons.tgLogo} alt="" loading="lazy" className="tg-logo" />

        <nav id="links-wrapper" className="capitalize">
          {navLinks
            .filter((link) => link.path !== '*')
            .map((link) => (
              <p key={link.id} className="link">
                {link.external ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    {link.label}
                  </Link>
                )}
              </p>
            ))}
        </nav>
        <CustomPointer targetId="links-container" />
      </div>
      {/* Page title */}
      {currentPage?.showTitle && (
        <div className="page-title">{currentPage.title || 'Welcome'}</div>
      )}
    </header>
  );
};

Nav.propTypes = {
  isFixed: PropTypes.bool.isRequired,
};

export default Nav;
