
import { useEffect } from 'react';

const ScheduleCleanAndCheck = () => {
  useEffect(() => {
    // Load the Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.head.appendChild(script);

    // Set the page title
    document.title = 'Time for your Clean and Check!';

    // Apply the required styles to html and body
    document.documentElement.style.margin = '0';
    document.documentElement.style.height = '100%';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.margin = '0';
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';

    return () => {
      // Cleanup on unmount
      document.head.removeChild(script);
      document.documentElement.style.margin = '';
      document.documentElement.style.height = '';
      document.documentElement.style.overflow = '';
      document.body.style.margin = '';
      document.body.style.height = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/r/m659Bk"
      width="100%"
      height="100%"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title="Time for your Clean and Check!"
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        border: 0
      }}
    />
  );
};

export default ScheduleCleanAndCheck;
