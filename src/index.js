import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './contexts/AuthContext';
import { ScreenProvider } from './contexts/ScreenContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ScreenProvider>
        <App />
      </ScreenProvider>
    </AuthProvider>
  </React.StrictMode>
);

// Opcional: Si quieres medir el rendimiento de tu app
reportWebVitals();
