import React, { useEffect, useState } from 'react';
import { useAccessToken } from '../AccessTokenContext.jsx';

const ArtistInfo = () => {
  const { accessToken } = useAccessToken();
  const [artistInfo, setArtistInfo] = useState(null);

  useEffect(() => {
    const fetchArtistInfo = async () => {
      try {
        const response = await fetch("https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb", {
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setArtistInfo(data);
        } else {
          console.error("Failed to fetch artist info");
        }
      } catch (error) {
        console.error("Error fetching artist info", error);
      }
    };

    fetchArtistInfo();
  }, [accessToken]);

  return (
    <div>
      {artistInfo ? (
        <div>
          <h2>{artistInfo.name}</h2>
          <p>Genres: {artistInfo.genres.join(', ')}</p>
          <p>Popularity: {artistInfo.popularity}</p>
          <img src={artistInfo.images[0].url} alt={artistInfo.name} />
        </div>
      ) : (
        <p>Loading artist info...</p>
      )}
    </div>
  );
};

export default ArtistInfo;
