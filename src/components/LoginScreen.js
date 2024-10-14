import React from 'react';
import '../styles/LoginScreen.css';
import logo from '../assets/escudo-ucn-white.png';
import { auth, provider, signInWithPopup } from '../firebaseConfig';
import { useAuth } from '../contexts/AuthContext';

const LoginScreen = () => {
  const { setIsAuthenticated } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user.email.match(/^[^@]+@[^@]+\.ucn\.cl$/)) {
        localStorage.setItem('isAuthenticated', true);
        setIsAuthenticated(true);
      } else {
        alert('Solo se permiten correos del dominio ucn.cl');
        auth.signOut();
      }
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
      alert('Ocurrió un error al intentar iniciar sesión.');
    }
  };

  return (
    <div className="login-screen">
      <img className="login-logo" src={logo} alt="Logo Universidad Católica del Norte" />
      <h1 className="login-title">Bienvenido al Quiz de Enfermería</h1>
      <button className="login-button" onClick={handleGoogleLogin}>Iniciar sesión con Gmail</button>
    </div>
  );
};

export default LoginScreen;
