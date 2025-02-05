import { useEffect, useState } from 'react';

const useRecaptchaScript = () => {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if the script is already in the document
    const scriptId = 'recaptcha-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;

      // Set up the onload event for the script
      script.onload = () => {
        setIsScriptLoaded(true);  // Mark script as loaded when it's ready
      };

      document.head.appendChild(script);
    }

    // Cleanup function to remove the script if the component unmounts
    return () => {
      const script = document.getElementById(scriptId);
      if (script) {
        script.remove();
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY]);

  return isScriptLoaded;
};

export default useRecaptchaScript;