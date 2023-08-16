import React, { useState } from 'react';
import SpotifyAuth from './component/SpotifyAuth.jsx';
import SpotifySearch from './component/SpotifySearch.jsx';
import MusicPlayer from './component/MusicPlayer.jsx';
import ArtistInfo from './component/ArtistInfo.jsx'; // Adjust the path as needed

const App = () => {
    const [selectedTrackUrl, setSelectedTrackUrl] = useState('');
  
    const handleSelectTrack = (trackUrl) => {
      setSelectedTrackUrl(trackUrl);
    };
  
    return (
      <div>
        <h1>My Spotify App</h1>
        <SpotifyAuth
          clientId={process.env.REACT_APP_SPOTIFY_CLIENT_ID}
          clientSecret={process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}
        />
        <ArtistInfo />
        <SpotifySearch onSelectTrack={handleSelectTrack} />
        {selectedTrackUrl && <MusicPlayer trackUrl={selectedTrackUrl} />}
      {/* Other components that need the access token */}
      
    </div>
  );
};

export default App;
