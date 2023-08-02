// pages/Home.js
import React from 'react';

import RegistroUsuario from '../components/formulario_registro/RegistroUsuario';
import FuncionesCol from '../components/funcionescol/FuncionesCol';

const slides = [
  { url: "/src/assets/image-1.jpg", title: "beach" },
  { url: "/src/assets/image-2.jpg", title: "boat" },
  { url: "/src/assets/image-3.jpg", title: "forest" },
];

const Home = () => {
  return (
    <div>
      <FuncionesCol />
    </div>
  );
};

export default Home;
