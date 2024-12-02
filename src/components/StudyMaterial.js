import React from 'react';
import '../styles/StudyMaterial.css';
import Header from './Header';

const StudyMaterial = () => {
  return (
    <>
      <Header /> {/* Header fuera del contenedor principal */}
      <div className="study-material-container">
        <h1>Material de Estudio</h1>
        <div>
        <p>
          En el siguiente enlace encontrarás un acceso directo a una carpeta de Google Drive que contiene una colección de archivos PDF con material de estudio relacionado con el cuidado de heridas. Estos recursos están diseñados para ayudarte a profundizar en el tema y mejorar tus conocimientos.
        </p>
          <a
            href="https://drive.google.com/drive/folders/1oMKMEknycLH_V0UMGu3h1TiL-lx580m-?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link a drive
          </a>
        </div>
      </div>
    </>
  );
};

export default StudyMaterial;
