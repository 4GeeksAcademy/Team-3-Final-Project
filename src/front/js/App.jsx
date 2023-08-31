import React, { useState } from 'react';
import SpotifyAuth from './component/SpotifyAuth.jsx';
import Layout from "./layout";

; // Adjust the path as needed

const App = () => {
    const [selectedTrackUrl, setSelectedTrackUrl] = useState('');
  
    const handleSelectTrack = (trackUrl) => {
      setSelectedTrackUrl(trackUrl);
    };
  
    return (
      <div>
        <SpotifyAuth
          clientId={process.env.REACT_APP_SPOTIFY_CLIENT_ID}
          clientSecret={process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}
        />
        <Layout />
    </div>
  );
};

export default App;