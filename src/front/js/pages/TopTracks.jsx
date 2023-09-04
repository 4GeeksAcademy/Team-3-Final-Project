import React from 'react';
import SpotifyEmbed from '../component/SpotifyEmbed.jsx';

const TopTracks = () => {
  return (
    <div>
      <h1>Top 50 Tracks From around the world</h1>
      <SpotifyEmbed type="playlist" uri="1KNl4AYfgZtOVm9KHkhPTF" />
    </div>
  );
};

export default TopTracks;
