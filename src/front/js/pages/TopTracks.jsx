import React from 'react';
import SpotifyEmbed from '../component/SpotifyEmbed.jsx';
import CustomNavbar from '../component/CustomNavbar.js';
import '../../../front/styles/toptracks.css';

const TopTracks = () => {
  return (
    <div>
      <CustomNavbar></CustomNavbar>
      <h1 className="head">Top 50 Tracks From around the world</h1>
      <div className='contianer'>
      <SpotifyEmbed className="play" type="playlist" uri="1KNl4AYfgZtOVm9KHkhPTF" />
      </div>
    
     
    </div>
  );
};

export default TopTracks;
