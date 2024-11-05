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
  
      const validDomains = ['@ucn.cl', '@ce.ucn.cl', '@alumnos.ucn.cl'];
      const userEmail = user.email;
  
      const isValidDomain = validDomains.some(domain => userEmail.endsWith(domain));
  
      if (isValidDomain) {
        localStorage.setItem('isAuthenticated', true);
        setIsAuthenticated(true);
      } else {
        alert('Solo se permiten correos UCN');
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
      
      {/* Mensaje enumerado con título */}
      <div className="login-description">
        <h2 className="login-description-title">¿Cómo empezar?</h2>
        <ol>
          <li>Inicia sesión con tu correo institucional</li>
          <li>Responde cada pregunta según tus conocimientos</li>
          <li>Revisa el feedback que cada pregunta te dará</li>
          <li>Repite las veces que sea necesario</li>
        </ol>
      </div>
    </div>
  );
};

export default LoginScreen;
