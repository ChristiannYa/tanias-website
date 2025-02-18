import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Update to show the pointer again
const UI_VERSION = '2.0';

const PointingHandEmoji = ({ targetId }) => {
  const [isVisible, setIsVisible] = useState(() => {
    const savedVersion = localStorage.getItem('pointerVersion');
    return savedVersion !== UI_VERSION;
  });

  useEffect(() => {
    const handleClick = () => {
      if (targetId) {
        setIsVisible(false);
        localStorage.setItem('pointerVersion', UI_VERSION);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [targetId]);

  if (!isVisible) return null;

  return (
    <div
      className="text-center absolute left-20 scale-75 max-md:-ml-5"
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
