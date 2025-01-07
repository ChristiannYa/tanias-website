import { Link } from 'react-router-dom';

const BookButton = () => {
  return (
    <div className="barcode-wrap">
      <Link
        id="barcode-link"
        to="https://form.jotform.com/Thaniagutti/photography-session-booking-form"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="barcode-text">Book Now</span>
      </Link>
    </div>
  );
};

export default BookButton;
