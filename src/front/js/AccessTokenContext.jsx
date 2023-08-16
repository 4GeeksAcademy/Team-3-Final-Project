// src/AccessTokenContext.js
import React, { createContext, useContext, useState } from 'react';

const AccessTokenContext = createContext();

export const useAccessToken = () => {
  return useContext(AccessTokenContext);
};

export const AccessTokenProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState('');

  const updateAccessToken = newToken => {
    setAccessToken(newToken);
  };

  return (
    <AccessTokenContext.Provider value={{ accessToken, updateAccessToken }}>
      {children}
    </AccessTokenContext.Provider>
  );
};
