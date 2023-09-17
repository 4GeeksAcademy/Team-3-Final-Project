import React from 'react';

const SpotifyEmbed = ({ type, uri }) => {
  const embedSrc =
    type === 'album'
      ? `https://open.spotify.com/embed/album/${uri}?utm_source=generator&theme=0`
      : type === 'playlist'
      ? `https://open.spotify.com/embed/playlist/${uri}?utm_source=generator&theme=0`
      : '';

  return (
    <iframe
      className="footer"
      style={{ borderRadius: '12px' }}
      src={embedSrc}
      width="50%"
      height="650"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
};

export default SpotifyEmbed;
