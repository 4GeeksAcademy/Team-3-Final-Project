import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar.js';
import axios from 'axios';

const TopArtists = () => {
  const artistIds = ['3TVXtAsR1Inumwj472S9r4', '4q3ewBCX7sLwd24euuV69X','06HL4z0CvFAxyc27GXpf02','1Xyo4u8uXC1ZmMpatF05PJ']; // Add more artist IDs as needed
  const accessToken = 'BQACtbnLLzLVlHSvFNVzellHVCVV7AB2tyPUx2E8L5ty4Ow_4Z8xsYYBXltBJQi0oCMblYl531F4E2tL5zGKMtE-A8fAj1wfiTcAcXKA6GA2DWh9HOgLMIg3FqKZYuyQOhTi_5epOk3wAKqpk1MtHRftaZ78fguFaUE0b1bgMQgu100iOxgw3ByE_jltW7xBwGRywFSEQTRTEgC21ahbnDJuW2ZHM3vx'; // Replace with your Spotify access token

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
      <h2 className="sub-header">
        Curated by the HYPNOS Team and Currently Trending
      </h2>

      <div className="container mt-4">
        <div className="row">
          {artistsData.map((artist) => (
            <div key={artist.id} className="col-md-14 mb-6">
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
