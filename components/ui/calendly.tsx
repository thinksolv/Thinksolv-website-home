import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="mt-6">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/sam-thinksolv/30min?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=e91c24"
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
    </div>
  );
}

export default MyComponent;
