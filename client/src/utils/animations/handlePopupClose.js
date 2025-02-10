export const handlePopupClose = (onClose) => {
  const overlay = document.querySelector('.popup-overlay');
  const content = document.querySelector('.popup-content');

  overlay.classList.add('closing');
  content.classList.add('closing');

  setTimeout(onClose, 300);
};
