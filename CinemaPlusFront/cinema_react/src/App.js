import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Prox from './pages/Prox';
import Nosotros from './pages/Nosotros';
import Navbar from './components/Navbar';

const App = () => {
  const [data, setData] = useState(null);
  const [selectedSucursal, setSelectedSucursal] = useState(1); // Estado para almacenar la sucursal seleccionada

  useEffect(() => {
    // Llamada a la API solo cuando cambia la sucursal seleccionada
    fetch(`/sucursales/${selectedSucursal}/proyecciones`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error al obtener las proyecciones:', error));
  }, [selectedSucursal]);

  return (
    <div className="app-container">
      <Router>
        <Navbar setSelectedSucursal={setSelectedSucursal} />
        <Routes>
          {/* Puedes pasar las proyecciones y la sucursal seleccionada como props */}
          <Route
            path="/Home"
            element={<Home proyecciones={data} selectedSucursal={selectedSucursal} />}
          />
          <Route path="/Prox" element={<Prox />} />
          <Route path="/Nosotros" element={<Nosotros />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
