import { useEffect } from 'react';
import icons from '../assets/icons';

const Translate = () => {
  useEffect(() => {
    if (!document.querySelector('script[src*="translate_a/element.js"]')) {
      const addScript = () => {
        const script = document.createElement('script');
        script.src =
          '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      };

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
          },
          'google_translate_element'
        );
      };

      addScript();
    }

    return () => {
      if (!document.getElementById('google_translate_element')) {
        delete window.googleTranslateElementInit;
      }
    };
  }, []);

  return (
    <div>
      <div id="google_translate_element" />
      <div className="colflex-center text-sm font-sans">
        <img src={icons.google} alt="Google" />
        <p className="text-white">Google Translate</p>
      </div>
    </div>
  );
};

export default Translate;
