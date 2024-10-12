import React, { createContext, useState, useContext } from 'react';

const ScreenContext = createContext();

export const ScreenProvider = ({ children }) => {
  const [screen, setScreen] = useState('home');

  return (
    <ScreenContext.Provider value={{ screen, setScreen }}>
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreen = () => {
  return useContext(ScreenContext);
};
