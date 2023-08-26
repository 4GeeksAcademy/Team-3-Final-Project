import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar.js'; // Adjust the path

const artistIds = ['3TVXtAsR1Inumwj472S9r4', '0c173mlxpT3dSFRgMO8XPh']; // Add more artist IDs as needed
const accessToken = 'BQBEGA1Vx9--X4cA_Exa_alPPy5yGALsSBikUp32CIOXNZCZJ_HHqNjNYFl3LPakl29ZkNfY0anTQ3WHxVI5W3bG7aMtSaVco_QN45DS1H9rUwE_bXRXfWR6ndsSrI-VTwd7OHFYHjaDthE6oLW0pWAT0FCIXSECxEyT_VPOR0q7jrq0PmJGczd2rMX90_2SooSMb1bZ-ZKK15G9FT-vNHAL6yfbE4pi'; // Replace with your Spotify access token

const TopArtists = () => {
  const [artistsData, setArtistsData] = useState([]);
  const [playTrack, setPlayTrack] = useState(null);

  useEffect(() => {
    const fetchArtistDetails = async (artistId) => {
      const artistEndpoint = `https://api.spotify.com/v1/artists/${artistId}`;
      const topTracksEndpoint = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`;

      try {
        const [artistResponse, topTracksResponse] = await Promise.all([
          fetch(artistEndpoint, {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          }),
          fetch(topTracksEndpoint, {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          })
        ]);

        const artistData = await artistResponse.json();
        const topTracksData = await topTracksResponse.json();

        return {
          id: artistId,
          name: artistData.name,
          image: artistData.images[0]?.url || '',
          topTracks: topTracksData.tracks
        };
      } catch (error) {
        console.error('Error fetching artist details:', error);
        return null;
      }
    };

    const fetchAllArtistDetails = async () => {
      const artistsDetails = await Promise.all(artistIds.map(fetchArtistDetails));
      setArtistsData(artistsDetails.filter(artist => artist !== null));
    };

    fetchAllArtistDetails();
  }, []);

  useEffect(() => {
    if (playTrack) {
      const audioPlayer = new Audio(playTrack);
      audioPlayer.play();

      return () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
      };
    }
  }, [playTrack]);

  return (
    <div>
      <Navbar />
      <h1>Top Artists to Get You Started</h1>
      <h2 className="sub-header">
        Curated by the HYPNOS Team and Currently Trending
      </h2>

      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {artistsData.map(artist => (
            <div key={artist.id} className="col">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">{artist.name}</h1>
                  <img src={artist.image} className="card-img-top" alt="Artist" />
                  <h2 className="card-subtitle mb-2 text-muted">Top Tracks</h2>
                  <ul className="track-list">
                    {artist.topTracks.map(track => (
                      <li key={track.id} className="list-group-item">
                        <button onClick={() => setPlayTrack(track.preview_url)}>
                          {track.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {artistsData.map(artist => (
            <div key={artist.id} className="col">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">{artist.name}</h1>
                  <img src={artist.image} className="card-img-top" alt="Artist" />
                  <h2 className="card-subtitle mb-2 text-muted">Top Tracks</h2>
                  <ul className="track-list">
                    {artist.topTracks.map(track => (
                      <li key={track.id} className="list-group-item">
                        <button onClick={() => setPlayTrack(track.preview_url)}>
                          {track.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {artistsData.map(artist => (
            <div key={artist.id} className="col">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">{artist.name}</h1>
                  <img src={artist.image} className="card-img-top" alt="Artist" />
                  <h2 className="card-subtitle mb-2 text-muted">Top Tracks</h2>
                  <ul className="track-list">
                    {artist.topTracks.map(track => (
                      <li key={track.id} className="list-group-item">
                        <button onClick={() => setPlayTrack(track.preview_url)}>
                          {track.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopArtists;
