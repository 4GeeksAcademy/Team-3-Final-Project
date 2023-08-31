import React from 'react';

const MusicPlayer = ({ trackUrl }) => {
  return (
    <div>
      <h2>Music Player</h2>
      <audio controls>
        <source src={trackUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;
