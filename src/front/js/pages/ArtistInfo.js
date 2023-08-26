import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../component/Navbar.js'; // Adjust the path
import TopArtistsStyles from '../../styles/TopArtistsStyles.css';

const ArtistInfo = () => {
  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    // Replace with your Spotify API endpoint and access token
    const spotifyApiUrl = 'https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4';
    const accessToken = 'BQAYeqR_2gRS87A8uTlJfzLSERR__vDnpmjbJBaPIVvKq4heGXZNv8WDJsDbOJ5Ge0KSLK2ZjT95PsyfIpYJPuitFiLIh4EcaVCx5NZZulDfw__QAicxuaAdzVK6Wcuc0Lzu7obDXtsQ3t6pZg_zApz6cAb9XbLVxjnNGJMHXt_tIHDIKgdVN7KnmjvplADICVMbAOR2XW4uE7_htlRI3cPOI9epG3ef';

    axios.get(spotifyApiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(response => {
      setArtistData(response.data);
    })
    .catch(error => {
      console.error('Error fetching artist data:', error);
    });
  }, []);

  return (
    <div>
      

      <Navbar />
      <h1>Artist Information</h1>
     
      {artistData ? (
        <div>
          <h2>{artistData.name}</h2>
          <p>Followers: {artistData.followers.total}</p>
          <p>Genres: {artistData.genres.join(', ')}</p>
          <img src={artistData.images[0].url} alt={`${artistData.name} Thumbnail`} />
        </div>
      ) : (
        <p>Loading artist information...</p>
      )}
    </div>
  );
};

export default ArtistInfo;
