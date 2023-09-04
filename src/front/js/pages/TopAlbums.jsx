import React, { useState, useEffect } from 'react';
import SpotifyEmbed from '../component/SpotifyEmbed.jsx'; // Update the path to the SpotifyEmbed component

const TopAlbums = () => {
  

  return (
    <div>
      <h2>Top albums </h2>
      <SpotifyEmbed uri="3RQQmkQEvNCY4prGKE6oc5" />
      <SpotifyEmbed uri="3T4tUhGYeRNVUGevb0wThu" />
      <SpotifyEmbed uri="35dut3ICqF3NEDkjxfzJJ1" />
      <SpotifyEmbed uri="4g1ZRSobMefqF6nelkgibi" />
      

      
      
    </div>
  );
};

export default TopAlbums;
