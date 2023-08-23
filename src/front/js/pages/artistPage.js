import React, { useEffect, useState } from 'react';
import './artistPageStyle.css'; // Import your CSS file

const Profile = ({ artistId, accessToken }) => {
  const [artistInfo, setArtistInfo] = useState(null);

  useEffect(() => {
    const apiEndpoint = `https://api.spotify.com/v1/artists/${artistId}`;
    fetch(apiEndpoint, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => response.json())
    .then(data => {
      setArtistInfo(data);
    })
    .catch(error => {
      console.error('Error fetching artist details:', error);
    });
  }, [artistId, accessToken]);

  if (!artistInfo) {
    return null; // Handle loading state
  }

  return (
    <div className="profile-wrapper">
      <div className="profile-image">
        <img id="artistImage" src={artistInfo.images[0].url} alt="Artist Image" />
        <div className="temp-overlay one"></div>
        <div className="temp-overlay two"></div>
      </div>
      <div className="profile-username">
        <h1 id="artistName">{artistInfo.name}</h1>
        <p>Followers: <span id="artistFollowers">{artistInfo.followers.total}</span></p>
        <p>Genres: <span id="artistGenres">{artistInfo.genres.join(', ')}</span></p>
      </div>
    </div>
  );
};

export default Profile;
