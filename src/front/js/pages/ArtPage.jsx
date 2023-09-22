import React, { useEffect, useState } from 'react';
import { Container, Dropdown, Button, Row, Col } from 'react-bootstrap';
import Navbar from '../component/Navbar';
import CustomNavbar from '../component/CustomNavbar.js';
import { useAccessToken } from '../AccessTokenContext.jsx';
import '/workspaces/Team-3-Final-Project/src/front/styles/Artpage.css'

function ArtPage() {
  const [artistInfo, setArtistInfo] = useState(null);
  const [showTopTracks, setShowTopTracks] = useState(false);
  const [topTracks, setTopTracks] = useState([]);
  const [showAllAlbums, setShowAllAlbums] = useState(false);
  const [albums, setAlbums] = useState([]);
  const { accessToken } = useAccessToken();
  const [likes, setLikes] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedArtistId, setSelectedArtistId] = useState(null);


  const artistIds = [
    '5f7VJjfbwm532GiveGC0ZK', // Artist 1 ID
    '4gzpq5DPGxSnKTe4SA8HAU', // Artist 2 ID
    '1RyvyyTE3xzB2ZywiAwp0i', // Artist 3 ID
    '5pKCCKE2ajJHZ9KAiaK11H', // Artist 4 ID
    '0H39MdGGX6dbnnQPt6NQkZ', // Artist 5 ID
    '6vWDO969PvNqNYHIOW5v0m', // Artist 6 ID
    '4oUHIQIBe0LHzYfvXNW4QM', // Artist 7 ID
    '12GqGscKJx3aE4t07u7eVZ', // Artist 8 ID
    '1Xyo4u8uXC1ZmMpatF05PJ', // Artist 9 ID
    '1URnnhqYAYcrqrcwql10ft'  // Artist 10 ID
    
    // Add more artist IDs here
  ];
  
  // Set the selected artist ID once when the component is first mounted
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * artistIds.length);
    setSelectedArtistId(artistIds[randomIndex]);
  }, []); // Empty dependency array ensures this only runs once when the component mounts

  //change the Artist id on Line 26, 51, 76 to the desire Artist 
  // /artist/{artistid}

  useEffect(() => {

    async function fetchArtistInfo() {
      if (!selectedArtistId) return;
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.spotify.com/v1/artists/${selectedArtistId}`, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});


        if (response.ok) {
          const data = await response.json();
          setArtistInfo(data);
        } else {
          setError('Failed to fetch artist info');
        }
      } catch (error) {
        setError('Failed to fetch artist info');
      } finally {
        setIsLoading(false);
      }
    }

    fetchArtistInfo();
  }, [accessToken]);

  useEffect(() => {

    async function fetchTopTracks() {
      if (!selectedArtistId) return;
      try {
        const response = await fetch(`https://api.spotify.com/v1/artists/${selectedArtistId}/top-tracks?country=US`, {
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});


        if (response.ok) {
          const data = await response.json();
          setTopTracks(data.tracks);
        } else {
          console.error('Error fetching top tracks');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    if (showTopTracks) {
      fetchTopTracks();
    }
  }, [showTopTracks, accessToken]);

  useEffect(() => {

    async function fetchAlbums() {
      if (!selectedArtistId) return;
      try {
        const response = await fetch(`https://api.spotify.com/v1/artists/${selectedArtistId}/albums`, {
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});


        if (response.ok) {
          const data = await response.json();
          setAlbums(data.items.slice(0, 5)); // Get the first 5 albums
        } else {
          console.error('Error fetching albums');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    if (showAllAlbums) {
      fetchAlbums();
    }
  }, [showAllAlbums, accessToken]);

  return (
    <div>
      <CustomNavbar />
      <div>
        {isLoading}
        {error && <p>{error}</p>}
        <h2>{artistInfo?.name}</h2>
        {artistInfo?.images.length > 0 && (
          <img src={artistInfo.images[0].url} className="artist-image" alt={artistInfo.name} />
        )}
        <Container className="justify-content-md-center">
          <Row>
            <Col id="artistFollowers">Followers: {artistInfo?.followers.total}</Col>
            <Col><span className="likes-count">❤️Likes: {likes}</span></Col>
            <Col>Artist popularity: {artistInfo?.popularity}</Col>
          </Row>
        </Container>
        <p></p>
        <Button className="TopTracksButton" variant="secondary" onClick={() => setShowTopTracks(!showTopTracks)}>Top tracks</Button>{' '}
        <Button className="AllAlbumsButton" variant="secondary" onClick={() => setShowAllAlbums(!showAllAlbums)}>All Albums</Button>{' '}
        <Button className="FavButton" variant="secondary">Add to Favorite</Button>{' '}
        <Button className="LikeButton" variant="secondary" onClick={() => setLikes(likes + 1)}>Like</Button>
        {showTopTracks && (
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">Top Tracks</Dropdown.Toggle>
            <Dropdown.Menu>
              {topTracks.map((track) => (
                <Dropdown.Item key={track.id} >
                {track.name}
                <audio controls>
                  <source src={track.preview_url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </Dropdown.Item>
            ))}
            </Dropdown.Menu>
          </Dropdown>
        )}
        {showAllAlbums && (
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">All Albums</Dropdown.Toggle>
            <Dropdown.Menu>
              {albums.map((album) => (
                <Dropdown.Item key={album.id}>
                  <img src={album.images[0]?.url} alt={album.name} className="album-image" />
                  {album.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
    </div>
  );
}

export default ArtPage;

