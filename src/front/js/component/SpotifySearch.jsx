import React, { useState } from 'react';
import { useAccessToken } from '../AccessTokenContext.jsx';

const SpotifySearch = ({ onSelectTrack }) => {
  const { accessToken } = useAccessToken();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async () => {
    if (!accessToken) {
      console.error('Access token is missing');
      return;
    }

    const searchEndpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchTerm)}&type=track`;

    try {
      const response = await fetch(searchEndpoint, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.tracks.items);
      } else {
        console.error('Failed to fetch search results');
      }
    } catch (error) {
      console.error('Error fetching search results', error);
    }
  };

  const handleTrackSelect = (trackUrl) => {
    onSelectTrack(trackUrl);
  };

  return (
    <div>
      <h2>Spotify Search</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for tracks..."
      />
      <button onClick={handleSearch}>Search</button>

    {searchResults && (
        <div>
            <h3>Search Results</h3>
            <ul>
            {searchResults.map((track) => (
                <li key={track.id}>
                <button onClick={() => handleTrackSelect(track.preview_url)}>
                    Play
                </button>
                {track.name} - {track.artists[0].name}
                </li>
            ))}
            </ul>
        </div>
    )}
    </div>
  );
};

export default SpotifySearch;
