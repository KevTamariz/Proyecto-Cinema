import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slider from './components/slider/Slider';
import NavFechas from './components/navfechas/Navfechas';
import FuncionesCol from './components/funcionescol/FuncionesCol';
import Nosotros from './pages/Nosotros'; // Importa el componente Nosotros desde la carpeta pages

const slides = [
  { url: "/src/assets/image-1.jpg", title: "beach" },
  { url: "/src/assets/image-2.jpg", title: "boat" },
  { url: "/src/assets/image-3.jpg", title: "forest" },
];

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="containerslide">
          <Slider slides={slides} />
        </div>
        <div className="content-container">
          <NavFechas />
          <FuncionesCol />
        </div>
        {/* Configura las rutas dentro de <Routes> */}
        <Routes>
          {/* Ruta para el componente Nosotros */}
          <Route path="/Nosotros" element={<Nosotros />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
