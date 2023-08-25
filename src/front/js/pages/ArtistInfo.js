import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../component/Navbar.js'; // Adjust the path
import TopArtistsStyles from './TopArtistsStyles.css';

const ArtistInfo = () => {
  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    // Replace with your Spotify API endpoint and access token
    const spotifyApiUrl = 'https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4';
    const accessToken = 'BQBsEB2Sv27keagw9RbIjeRzvv7WL6OlGTYiWepv08fO3Jgmda3XghGOyI0tbn_Z1bFHHzarvjk8egq9Eod-rLSFXhpMxiJJrf1zoO3WcL_0ad7qT2evxlAgv0Gd9ofUTL2yhzGS2ucnmnwMkhwMioh0db241YvMCuR7asB4M7LO8YLwP7S46KylMIEg6Hcts5IJXxHGPShUPJJf3-0v64tXgg9sUNr9';

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
