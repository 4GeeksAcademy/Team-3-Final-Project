import React, { useState, useEffect } from 'react';

const TopAlbums = () => {
  const [album, setAlbum] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const accessToken = 'BQCczGMmPLN9MBfF6GoAqim8bbJH5pj4SIoS3iTSuyo9B8Vjp87dUFYOHsO2aVzpeDLJBGeTpYut0V2B0_Eqfm7B8Xw-VSQs_xzRdKcC4Ow1ygXi5DLE_hlW-cIK0Pqtf-6JpwbR0Pt0E6dFfAhVwF0QiIrtx4G-FKjVsMOBFAVVr6jn6NqL_YCKH3evqPYEnPE_4973LAe7eS6TXPQ5sw9r8GMlHeG0'; // Replace with your Spotify access token
    const albumId = '3RQQmkQEvNCY4prGKE6oc5';

    fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response.json())
      .then(data => setAlbum(data))
      .catch(error => console.error('Error fetching album:', error));
  }, []);

  const playTrack = (track) => {
    if (currentTrack && currentTrack.id === track.id) {
      // Pause if the same track is pressed again
      setCurrentTrack(null);
    } else {
      setCurrentTrack(track);
    }
  };

  if (!album) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{album.name}</h2>
      <p>Artist: {album.artists.map(artist => artist.name).join(', ')}</p>
      <p>Release Date: {album.release_date}</p>
      <img src={album.images[0].url} alt={`Album cover for ${album.name}`} />
      <h3>Track List:</h3>
      <ul>
        {album.tracks.items.map(track => (
          <li key={track.id}>
            {track.name} - {track.duration_ms} ms
            <button onClick={() => playTrack(track)}>Play</button>
          </li>
        ))}
      </ul>
      {currentTrack && (
        <div>
          <h4>Now Playing: {currentTrack.name}</h4>
          <audio controls autoPlay src={currentTrack.preview_url}>
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default TopAlbums;
