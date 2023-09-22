import React, { useState, useEffect, useRef } from 'react';
import CustomNavbar from '../component/CustomNavbar.js';
import axios from 'axios';
import '../../styles/TopArtistsStyles.css';

const TopArtists = () => {
  const artistIds = ['3TVXtAsR1Inumwj472S9r4', '4q3ewBCX7sLwd24euuV69X','06HL4z0CvFAxyc27GXpf02','1Xyo4u8uXC1ZmMpatF05PJ','6eUKZXaKkcviH0Ku9w2n3V','1uNFoZAHBGtllmzznpCI3s','66CXWjxzNUsdJxJ2JdwvnR','3Nrfpe0tUJi4K4DXYWgMUX','246dkjvS1zLTtiykXe5h60','6qqNVTkY8uBg9cP3Jd7DAH']; 
  const accessToken = 'BQBJKD3tfaczorkErBFbYpFV3smp-FN-H9qWiJv2sL-jOfRS2J8MsS9CcSS5RjFPbiee8fvlgYQDGLVctYJ_4M9wSJK7WdtDHdjm7FWIuRbWOv0yjv-4-PSoDQODpKEbrcWOKlSb_WQCP-JMx1S4056Ze4nV4BaGvODU0Q3SN1BtEEi7h8hQREfhKF9VZlUO8_8loiPRr-1PdWxrcbKnoZgAc5OfMRwu'; // Replace with your Spotify access token
  const [artistsData, setArtistsData] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioRef = useRef(null);

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
  }, [accessToken]);

  const playTrack = (trackUrl) => {
    if (currentTrack) {
      currentTrack.pause();
      currentTrack.currentTime = 0;
    }

    if (audioRef.current) {
      audioRef.current.src = trackUrl;
      audioRef.current.play();
      setCurrentTrack(audioRef.current);
    }
  };

  return (
    <div>
      <CustomNavbar></CustomNavbar>
      <h1>Top Artists to Get You Started</h1>
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

      {/* Hidden audio player */}
      <audio ref={audioRef} controls style={{ display: 'none' }} />
    </div>
  );
};

export default TopArtists;
