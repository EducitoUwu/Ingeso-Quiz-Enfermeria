import React from 'react';
import '../styles/Header.css';
import logoWhite from '../assets/escudo-ucn-white.png';
import logoColor from '../assets/escudo-ucn.png';
import { useScreen } from '../contexts/ScreenContext';

const Header = ({ useColorLogo }) => {
  const { setScreen } = useScreen();
  const logo = useColorLogo ? logoColor : logoWhite;

  return (
    <div className="header">
      <img className="header-logo" src={logo} alt="Logo Universidad Católica del Norte" />
      <button
        className="header-home-button"
        onClick={() => setScreen('home')}
      >
        Inicio
      </button>
    </div>
  );
};

export default Header
