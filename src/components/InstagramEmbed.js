import React, { useEffect } from 'react';

const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    // Ensure the embed script is present and processed
    const loadInstagramEmbed = () => {
      if (!window.instgrm) {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        script.onload = () => window.instgrm.Embeds.process();
        document.body.appendChild(script);
      } else {
        window.instgrm.Embeds.process();
      }
    };

    loadInstagramEmbed();
  }, [url]);

  return (
    <div className="ratio ratio-1x1">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#fff',
          border: '0',
          margin: '0 auto',
          maxWidth: '540px',
          width: '100%',
        }}
      ></blockquote>
    </div>
  );
};

export default InstagramEmbed;
