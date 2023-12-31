import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavbarBS from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAccessToken } from '../AccessTokenContext.jsx';

const CustomNavbar = ({ history }) => {
  const [query, setQuery] = useState('');
  const [artists, setArtists] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { accessToken } = useAccessToken();


  // Replace with your actual Spotify API token
  const SPOTIFY_API_TOKEN = `Bearer ${accessToken}`;

  // Debounce search function
  const debouncedSearch = debounce(async (query) => {
    try {
      const res = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=artist`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setSuggestions(res.data.artists.items);
    } catch (err) {
      console.error('An error occurred while fetching data:', err);
    }
  }, 300); // 300ms delay

  useEffect(() => {
    if (query) {
      debouncedSearch(query);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleArtistClick = (artistId) => {
    history.push(`/artist/${artistId}`);
  };

  return (
    <div>
      <NavbarBS expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <NavbarBS.Brand href="#">HYPNOS</NavbarBS.Brand>
          <NavbarBS.Toggle aria-controls="navbarScroll" />
          <NavbarBS.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href='/LandingPage'>Home</Nav.Link>
              <Nav.Link href="/TopArtists">Top Artists</Nav.Link>
              <Nav.Link href="/TopAlbums">Top Albums</Nav.Link>
              <Nav.Link href="/ArtPage">Artists Page</Nav.Link>
              
            </Nav>
          </NavbarBS.Collapse>
        </Container>
      </NavbarBS>
      <div>
    {/* Display suggestions */}
    {suggestions.map((suggestion, index) => (
      <div 
        key={index} 
        onClick={() => handleArtistClick(suggestion.id)}
        style={{cursor: 'pointer'}}
      >
        {suggestion.name}
      </div>
    ))}
  </div>
    </div>
  );
};

export default CustomNavbar;
