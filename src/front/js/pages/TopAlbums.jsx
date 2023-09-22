import React, { useEffect, useState } from "react";
import '../../styles/Topalbums.css';
import CustomNavbar from '../component/CustomNavbar.js';

function TopAlbums() {
  const [albums, setAlbums] = useState([]);

  const playTrack = (trackPreviewUrl) => {
    const audio = new Audio(trackPreviewUrl);
    audio.play();
  };

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        // Replace with your Spotify access token
        const accessToken = "BQA4mC_iC-d5gIssF1E7EiLqDdtYOqghbD3ZfSxnMnsUD0UE2fVFTH5E69686_jNzXL0xQ4m5YDWCF2a9GXEcs96dePPLpl9YW7gndJSWsW2LS0-s_ZLoCIGMLQTsmecJdap3M1gxxMbykZPBWMRouKzXwf21pFLFPyydypJcriVhFAhM9DbAgWHqdLrOSgCoANv533E7BTqnKBkRQWRaEJwOXCTOGpJ";

        const albumIds = [
          "3RQQmkQEvNCY4prGKE6oc5",
          "2ODvWsOgouMbaA5xf0RkJe",
          "3T4tUhGYeRNVUGevb0wThu",
          "4g1ZRSobMefqF6nelkgibi",
          "01sfgrNbnnPUEyz6GZYlt9",
          "0JeyP8r2hBxYIoxXv11XiX",
          "6trNtQUgC8cgbWcqoMYkOR",
          "4yP0hdKOZPNshxUOjY0cZj",
          "6s84u2TUpR3wdUv4NgKA2j",
          "0S0KGZnfBGSIssfF54WSJh"
        ];

        const albumPromises = albumIds.map(async (albumId) => {
          const response = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (!response.ok) {
            throw new Error("Error fetching album");
          }

          const data = await response.json();
          return data;
        });

        const albumsData = await Promise.all(albumPromises);
        setAlbums(albumsData);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, []);

  if (albums.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className="row">

<CustomNavbar></CustomNavbar>
      {albums.map((album) => (
        <div key={album.id} className="col-md-4 mb-4">
          <div className="card" style={{ maxWidth: "400px" }}>
            <img src={album.images[0].url} className="s" alt={album.name} style={{ maxHeight: "400px" }} />
            <div className="card-body">
              <h4 className="card-title">{album.name}</h4>
              <h5 className="card-subtitle mb-2">Artist: {album.artists.map((artist) => artist.name).join(", ")}</h5>
              <h5 className="card-subtitle mb-2">Tracklist</h5>
              <ul className="list-group list-group-flush">
                {album.tracks.items.map((track) => (
                  <li
                    key={track.id}
                    className="list-group-item"
                    style={{ cursor: 'pointer' }}
                    onClick={() => playTrack(track.preview_url)}
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
  );
}

export default TopAlbums;
