import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { handlePopupClose } from '../../utils/animations/handlePopupClose';
import {
  lockScroll,
  unlockScroll,
} from '../../utils/miscellaneous/handleLockScroll';

const FormErrorPopup = ({ error, onClose, isVisible }) => {
  useEffect(() => {
    if (isVisible) {
      lockScroll();
    }
    return () => unlockScroll();
  }, [isVisible]);

  return (
    <div className="blur-3 popup-overlay">
      <div className="popup-content blur-3 px-6 py-4">
        <h2 className="font-ff-3 text-xl text-red-600">Error</h2>
        <div className="text-fc-3 font-ff-3 tracking-wide mt-1">- {error}</div>
        <button
          onClick={() => handlePopupClose(onClose)}
          className="mt-2 px-2 py-1 bg-white hover:bg-neutral-200 rounded-md font-ff-3"
        >
          Ok
        </button>
      </div>
    </div>
  );
};

FormErrorPopup.propTypes = {
  error: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default FormErrorPopup;
