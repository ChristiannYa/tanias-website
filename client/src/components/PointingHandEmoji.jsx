import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PointingHandEmoji = ({ targetId }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.closest('#links-container')) {
        setIsVisible(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="text-center absolute left-20 scale-75"
      data-target={targetId}
    >
      <button className="button">
        <div className="line one">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
        <div className="line two">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
        <div className="line three">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
        <div className="line four">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>

        <div className="line five">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>

        <div className="line six">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>

        <div className="line seven">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
      </button>
    </div>
  );
};

PointingHandEmoji.propTypes = {
  targetId: PropTypes.string.isRequired,
};

export default PointingHandEmoji;
