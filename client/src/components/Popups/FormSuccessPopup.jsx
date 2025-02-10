import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { getDisplayValue } from '../../utils/contact-form/formHelpers';
import { handlePopupClose } from '../../utils/animations/handlePopupClose';
import {
  lockScroll,
  unlockScroll,
} from '../../utils/miscellaneous/handleLockScroll';
import contact from '../../constants/contact';

const FormSuccessPopup = ({ submittedData, onClose, isVisible }) => {
  useEffect(() => {
    if (isVisible) {
      lockScroll();
    }
    return () => unlockScroll();
  }, [isVisible]);

  return (
    <div className="blur-3 popup-overlay">
      <div className="popup-content">
        <h2 className="font-ff-3 text-xl text-acc-3">
          Message sent successfully!
        </h2>
        <div className="mt-1">
          {Object.entries(submittedData).map(([key, value]) => (
            <div key={key} className="flex gap-x-1">
              <h1 className="font-ff-3 text-fc-3 text-xl">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </h1>
              <p className="font-ff-3 text-slate-400 text-lg">
                {getDisplayValue(key, value, contact)}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={() => handlePopupClose(onClose)}
          className="px-4 py-2 bg-acc-3 hover:bg-acc-3-hover rounded-md font-ff-3"
        >
          ok
        </button>
      </div>
    </div>
  );
};

FormSuccessPopup.propTypes = {
  submittedData: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default FormSuccessPopup;
