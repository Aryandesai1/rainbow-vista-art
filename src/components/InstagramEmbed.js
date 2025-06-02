import { useEffect } from "react";

const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="my-4"
      dangerouslySetInnerHTML={{
        __html: `<blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14"></blockquote>`,
      }}
    />
  );
};

export default InstagramEmbed;
