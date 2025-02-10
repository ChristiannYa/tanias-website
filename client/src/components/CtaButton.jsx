import PropTypes from 'prop-types';

const CtaButton = ({ simpleText, type, disabled, fontFamily }) => {
  return (
    <button
      className={`cssbuttons-io-button ${fontFamily}`}
      type={type}
      disabled={disabled}
    >
      {simpleText}
      <div className="icon">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="white"
          ></path>
        </svg>
      </div>
    </button>
  );
};

CtaButton.propTypes = {
  simpleText: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  fontFamily: PropTypes.string.isRequired,
};

export default CtaButton;
