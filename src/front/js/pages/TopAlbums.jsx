import React, { useEffect, useState } from "react";

function TopAlbums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const accessToken = "BQCgacuIiqQp1GJPzAMAa_diAOmj5D1BAJl7ITPfVRHUaNEe1dZOyDusFWPL1rlkHosvCAIuL9DoWn-2pjhxYinrBaRxgZyqUOXih1ORrP6EQ4rIluikDZUk_plrune83lK0-viZrIJl3GcrXV3Qx6S73LuxZglLpL8A-okroBn965pRdceUVoozWUHC2Y3DGDVhBwNckQ2b3D03nAs5laoh_h7s8CHG"; // Replace with your Spotify access token
        const albumIds = ["3RQQmkQEvNCY4prGKE6oc5","2ODvWsOgouMbaA5xf0RkJe","3T4tUhGYeRNVUGevb0wThu","4g1ZRSobMefqF6nelkgibi"]; // Replace with your album IDs

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
      {albums.map((album) => (
        <div key={album.id} className="col-md-4 mb-4">
          <div className="card" style={{ maxWidth: "400px" }}>
            <img src={album.images[0].url} className="card-img-top" alt={album.name} style={{ maxHeight: "400px" }} />
            <div className="card-body">
              <h4 className="card-title">{album.name}</h4>
              <h5 className="card-subtitle mb-2">Artist: {album.artists.map((artist) => artist.name).join(", ")}</h5>
              <h5 className="card-subtitle mb-2">Tracklist</h5>
              <ul className="list-group list-group-flush">
                {album.tracks.items.map((track) => (
                  <li key={track.id} className="list-group-item">{track.name}</li>
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
