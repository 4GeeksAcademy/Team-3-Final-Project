import React, { useEffect } from 'react';
import { useAccessToken } from '../AccessTokenContext.jsx';

const SpotifyAuth = ({ clientId, clientSecret }) => {
  const { updateAccessToken } = useAccessToken();

  useEffect(() => {
    const authenticateSpotify = async () => {
      const tokenEndpoint = 'https://accounts.spotify.com/api/token';
      const authString = `${clientId}:${clientSecret}`;
      const authHeader = `Basic ${btoa(authString)}`;
      const formData = new URLSearchParams();
      formData.append('grant_type', 'client_credentials');

      try {
        const response = await fetch(tokenEndpoint, {
          method: 'POST',
          headers: {
            'Authorization': authHeader,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          updateAccessToken(data.access_token);
        } else {
          console.error('Failed to fetch access token');
        }
      } catch (error) {
        console.error('Error fetching access token', error);
      }
    };

    authenticateSpotify();
  }, [clientId, clientSecret, updateAccessToken]);

  return null; 
};

export default SpotifyAuth;
