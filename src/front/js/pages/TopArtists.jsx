import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TopArtists = () => {
  const artistIds = ['3TVXtAsR1Inumwj472S9r4', '4q3ewBCX7sLwd24euuV69X','06HL4z0CvFAxyc27GXpf02','1Xyo4u8uXC1ZmMpatF05PJ','6eUKZXaKkcviH0Ku9w2n3V','1uNFoZAHBGtllmzznpCI3s','66CXWjxzNUsdJxJ2JdwvnR','3Nrfpe0tUJi4K4DXYWgMUX','246dkjvS1zLTtiykXe5h60','6qqNVTkY8uBg9cP3Jd7DAH']; // Add more artist IDs as needed
  const accessToken = 'BQDG37afMm5mRKrzBPRhiI2vyFiYiyKbjjWq0PTqVBlYHwQz6QSTELC-Pv9IpT9boK96OUDRYSJP0eUnVYSTmKhzDJDUvY7JYdW79MFqVzvzdVz5IVGFRt5Q7o_G0ZUXuiAzwAulMq5NixLC9OXsun9vjQajFU1xTfzeJsiewdMe7CtmOwhlonX9r8BgkOWA96OhsRxo80M7FFXNlzQV7CI9OWR2wzTy'; // Replace with your Spotify access token

  const [artistsData, setArtistsData] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const fetchAllArtistDetails = async () => {
      const artistsDetails = await Promise.all(
        artistIds.map(async (artistId) => {
          try {
            const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });

            const topTracksResponse = await axios.get(
              `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`,
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );

            const artistInfo = response.data;
            const topTracks = topTracksResponse.data.tracks;

            return {
              id: artistId,
              name: artistInfo.name,
              image: artistInfo.images[0]?.url || '',
              topTracks: topTracks,
            };
          } catch (error) {
            console.error('Error fetching artist details:', error);
            return null;
          }
        })
      );

      setArtistsData(artistsDetails.filter((artist) => artist !== null));
    };

    fetchAllArtistDetails();
  }, []);

  const playTrack = (trackUrl) => {
    if (currentTrack) {
      currentTrack.pause();
      currentTrack.currentTime = 0;
    }
    const audioPlayer = new Audio(trackUrl);
    audioPlayer.play();
    setCurrentTrack(audioPlayer);
  };

  return (
    <div>
      <Navbar />
      <h1>Top Artists to Get You Started</h1>
      <Link to='/LandingPage'>Home</Link>
      <h2 className="sub-header">
        Curated by the HYPNOS Team and Currently Trending
      </h2>

      <div className="container mt-3">
        <div className="row">
          {artistsData.map((artist) => (
            <div key={artist.id} className="col-md-6 mb-4">
              <div className="card">
                <img src={artist.image} className="card-img-top" alt={artist.name} />
                <div className="card-body">
                  <h5 className="card-title">{artist.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Top Tracks</h6>
                  <ul className="track-list">
                    {artist.topTracks.map((track, index) => (
                      <li
                        key={index}
                        className="list-group-item"
                        onClick={() => playTrack(track.preview_url)}
                        style={{ cursor: 'pointer' }}
                      >
                        {track.name}
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
